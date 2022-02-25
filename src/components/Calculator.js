import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const stateObject = {
    total: 0,
    next: null,
    operation: null,
  };

  const [property, setProperty] = useState(stateObject);

  const handleClick = (btn) => {
    const funcBtn = btn.target.textContent;
    const newProperty = { ...property };
    setProperty(calculate(newProperty, funcBtn));
  };

  return (
    <div className="container">
      <div className="result">
        {property.total}
        {property.operation}
        {property.next}
      </div>
      <div className="buttons">
        <button type="button" onClick={handleClick} className="button resetBtn">AC</button>
        <button type="button" onClick={handleClick} className="button negative operator">+/-</button>
        <button type="button" onClick={handleClick} className="button operator percent">%</button>
        <button type="button" onClick={handleClick} className="button operator">/</button>
        <button type="button" onClick={handleClick} className="button number">7</button>
        <button type="button" onClick={handleClick} className="button number">8</button>
        <button type="button" onClick={handleClick} className="button number">9</button>
        <button type="button" onClick={handleClick} className="button operator">*</button>
        <button type="button" onClick={handleClick} className="button number">4</button>
        <button type="button" onClick={handleClick} className="button number">5</button>
        <button type="button" onClick={handleClick} className="button number">6</button>
        <button type="button" onClick={handleClick} className="button operator">-</button>
        <button type="button" onClick={handleClick} className="button number">1</button>
        <button type="button" onClick={handleClick} className="button number">2</button>
        <button type="button" onClick={handleClick} className="button number">3</button>
        <button type="button" onClick={handleClick} className="button operator">+</button>
        <button type="button" onClick={handleClick} className="button number zero-btn">0</button>
        <button type="button" onClick={handleClick} className="button number dot">.</button>
        <button type="button" onClick={handleClick} className="button  operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
