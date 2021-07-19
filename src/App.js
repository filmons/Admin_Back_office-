import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EditClass from './pages/class/EditClass';
import Get from './pages/class/Get';
import Nav from './pages/Nav/Nav';
import Calander from './pages/clander/Calander'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
      <Switch>
      <Route exact path='/'component={Home}/>
      <Route exact path='/Calander'component={Calander}/>
      <Route exact path='/Get' component={Get} />
      <Route exact path='/EditClass'component={EditClass}/>
      </Switch>
      </Router>
    </div>
   
  );
}
export default App;
