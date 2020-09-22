import React from 'react';

import './App.scss';

import Search from './component/search/Search.component';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';

const App = () => {
    return (
      <div className="App">
          <h1 className='title'>The Shoppies</h1>
          <Search />
            <div className='container'>
                <Results />
                <Nominations />
            </div>
        </div>   
    );
  } 

export default App;
