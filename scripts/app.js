const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieReleaseYear = document.querySelector('.userInputReleaseYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');

const btn = document.querySelector('.button');
const movieTitleToDisplay =  document.querySelector('.favouriteMovieTitle');
const movieReleaseYearToDisplay = document.querySelector('.favouriteMovieReleaseYear');

let titleInStorage = localStorage.getItem('title');
let releaseYearInStorage = localStorage.getItem('releaseYear');
let imageUrlInStorage = localStorage.getItem('imageUrl');

console.log(titleInStorage);
console.log(releaseYearInStorage);
console.log(imageUrlInStorage);

if(titleInStorage && imageUrlInStorage && releaseYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseYearToDisplay.textContent = releaseYearInStorage; 
    container.style.backgroundImage = `linear-gradient(rgba(47, 47, 119, 0.705), rgba(49, 43, 43, 0.616)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieReleaseYearInput = movieReleaseYear.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('releaseYear', movieReleaseYearInput)
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput; 
    movieReleaseYearToDisplay.textContent = movieReleaseYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(47, 47, 119, 0.705), rgba(49, 43, 43, 0.616)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieReleaseYear.value = '';
    moviePosterUrl.value = '';

});