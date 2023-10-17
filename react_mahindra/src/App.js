import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import RegisterComponent from './components/register';
import LoginComponent from './components/login';
import DisplayAllComponent from './components/displayAll';

class App extends Component {
  state = {
    address: "Bangalore"
  }
  render() {
    return <div className="App">
      Welcome to ReactJS!

      <RegisterComponent />
      <LoginComponent myaddress={this.state.address} />
      <DisplayAllComponent />

    </div>
  }
}

export default App;
