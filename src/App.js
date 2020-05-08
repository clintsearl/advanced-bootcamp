import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Switch>
       <Route path="/">
       <Landing/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
