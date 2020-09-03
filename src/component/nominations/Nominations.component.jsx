import React from 'react';

import './Nominations.component.scss';

import NominationItems from '../nomination-items/nomination-items.component';

const Nominations = props => {
    return (
        <div className='nominations-container'>
            <div className='nominations-content'>
                <h3>Nominations</h3>
                {props.nominations.length > 0? props.nominations.map(nomination => 
                <NominationItems
                    key={nomination.imdbID} 
                    id={nomination.imdbID} 
                    title={nomination.Title} 
                    year={nomination.Year}/>
                ): null}
            </div>
        </div>
    )
}

export default Nominations;