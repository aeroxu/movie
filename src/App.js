import React, { useState, useEffect } from 'react';

import './App.scss';

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
        setMovies(data.Search)
      }
    }
    fetchData();
}, [searchField])

    return (
      <div className="App">
        <h1 className='title'>The Shoppies</h1>
        <SearchBar handleChange={e => {
          setSearchField(e.target.value);
        }}/>
        <NominationContext.Provider value={{nominations, addNominations, removeNominations}}>
          <div className='container'>
            <Results movies={movies} searchField={searchField} />
            <Nominations nominations={nominations}/>
          </div>
        </NominationContext.Provider>
      </div>
    );
  } 

export default App;
