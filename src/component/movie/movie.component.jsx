import React from 'react';

import './movie.styles.scss';

import { useContext, useCallback } from 'react';
import Context from '../context/context';
import { setNominations } from '../reducer/state.action';


const Movie = props => {
    const { imdbID, Title, Year } = props.movie;
    const { state, dispatch } = useContext(Context);
    const { nominations } = state;
  
    const addNominations = useCallback(props => {
        dispatch(setNominations([...nominations, props]));
      },[dispatch, nominations]);

    return(
        <div className='movie-item'>
            <li className='movie-content'>{`${Title} (${Year})`}</li>
            <button disabled={nominations.find(item => item.imdbID === imdbID)!==undefined} onClick={() => addNominations(props.movie)}>Nominate</button>
        </div>
    )
}
export default Movie;