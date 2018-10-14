import Difficulty from 'src/models/difficulty';
import Selection from 'src/models/selection';

const renderInfo = (chosenDiff: Difficulty, username: string = '') => `[right][b]Initial Post Number: [/b] <####>[/right]
🎧[b] Challenge Start Date: [/b] 01/01/2018
🎤[b] Challenge Finish Date: [/b] 2018 
🎖️[b] Link to your list: [/b] http://myanimelist.net/animelist/${username}
🎖️[b] Link to your Anime+: [/b] http://graph.anime.plus/${username}/profile 
🔗[b] Completed Anime (at sign-up): [/b] ???
🔺[b] Difficulty: [/b] [color=#${chosenDiff.color}]${chosenDiff.name}[/color]
	
🔻[b] Legend: [/b]
[color=FORESTGREEN][b]Watching[/b][/color] - [color=MEDIUMSLATEBLUE][b]Completed[/b][/color] - [color=DIMGRAY][b]Inactive/Plan to Watch[/b]
[/color] 
`;

const renderChallenge = (sel: Selection) => {
	const color = sel.completed ? 'MEDIUMSLATEBLUE' : 'GRAY';
	if (!sel.challenge) {
		return `[*][color=GRAY][Started: <date>] [Finished: <date>][/color] (xx) Pending selection:
         [url=http://myanimelist.net/anime/<id_num>]<anime_title>[/url]`;
	}
	let anime = '';
	if (!sel.anime) {
		anime = `[url=http://myanimelist.net/anime/<id_num>]<anime_title>[/url]`;
	} else {
		anime = `[url=http://myanimelist.net/anime/${sel.anime!.id}]${
			sel.anime!.name
		}[/url]`;
	}
	return `
    [*][color=${color}][Started: 2018] [Finished: 2018][/color] (${
		sel.challenge.id
	}) ${
		sel.challenge.name
	}: [url=http://myanimelist.net/anime/<id_num>]${anime}[/url]
    `;
};

const renderTier = (
	tierSelection: Selection[],
	tierIndex: number,
	chosenDiff: Difficulty
): string => {
	const required = chosenDiff.required[tierIndex];
	const tierString = tierSelection.map(renderChallenge).join('');
	return `
        [color=#00802b][quote][center][b]Tier ${tierIndex +
			1}[/b] (${required} items)[/center][/quote][/color]

        ${tierString}
    `;
};

const renderMultiTier = (selections: Selection[][], chosenDiff: Difficulty) => {
	selections = sort(selections);
	const multiTier = selections
		.map((sel, index) => renderTier(sel, index, chosenDiff))
		.join('');
	return `🔒 [b]Challenge list[/b]
	[spoiler="Challenge list"][list=1]${multiTier}[/list][/spoiler]
	`
};

const render = (
	chosenDiff: Difficulty | undefined,
	username: string | undefined = '',
	selections: Selection[][]
) => {
	if (!chosenDiff) {
		return '';
	}
	return (
		renderInfo(chosenDiff, username) +
		renderMultiTier(selections, chosenDiff)
	);
};

const sort = (selections: Selection[][]) => {
	const newSelections: Selection[][] = [];
	selections.forEach(tierSelections => {
		const sortedSelections = tierSelections
			.slice()
			.sort((a, b) => {
				if (!a.challenge && b.challenge) {
					return 1;
				}
				if (a.challenge && !b.challenge) {
					return -1;
				}
				if (!a.challenge && !b.challenge) {
					return 0;
				}
				return a.challenge!.id - b.challenge!.id;
			});
		newSelections.push(sortedSelections);
	});
	return newSelections;
};

export default render;