import React from 'react';
import './Search-bar.styles.scss'

const SearchBar = props => {
    return (
        <div className='searchBarContainer'>
            <div className='searchBarTitle'>Movie title</div>
            <input 
                type='search' 
                placeholder='Please type the movie title' 
                className='searchBar' 
                onChange={props.handleChange}
            />
            
        </div>  
    )
}

export default SearchBar;