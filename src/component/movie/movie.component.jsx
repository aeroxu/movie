import React from 'react';

import './movie.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const Movie = props => (
    <div className='movie-item'>
        <li className='movie-content'>{`${props.title} (${props.year})`}</li>
        <CustomButton addNominations={() => props.addNominations()}/>
    </div>
)

export default Movie;