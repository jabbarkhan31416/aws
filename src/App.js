import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Signupdev from './components/signupdev'
import Signupcom from './components/signupcom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/signupdev">
          <Signupdev />
        </Route>
        <Route path="/signupcom">
          <Signupcom />
        </Route>
        </Switch>
      </div>
     
    );
  }
}

export default App;
