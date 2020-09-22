import React from 'react';

import './nomination-items.styles.scss';

import { connect } from 'react-redux';
import { setNominations } from '../../redux/nominations/nominations.actions';


const NominationItems = ({ title, year, id, nominations, setNominations }) => {

    const removeNominations = id => {
        setNominations(nominations.filter(nomination => nomination.imdbID !== id));
      };

    return(
        <div className='nomination-item'>
            <li className='nomination-content'>{`${title} (${year})`}</li>
            <button onClick={() => removeNominations(id)}>Remove</button>
        </div>
    )
}

const mapStateToProps = state => ({
    nominations:state.nominations.nominations
})

const mapDispatchToProps = dispatch => ({
    setNominations: nominations => dispatch(setNominations(nominations))
})

export default connect(mapStateToProps, mapDispatchToProps)(NominationItems);