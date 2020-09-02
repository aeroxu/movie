import React from 'react';

import NominationItems from '../nomination-items/nomination-items.component';

const Nominations = props => {
    return (
        <div>
            <div>Nominations</div>
            {props.nominations.length > 0? props.nominations.map(nominations => <NominationItems nominations={nominations}/>): null}
        </div>
    )
}

export default Nominations;