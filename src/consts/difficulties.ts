import Difficulty from 'src/models/difficulty';

const difficulties: Difficulty[] = [
	{
		name: 'Knight',
		required: [10, 8, 2],
		color: '99cc00'
	},
	{
		name: 'Baron',
		required: [8, 12, 10],
		color: '008000'
	},
	{
		name: 'Marquess',
		required: [8, 17, 15],
		color: 'e65c00'
	},
	{
		name: 'Viceroy',
		required: [7, 22, 21],
		color: 'b30000'
	},
	{
		name: 'King',
		required: [7, 24, 29],
		color: '990099'
	},
	{
		name: 'Hardcore',
		required: [30, 40, 30],
		color: 'cc0066'
	}
];

export default difficulties;
