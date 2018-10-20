import axios from 'axios';
import Anime from 'src/models/anime';
import Difficulty from 'src/models/difficulty';
import Selection from 'src/models/selection';

class AnimeService {
	private storagePrefix = {
		SELECTIONS: 'anicha-selections',
		USERNAME: 'anicha-username',
		DIFFICULTY: 'anicha-difficulty'
	};
	private requiredTier = 3;

	getDefaultSelection: (() => Selection[][]) = () => {
		const outer = [];
		for (let index = 0; index < this.requiredTier; index++) {
			outer.push([]);
		}
		return outer;
	}

	getSelectionStorage: (() => Selection[][]) = () => {
		const itemStr = localStorage.getItem(this.storagePrefix.SELECTIONS);
		if (itemStr) {
			return JSON.parse(itemStr);
		}
		return this.getDefaultSelection();
	};

	setSelectionStorage: ((selections: Selection[][]) => void) = selections => {
		localStorage.setItem(
			this.storagePrefix.SELECTIONS,
			JSON.stringify(selections)
		);
	};

	getUsernameStorage: (() => string | undefined) = () => {
		const username = localStorage.getItem(this.storagePrefix.USERNAME);
		if (username) {
			return username;
		}
		return undefined;
	};

	setUsernameStorage: ((username: string) => void) = username => {
		localStorage.setItem(this.storagePrefix.USERNAME, username);
	};

	getDifficultyStorage: (() => Difficulty | undefined) = () => {
		const itemStr = localStorage.getItem(this.storagePrefix.DIFFICULTY);
		if (itemStr) {
			return JSON.parse(itemStr);
		}
	};

	setDifficultyStorage: ((diff: Difficulty) => void) = diff => {
		localStorage.setItem(this.storagePrefix.DIFFICULTY, JSON.stringify(diff));
	};

	searchAnime: ((input: string) => Promise<Anime[]>) = async input => {
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
}

export default new AnimeService();