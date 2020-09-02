import React from 'react';

// import './movie.styles.scss';

import { useContext } from 'react';
import NominationContext from '../context/nominations/nomination.context';


const NominationItems = props => {
    // const { addNominations, nominations } = useContext(NominationContext);
    return(
        <div className='movie-item'>
            <li className='movie-content'>{`${props.nominations.Title} (${props.nominations.Year})`}</li>
            <button>Remove</button>
        </div>
    )
}
export default NominationItems;