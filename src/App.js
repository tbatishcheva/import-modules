import React, { Component } from 'react';
import './App.css';
import one, { two } from './some-object';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {one.b}
            {one.a}
            {two.c}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
