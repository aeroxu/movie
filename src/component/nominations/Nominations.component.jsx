import React, { useEffect, useContext } from 'react';

import './Nominations.component.scss';

import NominationItems from '../nomination-items/nomination-items.component';
import NominationContext from '../context/nominations/nomination.context';

const Nominations = () => {
    const { nominations } = useContext(NominationContext);
    useEffect(() => {
        if(nominations.length === 5){
          alert("Congratulations! You have 5 nominations!")
        }
      }, [nominations])

    return (
        <div className='nominations-container'>
            <div className='nominations-content'>
                <h3>Nominations</h3>
                {nominations.map(nomination => 
                <NominationItems
                    key={nomination.imdbID} 
                    id={nomination.imdbID} 
                    title={nomination.Title} 
                    year={nomination.Year}/>
                )}
            </div>
        </div>
    )
}

export default Nominations;