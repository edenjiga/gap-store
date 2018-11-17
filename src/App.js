import React, { Component } from 'react';
import { Header } from './components';
import { Main } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-Header" />
        <Main />
      </div>
    );
  }
}

export default App;
