import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import moviesReducer from './movies/movies.reducer'; 
import nominationsReducer from './nominations/nominations.reducer';
import searchFieldReducer from './searchField/searchField.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['nominations']
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    searchField: searchFieldReducer,
    nominations: nominationsReducer
})

export default persistReducer(persistConfig, rootReducer);