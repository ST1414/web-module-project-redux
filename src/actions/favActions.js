export const TOGGLE_DISPLAY_FAV = 'TOGGLE_DISPLAY_FAV';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const toggleDisplayFav = () => {
    return ({ type: TOGGLE_DISPLAY_FAV})
}
// addFav
export const addFav = (movie) => {
    return ({type: ADD_FAV, payload: movie});
}
// removeFav
export const removeFav = (movieId) => {
    return ({type: REMOVE_FAV, payload: movieId})
}