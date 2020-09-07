import React, { useContext } from 'react';

import './results.styles.scss';

import Movie from '../movie/movie.component';
import ResultsContext from '../context/results/results.context';

const Results = () => {
    const { movies, searchField } = useContext(ResultsContext);
    return(
    <div className='results-container'>
        <div className='results-content'>
            <h3>{`Results for "${searchField}"`}</h3>
            {movies.map(movie => <Movie key={movie.imdbID} id={movie.imdbID} title={movie.Title} year={movie.Year}/>)}
        </div>
    </div>
)}

export default Results;