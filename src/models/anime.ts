class Anime {
	id: number;
	name: string;
	english?: string;
	idMal?: number;
	coverImage?: string;
	link = () =>
		this.idMal ? `https://myanimelist.net/anime/${this.idMal}` : undefined;
}

export default Anime;
