export const initialState = {
    movies: null,
    searchField: '',
    // nominations: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return {
                 ...state,
                 movies: action.payload
            }
        case 'SET_SEARCHFIELD':
            return {
                ...state,
                searchField: action.payload
            }
        // case 'ADD_NOMINATIONS':
        //     return {
        //         ...state,
        //         nominations: action.payload
        //     }
        // case 'REMOVE_NOMINATIONS':
        //     return {
        //         ...state,
        //         nominations: action.payload
        //     }
        default:
            return state;
    }
};

export const setMovie = movie => ({
    type: 'SET_MOVIE',
    payload: movie
});

export const setSearchField = searchField => ({
    type: 'SET_SEARCHFIELD',
    payload: searchField
})

// export const addNominations = props => ({
//     type: 'ADD_NOMINATIONS',
//     payload: [...initialState.nominations, initialState.movies.find(movie => movie.imdbID === props.id)]
//   });

// export const removeNominations = props => ({
//     type: 'REMOVE_NOMINATIONS',
//     payload: initialState.nominations.filter(nomination => nomination.imdbID !== props.id)
// });
