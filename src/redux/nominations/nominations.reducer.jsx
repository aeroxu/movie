const INITIAL_STATE = {
    nominations: []
}

const nominationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_NOMINATIONS':
            return {
                ...state,
                nominations: action.payload
            }

        default:
            return state;
    }
}

export default nominationsReducer;