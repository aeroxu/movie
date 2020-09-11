import React from 'react';

import './Search.styles.scss';

import { ReactComponent as SearchIcon } from './../icon/search-icon.svg'


const Search = props => {
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
                        onChange={props.handleChange}
                    />
                </div>
            </div>
        </div>  
    )
}

export default React.memo(Search);