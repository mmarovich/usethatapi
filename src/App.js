import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import ApiList from './components/content/ApiList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ApiList />
      </div>
    );
  }
}

export default App;
