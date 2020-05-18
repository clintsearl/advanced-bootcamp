import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About'


function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/about">
         <About/>
       </Route>
       <Route exact path="/">
       <Landing/>
       </Route>

     </Switch>
    </div>
  );
}

export default App;
