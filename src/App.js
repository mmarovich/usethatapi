import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Routes from './components/router/Routes';

import store from './store/store';
import * as actions from './actions';

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
