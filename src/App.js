import React, { useEffect, useReducer } from 'react';

import './App.scss';

import SearchBar from './component/search-bar/Search-bar.component';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';
import NominationContext from './component/context/nominations/nomination.context';
import ResultsContext from './component/context/results/results.context';

import { initialState, reducer } from './component/reducer/state.reducer';
import { setMovie, setSearchField, setNominations } from './component/reducer/state.action';


const App = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const { movies, searchField, nominations } = state;
  
  const addNominations = props => {
    dispatch(setNominations([...nominations, movies.find(movie => movie.imdbID === props.id)]));
  };

  const removeNominations = props => {
    dispatch(setNominations(nominations.filter(nomination => nomination.imdbID !== props.id)));
  };

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
        const data = await response.json()
        if(data.hasOwnProperty('Search')){
          dispatch(setMovie(data.Search));
        }else(
          dispatch(setMovie([]))
        )
      }
      fetchData();
      
  }, [searchField])

    return (
      <div className="App">
          <h1 className='title'>The Shoppies</h1>
          <SearchBar handleChange={e => {
            dispatch(setSearchField(e.target.value));
          }}/>
          
            <div className='container'>
              <ResultsContext.Provider value={{movies, searchField, nominations, addNominations}}>
                <Results />
              </ResultsContext.Provider>
              <NominationContext.Provider value={{nominations, removeNominations}}>
                <Nominations />
              </NominationContext.Provider>
            </div>
        </div>   
    );
  } 

export default App;
