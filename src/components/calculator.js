import React from 'react';
import '../calculator.css';

export default function Calculator() {
  return (
    <div className="container">
      <div className="screen">0</div>
      <button type="button" className="number">AC</button>
      <button type="button" className="number">+/-</button>
      <button type="button" className="number">%</button>
      <button type="button" className="operation">÷</button>
      <button type="button" className="number">7</button>
      <button type="button" className="number">8</button>
      <button type="button" className="number">9</button>
      <button type="button" className="operation">X</button>
      <button type="button" className="number">4</button>
      <button type="button" className="number">5</button>
      <button type="button" className="number">6</button>
      <button type="button" className="operation">-</button>
      <button type="button" className="number">1</button>
      <button type="button" className="number">2</button>
      <button type="button" className="number">3</button>
      <button type="button" className="operation">+</button>
      <button type="button" className="large-button">0</button>
      <button type="button" className="number">.</button>
      <button type="button" className="operation">=</button>
    </div> 
  );
}
