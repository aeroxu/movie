import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Moviepage from "./Moviepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props=> <Homepage {...props}/>}></Route>
        <Route exact path="/:movieId" render={props=> <Moviepage {...props}/>}></Route>
      </Switch>
    </div>
  );
}

export default App;
