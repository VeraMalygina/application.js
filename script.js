'use strict';

const numberOfFilms = +prompt('Combien de films avez-vous deja regarde?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Un des derniers films que tu as regarde?', '');
const b = prompt('Comment evalueriez-vous le film?', '');
const c = prompt('Un des derniers films que tu as regarde?', '');
const d = prompt('Comment evalueriez-vous le film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
