import Difficulty from 'src/models/difficulty';

const difficulties: Difficulty[] = [
	{
		name: 'Knight',
		required: [10, 8, 2]
	},
	{
		name: 'Baron',
		required: [8, 12, 10]
	},
	{
		name: 'Marquess',
		required: [8, 17, 15]
	},
	{
		name: 'Viceroy',
		required: [7, 22, 21]
	},
	{
		name: 'King',
		required: [7, 24, 29]
	},
	{
		name: 'Hardcore',
		required: [30, 40, 30]
	}
];

export default difficulties;
