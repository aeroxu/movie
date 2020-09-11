import React, { useReducer } from 'react';

import './App.scss';

import Search from './component/search/Search.component';
import Results from './component/results/results.component';
import Nominations from './component/nominations/Nominations.component';
import Context from './component/context/context';

import { initialState, reducer } from './component/reducer/state.reducer';
import { setSearchField } from './component/reducer/state.action';

const App = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
      <div className="App">
          <h1 className='title'>The Shoppies</h1>
          <Search handleChange={e => {
            dispatch(setSearchField (e.target.value));
          }} />
          <Context.Provider value={{state, dispatch}}>
            <div className='container'>
                <Results />
                <Nominations />
            </div>
            </Context.Provider>
        </div>   
    );
  } 

export default App;
