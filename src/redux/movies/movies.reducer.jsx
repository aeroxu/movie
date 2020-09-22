const INITIAL_STATE = {
    movies: []
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state;
    }
}

export default moviesReducer;