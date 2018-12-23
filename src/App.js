import React, { Component } from 'react';
import './App.css';
import one, { two } from './someObject';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      one,
      two,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.one.a}
            {this.state.one.b}
            {this.state.two.c}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
