import React, { useState, useEffect, useReducer } from 'react';

import './App.scss';

import SearchBar from './component/search-bar/Search-bar';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';
import NominationContext from './component/context/nominations/nomination.context';

import { initialState, reducer, setMovie, setSearchField } from './component/reducer/state.reducer';

const App = () => {
 
  // const [movies, setMovies] = useState(null);
  // const [searchField, setSearchField] = useState('');
  const [nominations, setNominations] = useState([]);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const { movies, searchField } = state;
  
  const addNominations = props => {
    setNominations([...nominations, movies.find(movie => movie.imdbID === props.id)]);
  };

  const removeNominations = props => {
    setNominations(nominations.filter(nomination => nomination.imdbID !== props.id));
  };
    

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
      const data = await response.json()
      if(data.hasOwnProperty('Search')){
        dispatch(setMovie(data.Search));
      }
    }
    fetchData();
    if(nominations.length === 5){
      alert("Congratulations! You have 5 nominations!")
    }
}, [searchField, nominations])

    return (
      <div className="App">
        <h1 className='title'>The Shoppies</h1>
        <SearchBar handleChange={e => {
          dispatch(setSearchField(e.target.value));
        }}/>
        <NominationContext.Provider value={{addNominations, removeNominations, nominations}}>
          <div className='container'>
            <Results movies={movies} searchField={searchField} />
            <Nominations nominations={nominations}/>
          </div>
        </NominationContext.Provider>
      </div>
    );
  } 

export default App;
