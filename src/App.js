import React, { Component } from 'react';
import './App.css';

import Routes from './components/router/Routes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
