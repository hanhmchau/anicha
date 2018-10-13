// const axios = require('axios');
// const fs = require('fs');

// axios
// .get(`https://api.jikan.moe/v3/anime/${236}`)
// .then(response => {
// 	const data = response.data;
// 	const anime = {
// 		id: data.mal_id,
// 		coverImage: data.image_url,
// 		english: data.title_english,
// 		name: data.title
// 	};
// 	console.log(anime);
// })
// .catch(err => {
// 	console.log(err.response);
// });

// // const animePromises = [];
// // let allAnimes = [];

// // const limit = 1000;
// // const array = new Array();
// // for (let i = 0; i < 600; i++) {
// // 	array.push([]);
// // }

// // for (let i = 1; i <= limit; i++) {
// // 	animePromises.push(
// // 		new Promise((resolve, reject) => {
// // 			setTimeout(() => {
// // 				axios
// // 					.get(`https://api.jikan.moe/v3/anime/${i}`)
// // 					.then(response => {
// // 						array[response.status].push(i);
// // 						const data = response.data;
// // 						const anime = {
// // 							id: data.mal_id,
// // 							coverImage: data.image_url,
// // 							english: data.title_english,
// // 							name: data.title
// // 						};
// // 						allAnimes.push(anime);
// // 						resolve();
// // 					})
// // 					.catch(err => {
// // 						array[err.response.status].push(i);
// // 						resolve();
// // 					});
// // 			}, 1000);
// // 		})
// // 	);
// // }
// // Promise.all(animePromises).then(() => {
// // 	console.log(allAnimes.length);
// // 	allAnimes = allAnimes.sort((a, b) => a.id - b.id);
// // 	array.forEach((value, index) => {
// // 		value.sort((a, b) => a - b);
// // 		if (value.length > 0) {
// // 			console.log(
// // 				`Status ${index}: ${value.length} - ${value.join(' ')}`
// // 			);
// // 		}
// // 	});
// // 	fs.writeFile('anime.json', JSON.stringify(allAnimes), () => {
// // 		console.log('Done.');
// // 	});
// // });
