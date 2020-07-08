// Document.getElementByID("songs");

// const songs = new Map([
// [1, 'Fast by Sueco the Child'],
// [2, 'Old Town Road - Remix by Lil Nas X'],
// [3, 'Wrong by Luh Kel'],
// [4, 'Piece Of Your Heart by MEDUZA'],
// [5, 'Kill This Love by BLACKPINK'],
// [6, 'bad guy by Billie Eilish'],
// [7, 'Verte Ir by DJ Luian'],
// [8, 'Beef FloMix by Flo Milli'],
// [9, 'Avengers: Endgame by Jared Moreno Luna'],
// [10, 'Old Town Road by Lil Nas X']]);

// console.log(songs);


// for 

const songs = document.querySelectorAll("ul > li");
console.log(songs);

for (const song of songs) {
    song.setAttribute("class", "green");
}