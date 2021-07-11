import React from 'react';
import Home from './pages/Home';
import Clander from './pages/clander/Clander';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Clander' component={Clander} />


      </Switch>
      </Router>
      
    </div>
   
  );
}
export default App;
