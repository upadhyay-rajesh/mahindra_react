import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import RegisterComponent from './components/register';
import LoginComponent from './components/login';
import DisplayAllComponent from './components/displayAll';
import HomeComponent from './components/home';
import ViewComponent from './components/view';
import EditComponent from './components/edit';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/register" exact component={RegisterComponent}></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/displayAll" exact component={DisplayAllComponent}></Route>
            <Route path="/viewEmployee/:id" exact component={ViewComponent}></Route>
            <Route path="/editEmployee/:id" exact component={EditComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
    )
  }
}

export default App;
