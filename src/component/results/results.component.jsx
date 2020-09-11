import React, { useEffect, useContext } from 'react';

import './results.styles.scss';

import Movie from '../movie/movie.component';
import Context from '../context/context';
import { setMovie } from '../reducer/state.action';

const Results = () => {
    const { state, dispatch } = useContext(Context);
    const { movies, searchField } = state;

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=ffa0edf2`)
          const data = await response.json()
          if(data.hasOwnProperty('Search')){
            dispatch(setMovie(data.Search));
          }else(
            dispatch(setMovie([]))
          )
        }
        fetchData(); 
    },[dispatch, searchField])
  

    return(
    <div className='results-container'>
        <div className='results-content'>
            <h3>{`Results for "${searchField}"`}</h3>
            {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
        </div>
    </div>
)}

export default Results;