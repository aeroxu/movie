import React from 'react';

const Nominations = props => {
    return (
        <div>
            <div>Nominations</div>
            {`${props.title} (${props.year})`}
        </div>
    )
}

export default Nominations;