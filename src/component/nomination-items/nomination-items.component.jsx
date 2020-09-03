import React from 'react';

import './nomination-items.styles.scss';

import { useContext } from 'react';
import NominationContext from '../context/nominations/nomination.context';


const NominationItems = props => {
    const { removeNominations } = useContext(NominationContext);
    const { title, year } = props;
    return(
        <div className='nomination-item'>
            <li className='nomination-content'>{`${title} (${year})`}</li>
            <button onClick={() => removeNominations(props)}>Remove</button>
        </div>
    )
}
export default NominationItems;