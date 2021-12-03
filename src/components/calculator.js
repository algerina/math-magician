import React, { useState } from 'react';
import Button from './ButtonPanel';
import Display from './Display';
import '../calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  const { total, operation, next } = state;
  return (
    <div className="container">
      <Display total={total} next={next} operation={operation} />
      <Button value="AC" handler={clickHandle} styleClass="number" />
      <Button value="+/-" handler={clickHandle} styleClass="number" />
      <Button value="%" handler={clickHandle} styleClass="number" />
      <Button value="÷" handler={clickHandle} styleClass="operation" />
      <Button value="7" handler={clickHandle} styleClass="number" />
      <Button value="8" handler={clickHandle} styleClass="number" />
      <Button value="9" handler={clickHandle} styleClass="number" />
      <Button value="x" handler={clickHandle} styleClass="operation" />
      <Button value="4" handler={clickHandle} styleClass="number" />
      <Button value="5" handler={clickHandle} styleClass="number" />
      <Button value="6" handler={clickHandle} styleClass="number" />
      <Button value="-" handler={clickHandle} styleClass="operation" />
      <Button value="1" handler={clickHandle} styleClass="number" />
      <Button value="2" handler={clickHandle} styleClass="number" />
      <Button value="3" handler={clickHandle} styleClass="number" />
      <Button value="+" handler={clickHandle} styleClass="operation" />
      <Button value="0" handler={clickHandle} styleClass="large-button" />
      <Button value="." handler={clickHandle} styleClass="number" />
      <Button value="=" handler={clickHandle} styleClass="operation" />

    </div>
  );
};

export default Calculator;
