import React from 'react';

import './nomination-items.styles.scss';

import { useContext } from 'react';
import Context from '../context/context';
import { setNominations } from '../reducer/state.action';


const NominationItems = ({ title, year, id }) => {
    const { dispatch, state } = useContext(Context);
    const { nominations } = state; 

    const removeNominations = id => {
        dispatch(setNominations(nominations.filter(nomination => nomination.imdbID !== id)));
      };

    return(
        <div className='nomination-item'>
            <li className='nomination-content'>{`${title} (${year})`}</li>
            <button onClick={() => removeNominations(id)}>Remove</button>
        </div>
    )
}
export default NominationItems;