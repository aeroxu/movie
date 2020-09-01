import React, { useState, useEffect } from 'react';

import './App.css';

import SearchBar from './component/searchbar/Search-bar';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';

const App = () => {
 
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [nominations, setNominations] = useState([]);

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

  // addNominations = () => {
  //   this.setState({nominations: this.state.movies})
  // }

    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchBar handleChange={e => {
          setSearchField(e.target.value);
        }}/>
        <Results movies={movies} searchField={searchField} />
        <Nominations movies={movies}/>
      </div>
    );
  } 

export default App;
