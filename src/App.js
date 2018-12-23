import React, { Component } from 'react';
import './App.css';
import one, { two } from './someObject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {one.a}
            {one.b}
            {two.c}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
