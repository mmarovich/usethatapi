import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Routes from './components/router/Routes';
import apiData from './components/apis';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apiList: []
    }
  }

  componentWillMount(){
    this.setState({apiList: apiData})
  }

  render() {
    console.log(this.state.apiList)
    return (
      <div className="App">
        <Header />
        <Routes apiData={this.state.apiList} />
      </div>
    );
  }
}

export default App;
