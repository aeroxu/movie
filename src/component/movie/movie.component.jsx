import React from 'react';

import './movie.styles.scss';

import { connect } from 'react-redux';
import { setNominations } from '../../redux/nominations/nominations.actions';


const Movie = props => {
    const { imdbID, Title, Year } = props.movie;
 
    const { nominations, setNominations } = props;
  
    const addNominations = nomination => setNominations([...nominations, nomination]);

    return(
        <div className='movie-item'>
            <li className='movie-content'>{`${Title} (${Year})`}</li>
            <button disabled={nominations !== undefined? nominations.find(item => item.imdbID === imdbID)!==undefined: false} onClick={() => addNominations(props.movie)}>Nominate</button>
        </div>
    )
}

const mapStateToProps = state => ({
    nominations: state.nominations.nominations,
  })

const mapDispatchToProps = dispatch => ({
    setNominations: nominations => dispatch(setNominations(nominations))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);