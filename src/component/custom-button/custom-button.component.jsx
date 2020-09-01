import React from 'react';

import './custom-button.styles.scss';

const CustomButton = props => {
    return (
        <button className='custom-button' onClick={() => props.addNominations()}>Nominate</button>
    )
}

export default CustomButton