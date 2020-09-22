import React, { Component } from 'react';

import './results.styles.scss';

import Movie from '../movie/movie.component';

import { connect } from 'react-redux';
import { setMovies } from '../../redux/movies/movies.action';

class Results extends Component {
    
    componentDidMount(){
        const { searchField, setMovies } = this.props;
        const fetchData = async () => {
          const response = await fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
          const data = await response.json()
          if(data.hasOwnProperty('Search')){
            setMovies(data.Search);
          }else(
            setMovies([])
          )
        }
        fetchData(); 
    }


    componentDidUpdate(prevProps){
        const { searchField, setMovies } = this.props;
        const fetchData = async () => {
          const response = await fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
          const data = await response.json()
          if(data.hasOwnProperty('Search')){
            setMovies(data.Search);
          }else(
            setMovies([])
          )
        }
        if(searchField !== prevProps.searchField){
          fetchData();
        }    
    }
  
    render(){
      const { movies, searchField, nominations } = this.props;
      return(
        <div className='results-container'>
            <div className='results-content'>
                <h3>{`Results for "${searchField}"`}</h3>
                {movies.map(movie => <Movie key={movie.imdbID} movie={movie} nominations={nominations}/>)}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  searchField: state.searchField.searchField,
  nominations: state.nominations.nominations
})

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);