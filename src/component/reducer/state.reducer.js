const INITIAL_STATE = {
    movies:[],
    searchField:''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                 ...state,
                 movies: action.payload
            }
        case 'SET_SEARCHFIELD':
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
};

const setMovies = movies => ({
    type: 'SET_USER',
    payload: movies
})

const setSearchField = searchField => ({
    type: 'SET_SEARCHFIELD',
    payload: searchField
})