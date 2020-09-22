import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer'; 
import nominationsReducer from './nominations/nominations.reducer';
import searchFieldReducer from './searchField/searchField.reducer';

export default combineReducers({
    movies: moviesReducer,
    searchField: searchFieldReducer,
    nominations: nominationsReducer
})