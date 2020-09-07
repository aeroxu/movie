import React from 'react';

import './Search-bar.styles.scss';

import { ReactComponent as Search } from './../icon/search-icon.svg'

const SearchBar = props => {
    return (
        <div className='search'>
            <div className='search-container'>
                <div className='search-box-title'>Movie title</div>
                <div className='search-box-container'>
                    <Search className="search-icon"/>
                    <input 
                        type='search' 
                        placeholder='Please type the movie title' 
                        className='search-box' 
                        onChange={props.handleChange}
                    />
                </div>
            </div>
        </div>  
    )
}

export default SearchBar;