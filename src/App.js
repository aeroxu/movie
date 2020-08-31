import React, { Component } from 'react';

import './App.css';

import SearchBar from './component/searchbar/Search-bar';
import Results from './component/results/results.component';

class App extends Component {
  state = {
    movies: [],
    searchField: '',
    url: ''
  }

  componentDidMount(){
    fetch(this.state.url)
      .then(response => response.json())
      .then(data => data.hasOwnProperty('Search')? this.setState({ movies: data.Search }): null)
  }

  componentDidUpdate(){
    fetch(this.state.url)
      .then(response => response.json())
      .then(data => data.hasOwnProperty('Search')? this.setState({ movies: data.Search }): null)
  }

  render(){
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchBar handleChange={e => this.setState({ 
          searchField: e.target.value, 
          url: `http://www.omdbapi.com/?s=${e.target.value}&apikey=ffa0edf2` 
          })}/>
        <Results movies={this.state.movies} searchField={this.state.searchField}/>
      </div>
    );
  } 
}

export default App;
