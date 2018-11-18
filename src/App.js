import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Main, Comparer } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-Header" />
        <Route exact path="/" component={Main} />
        <Route exact path="/comparer" component={Comparer} />
      </div>
    );
  }
}

export default App;
