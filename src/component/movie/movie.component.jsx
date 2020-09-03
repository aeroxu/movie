import React from 'react';

import './movie.styles.scss';

import { useContext } from 'react';
import NominationContext from '../context/nominations/nomination.context';


const Movie = props => {
    const { addNominations, nominations } = useContext(NominationContext);
    return(
        <div className='movie-item'>
            <li className='movie-content'>{`${props.title} (${props.year})`}</li>
            <button disabled={nominations.find(x => x.imdbID === props.id)!==undefined} onClick={() => addNominations(props)}>Nominate</button>
        </div>
    )
}
export default Movie;