import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import About from './components/pages/About'
import TodoApp from './components/todo/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={TodoApp} />
            <Route path="/about" component={About} />
          </div>
        </div >
      </Router>
    )
  }
}


export default App;
