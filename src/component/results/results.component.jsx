import React from 'react';

import './results.styles.scss';

import Movie from '../movie/movie.component';

const Results = props => {
    const { movies, searchField } = props;
    return(
    <div className='results-container'>
        <div className='results-content'>
            <h3>{`Results for "${searchField}"`}</h3>
            {
            props.movies.length > 0 && searchField !== ''? 
            movies.map(movie => <Movie key={movie.imdbID} title={movie.Title} year={movie.Year}/>)
            :null      
            }
        </div>
    </div>
)}

export default Results;