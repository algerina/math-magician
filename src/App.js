import React, { Component } from 'react';
import Calculator from './components/Calculator';

// import render from 'dom-serializer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
