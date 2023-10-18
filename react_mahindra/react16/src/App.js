import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import RegisterComponent from './components/register';
import LoginComponent from './components/login';
import DisplayAllComponent from './components/displayAll';
import HomeComponent from './components/home';
import ViewComponent from './components/view';
import EditComponent from './components/edit';

import {BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import StateHooks from './hooks/statehook';
import HistoryHook from './hooks/historyhook';
import UncontrolledComponent from './components/uncontrolled_component';
import ContextHookComponent from './hooks/contextHook';
import ErrorBoundaryComponent from './error/errorBoundary';
import UseErrorBoundaryComponent from './error/useErrorBoundary';

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
            <Route path="/viewEmployee/:id/:uname" exact component={ViewComponent}></Route>
            <Route path="/editEmployee/:id" exact component={EditComponent}></Route>
            <Route path='*' component={<Redirect  to='/login' />} />
          </Switch>
        </div>

<ErrorBoundaryComponent>
  <UseErrorBoundaryComponent />
</ErrorBoundaryComponent>

      </Router>

      <StateHooks />
      <HistoryHook />

      <UncontrolledComponent />

      <ContextHookComponent />
    </div>
    )
  }
}

export default App;
