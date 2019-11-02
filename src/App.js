import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
       
        </Switch>
      </div>
     
    );
  }
}

export default App;
