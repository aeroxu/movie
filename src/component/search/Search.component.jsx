import React from 'react';

import './Search.styles.scss';

import { ReactComponent as SearchIcon } from './../icon/search-icon.svg'
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/searchField/searchField.actions';


const Search = ({setSearchField}) => {
    
    return (
        <div className='search'>
            <div className='search-container'>
                <div className='search-box-title'>Movie title</div>
                <div className='search-box-container'>
                    <SearchIcon className="search-icon"/>
                    <input 
                        type='search' 
                        placeholder='Please type the movie title' 
                        className='search-box' 
                        onChange={e => setSearchField(e.target.value)}
                    />
                </div>
            </div>
        </div>  
    )
}

const mapDispatchToProps = dispatch => ({
    setSearchField: searchField => dispatch(setSearchField(searchField))
})

export default connect(null, mapDispatchToProps)(Search);