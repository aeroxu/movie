import actionTypes from './state.types';

export const initialState = {
    movies: [],
    searchField: '',
    nominations: JSON.parse(localStorage.getItem('nominations')) || [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE:
            return {
                 ...state,
                 movies: action.payload
            }
        case actionTypes.SET_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            }
        case actionTypes.SET_NOMINATIONS:
            localStorage.setItem('nominations', JSON.stringify(action.payload));
            return {
                ...state,
                nominations: action.payload
            }
        default:
            return state;
    }
};



