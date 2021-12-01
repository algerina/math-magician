import React from 'react';
import '../calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: null,
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(event) {
    this.setState((state) => calculate(state, event.target.name));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="screen">{ next || operation || total || 0 }</div>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="Ac">AC</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="+/-">+/-</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="%">%</button>
        <button type="button" className="operation" onClick={(event) => this.clickHandle(event)} name="÷">÷</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="7">7</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="8">8</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="9">9</button>
        <button type="button" className="operation" onClick={(event) => this.clickHandle(event)} name="X">X</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="4">4</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="5">5</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="6">6</button>
        <button type="button" className="operation" onClick={(event) => this.clickHandle(event)} name="-">-</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="1">1</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="2">2</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name="3">3</button>
        <button type="button" className="operation" onClick={(event) => this.clickHandle(event)} name="+">+</button>
        <button type="button" className="large-button" onClick={(event) => this.clickHandle(event)} name="0">0</button>
        <button type="button" className="number" onClick={(event) => this.clickHandle(event)} name=".">.</button>
        <button type="button" className="operation" onClick={(event) => this.clickHandle(event)} name="=">=</button>
      </div>
    );
  }
}

export default Calculator;
