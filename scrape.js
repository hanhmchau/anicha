// const axios = require('axios');
// const fs = require('fs');

// const animePromises = [];
// let allAnimes = [];

// const limit = 1000;

// for (let i = 1; i <= limit; i++) {
// 	animePromises.push(
// 		new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				axios
// 					.get(`https://api.jikan.moe/v3/anime/${i}`)
// 					.then(response => {
// 						if (response.status === 200) {
// 							const data = response.data;
// 							// const anime = {
// 							// 	id: data.mal_id,
// 							// 	coverImage: data.image_url,
// 							// 	english: data.title_english,
// 							// 	name: data.title
// 							// };
// 							// allAnimes.push(anime);
// 						} else {
// 							console.log(response.error ? response.error : '');
// 						}
// 						resolve();
// 					})
// 					.catch(err => {
// 						resolve();
// 					});
// 				if (i % 100 === 0) {
// 					console.log(`At ${i} now...`);
// 				}
// 			}, 100);
// 		})
// 	);
// }
// Promise.all(animePromises).then(() => {
// 	console.log(allAnimes.length);
// 	allAnimes = allAnimes.sort((a, b) => a.id - b.id);
// 	fs.writeFile('anime.json', JSON.stringify(allAnimes), () => {
// 		console.log('Done.');
// 	});
// });
