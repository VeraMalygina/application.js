'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Combien de films avez-vous deja regarde?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Combien de films avez-vous deja regarde?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Un des derniers films que tu as regarde?', '');
			 const b = prompt('Comment evalueriez-vous le film?', '');
		if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

// RememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('peu de films regardes');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('vous etes un spectateur classique');
	} else if (personalMovieDB.count >= 30) {
		console.log('tu es un cinephile');
	} else {
		console.log('error');
	}
}

// DetectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Votre genre prefere numero ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}

writeYourGenres();
