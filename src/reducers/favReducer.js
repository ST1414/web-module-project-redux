// Import
import { TOGGLE_DISPLAY_FAV, ADD_FAV, REMOVE_FAV } from '../actions/favActions';

// Initial State
const initialState = {
    favorites: [],
    displayFavorites: false
}

// Reducer
const favReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_DISPLAY_FAV:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAV:
            console.log('ADD FAV: ', action.payload)
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(movie => (movie.id !== action.payload ))
            }
        default:
            return state;
    }
}

export default favReducer;