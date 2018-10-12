import axios from 'axios';
import Anime from 'src/models/anime';

const searchAnime: ((input: string) => Promise<Anime[]>) = async input => {
	try {
		const response = await axios.post('https://graphql.anilist.co', {
			query: `query ($id: Int, $page: Int, $perPage: Int, $search: String, $type: MediaType) {
                    Page(page: $page, perPage: $perPage) {
                    media(id: $id, search: $search, type: $type) {
						id
                        idMal
                        title {
                                romaji
                        english
                        }
                        coverImage {
                        medium
                        }
                        type
                    }
                }       
            }`,
			variables: {
				search: input,
				page: 1,
				perPage: 3,
				type: 'ANIME'
			}
		});
		return response.data.data.Page.media.map((media: any) => ({
			id: media.id,
			name: media.title.romaji,
			english: media.title.english,
			idMal: media.idMal,
			coverImage: media.coverImage.medium
		}));
	} catch (error) {
		// tslint:disable:no-console
		console.log(error);
	}
};

export { searchAnime };
