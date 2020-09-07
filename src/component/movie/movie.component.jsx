import React from 'react';

import './movie.styles.scss';

import { useContext } from 'react';
import ResultsContext from '../context/results/results.context';


const Movie = props => {
    const { nominations, addNominations } = useContext(ResultsContext);
    return(
        <div className='movie-item'>
            <li className='movie-content'>{`${props.title} (${props.year})`}</li>
            <button disabled={nominations.find(x => x.imdbID === props.id)!==undefined} onClick={() => addNominations(props)}>Nominate</button>
        </div>
    )
}
export default Movie;