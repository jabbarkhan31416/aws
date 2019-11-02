import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        </Switch>
      </div>
     
    );
  }
}

export default App;
