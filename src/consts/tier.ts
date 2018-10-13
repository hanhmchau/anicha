import Tier from 'src/models/tier';

const tier: Tier[] = [
	{
		name: 'Casual',
		challenges: [
			{ id: 1, name: 'Watch an ONA' },
			{
				id: 2,
				name: 'Watch a short anime with 6 episodes or more',
				helptext: '15 minutes or less per episode'
			},
			{ id: 3, name: 'Watch a Music type anime' },
			{
				id: 4,
				name: 'Watch an award winning anime',
				helptext: 'Listed in the Award Winning Club'
			},
			{ id: 5, name: 'Watch a noitaminA anime' },
			{ id: 6, name: 'Watch an anime by a studio you don`t know' },
			{
				id: 7,
				name: 'Watch an anime which began airing between 2000 and 2009'
			},
			{
				id: 8,
				name: 'Watch an anime which began airing between 2010 and 2014'
			},
			{ id: 9, name: 'Watch an anime that aired only during 2017' },
			{
				id: 10,
				name: 'Watch an anime with 20 episodes or more',
				helptext: '16 minutes or more per episode'
			},
			{ id: 11, name: 'Watch an Original anime' },
			{ id: 12, name: 'Watch an anime adapted from a Visual Novel' },
			{
				id: 13,
				name: 'Watch an anime adapted from a Novel or Light Novel'
			},
			{ id: 14, name: 'Watch an anime adapted from a 4-koma Manga' },
			{
				id: 15,
				name: 'Watch a completed anime with a score of or below 6.00',
				helptext: '16 minutes or more per episode'
			},
			{
				id: 16,
				name: 'Watch a completed anime with a score of or above 8.00',
				helptext: '16 minutes or more per episode'
			},
			{
				id: 17,
				name:
					'Watch a completed anime with a popularity of or lower than #701',
				helptext: '16 minutes or more per episode'
			},
			{
				id: 18,
				name:
					'Watch a completed anime with less than 5,000 completed members'
			},
			{
				id: 19,
				name:
					'Watch a completed anime scored 10 or 9 from a challenger on your sign up page'
			},
			{
				id: 20,
				name:
					'Watch an anime with at least one human child as a main character',
				helptext: 'Two or more MCs, one 12 years old or below'
			},
			{
				id: 21,
				name:
					'Watch an anime with a main character that is a professional in their field'
			},
			{
				id: 22,
				name: 'Watch a Superhero or GAR themed anime',
				helptext: 'Use those listed in the threads'
			},
			{
				id: 23,
				name: 'Watch a Gourmet or Magical Girl themed anime',
				helptext: 'Use those listed in the threads'
			},
			{
				id: 24,
				name: 'Watch an anime tagged as Military, Police and/or Space'
			},
			{
				id: 25,
				name: 'Watch an anime tagged as Demons, Horror and/or Vampire'
			},
			{ id: 26, name: 'Watch an anime tagged with 4 or more genres' },
			{
				id: 27,
				name:
					'Watch an anime recommended to you in the challenge discussion thread'
			},
			{
				id: 28,
				name:
					'Watch an anime that a participant has completed for this challenge'
			},
			{
				id: 29,
				name:
					'Watch an anime from the predictive search using a participant on your sign up page'
			},
			{ id: 30, name: 'Watch an anime suggested by MAL or by Anime+' },
			{ id: 31, name: 'Watch a Featured Anime' },
			{ id: 32, name: 'Watch an anime with an English main title' },
			{ id: 33, name: 'Watch an anime from a random TVTropes' }
		]
	},
	{
		name: 'Seasoned',
		challenges: [
			{ id: 34, name: 'Watch a stand-alone OVA' },
			{
				id: 35,
				name: 'Watch a Movie with a duration of 90 minutes or more'
			},
			{ id: 36, name: 'Watch the last movie part of a Movie-Series' },
			{ id: 37, name: 'Watch a short anime with 35 episodes or more' },
			{ id: 38, name: 'Watch a Korean or Chinese anime' },
			{
				id: 39,
				name:
					'Watch an anime by a director that made one of your Favorite Anime'
			},
			{
				id: 40,
				name:
					'Watch an anime without the Producer, Licensor nor Studio listed'
			},
			{
				id: 41,
				name:
					'Watch an anime by a studio with 3 to 30 anime in MAL`s database'
			},
			{
				id: 42,
				name:
					'Watch an anime from your least favorite studio by weighted score on Anime+'
			},
			{
				id: 43,
				name:
					'Watch an anime with a voice actor that worked on 5 or less anime'
			},
			{
				id: 44,
				name:
					'Watch an anime which began airing the same month you joined MAL'
			},
			{
				id: 45,
				name: 'Watch an anime which began airing between 1980 and 1989'
			},
			{
				id: 46,
				name: 'Watch an anime which began airing between 1990 and 1999'
			},
			{ id: 47, name: 'Watch an anime with 35 episodes or more' },
			{ id: 48, name: 'Watch an anime adapted from a Game' },
			{ id: 49, name: 'Watch an anime adapted from a Book' },
			{ id: 50, name: 'Watch an anime adapted from a Web Manga' },
			{
				id: 51,
				name:
					'Watch a completed anime with a popularity of or lower than #2,001'
			},
			{
				id: 52,
				name:
					'Watch a completed anime with less than 2,500 completed members'
			},
			{
				id: 53,
				name:
					'Watch a completed anime with more users in Plan-to-Watch than Completed'
			},
			{
				id: 54,
				name:
					'Watch a completed anime scored 4 or less from another challenger who posted on your sign up page'
			},
			{
				id: 55,
				name: 'Watch a completed anime scored by less than 50 users'
			},
			{
				id: 56,
				name: 'Watch a completed anime which 0 members have favorited'
			},
			{
				id: 57,
				name: 'Watch an anime with a main cast primarily of one gender'
			},
			{
				id: 58,
				name:
					'Watch an anime with 3 or more human adults as the main cast'
			},
			{
				id: 59,
				name:
					'Watch an anime with at least two human children as main characters'
			},
			{
				id: 60,
				name:
					'Watch an anime with a human main character that is not Japanese'
			},
			{
				id: 61,
				name:
					'Watch an anime that mainly takes places outside of Japan, but still on Earth'
			},
			{ id: 62, name: 'Watch an anime rated G or R' },
			{
				id: 63,
				name:
					'Watch an anime tagged as Dementia, Psychological and/or Thriller'
			},
			{
				id: 64,
				name: 'Watch an anime tagged as Martial Arts and/or Samurai'
			},
			{ id: 65, name: 'Watch an anime tagged as Cars and/or Game' },
			{ id: 66, name: 'Watch an anime tagged with 5 or more genres' },
			{
				id: 67,
				name:
					'Watch an anime featured in another participant`s forum set'
			},
			{ id: 68, name: 'Watch an active staff member`s favorite anime' },
			{ id: 69, name: 'Watch an anime that was recently reviewed' },
			{
				id: 70,
				name: 'Watch a completed anime with a synopsis by MAL Rewrite'
			},
			{
				id: 71,
				name:
					'Watch an anime with a special character or symbol in the title'
			},
			{
				id: 72,
				name:
					'Watch an anime with a title that starts with the last letter of your username'
			},
			{
				id: 73,
				name:
					'Watch an anime with a title that ends with the first letter of your username'
			},
			{
				id: 74,
				name:
					'Watch one of the Top 5 anime recommended to your Favorite Anime'
			},
			{
				id: 75,
				name:
					'Watch an anime with 3 or more main characters with unnatural hair color'
			},
			{
				id: 76,
				name:
					'Watch an anime with 4 or more main characters with natural hair color'
			}
		]
	},
	{
		name: 'Advanced',
		challenges: [
			{
				id: 77,
				name: 'Watch a Movie with a duration of 120 minutes or more'
			},
			{ id: 78, name: 'Watch a short anime with 70 episodes or more' },
			{
				id: 79,
				name:
					'Watch an Alternative Version, Alternative Setting or Spin-Off of something you`ve previously watched'
			},
			{
				id: 80,
				name:
					'Watch one of the 5 lowest scored anime from your favorite studio by weighted score on Anime+'
			},
			{
				id: 81,
				name:
					'Watch an anime which began airing the same day you joined MAL'
			},
			{
				id: 82,
				name: 'Watch an anime which began airing between 1917 and 1959'
			},
			{
				id: 83,
				name: 'Watch an anime which began airing between 1960 and 1979'
			},
			{ id: 84, name: 'Watch an anime with 50 episodes or more' },
			{
				id: 85,
				name: 'Watch an anime with 30 minutes or more per episode'
			},
			{
				id: 86,
				name:
					'Watch a related anime that aired at least 15 years before/after a previously completed series'
			},
			{ id: 87, name: 'Watch an anime adapted from a Card Game' },
			{ id: 88, name: 'Watch an anime adapted from a Picture Book' },
			{ id: 89, name: 'Watch an anime adapted from a Digital Manga' },
			{ id: 90, name: 'Watch an anime adapted from Radio or Music' },
			{
				id: 91,
				name:
					'Watch a completed anime adapted from a manga with a score of 6.50 or lower'
			},
			{
				id: 92,
				name: 'Watch a completed anime with a score of or below 5.00'
			},
			{
				id: 93,
				name:
					'Watch a completed anime with a popularity of or lower than #5,001'
			},
			{
				id: 94,
				name:
					'Watch a completed anime with less than 1,000 completed members'
			},
			{
				id: 95,
				name: 'Watch a completed anime with less than 5 favorites'
			},
			{
				id: 96,
				name:
					'Watch an anime with 5 or more human adults as the main cast'
			},
			{
				id: 97,
				name: 'Watch an anime with a non-humanoid main character'
			},
			{
				id: 98,
				name:
					'Watch an anime that combines one of your favorite and least favorite genres'
			},
			{ id: 99, name: 'Watch an anime rated R+' },
			{
				id: 100,
				name: 'Watch an anime tagged as Shounen Ai or Shoujo Ai'
			},
			{ id: 101, name: 'Watch an anime tagged with 7 or more genres' },
			{
				id: 102,
				name:
					'Watch an anime recommended to you by a challenge staff member'
			},
			{
				id: 103,
				name: 'Watch a completed anime that hasn`t been reviewed'
			},
			{
				id: 104,
				name:
					'Watch a completed anime with no Opening nor Ending themes listed'
			},
			{
				id: 105,
				name:
					'Watch a completed anime that doesn`t have forum discussion threads'
			},
			{
				id: 106,
				name: 'Watch the Top anime recommended to your Favorite Anime'
			},
			{ id: 107, name: 'Finish an on-hold or dropped anime' },
			{
				id: 108,
				name:
					'Watch an anime with 6 or more main characters with natural hair color'
			}
		]
	}
];

export default tier;
