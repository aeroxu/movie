import React, { useState, useEffect, useContext } from 'react';

import './App.css';

import SearchBar from './component/search-bar/Search-bar';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';
import NominationContext from './component/context/nominations/nomination.context';

const App = () => {
 
  const [movies, setMovies] = useState(null);
  const [searchField, setSearchField] = useState('');
  const [nominations, setNominations] = useState([]);
  // const nominate = useContext(NominationContext);
  
  const addNominations = props => {
    setNominations([movies.find(movie => movie.imdbID === props.id), ...nominations]);
  };

  const removeNominations = props => {
    setNominations([movies.find(movie => movie.imdbID === props.id), ...nominations]);
  };
    

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
      const data = await response.json()
      if(data.hasOwnProperty('Search')){
        setMovies(data.Search)
      }
    }
    fetchData();
}, [searchField])

    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchBar handleChange={e => {
          setSearchField(e.target.value);
        }}/>
        <NominationContext.Provider value={{nominations, addNominations}}>
          <Results movies={movies} searchField={searchField} />
        </NominationContext.Provider>
        <Nominations nominations={nominations}/>
      </div>
    );
  } 

export default App;
