import React, { Component } from 'react';
import Button from './ButtonPanel';
import Display from './Display';
import '../calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
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
        <Display total={total} next={next} operation={operation} />
        <Button value="AC" handler={this.clickHandle} styleClass="number" />
        <Button value="+/-" handler={this.clickHandle} styleClass="number" />
        <Button value="%" handler={this.clickHandle} styleClass="number" />
        <Button value="÷" handler={this.clickHandle} styleClass="operation" />
        <Button value="7" handler={this.clickHandle} styleClass="number" />
        <Button value="8" handler={this.clickHandle} styleClass="number" />
        <Button value="9" handler={this.clickHandle} styleClass="number" />
        <Button value="x" handler={this.clickHandle} styleClass="operation" />
        <Button value="4" handler={this.clickHandle} styleClass="number" />
        <Button value="5" handler={this.clickHandle} styleClass="number" />
        <Button value="6" handler={this.clickHandle} styleClass="number" />
        <Button value="-" handler={this.clickHandle} styleClass="operation" />
        <Button value="1" handler={this.clickHandle} styleClass="number" />
        <Button value="2" handler={this.clickHandle} styleClass="number" />
        <Button value="3" handler={this.clickHandle} styleClass="number" />
        <Button value="+" handler={this.clickHandle} styleClass="operation" />
        <Button value="0" handler={this.clickHandle} styleClass="large-button" />
        <Button value="." handler={this.clickHandle} styleClass="number" />
        <Button value="=" handler={this.clickHandle} styleClass="operation" />

      </div>
    );
  }
}

export default Calculator;
