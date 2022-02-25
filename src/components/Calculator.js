import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const txt = btn.target.textContent;
    this.setState((e) => calculate(e, txt));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" onClick={this.handleClick} className="button resetBtn">AC</button>
          <button type="button" onClick={this.handleClick} className="button negative operator">+/-</button>
          <button type="button" onClick={this.handleClick} className="button operator percent">%</button>
          <button type="button" onClick={this.handleClick} className="button operator">/</button>
          <button type="button" onClick={this.handleClick} className="button number">7</button>
          <button type="button" onClick={this.handleClick} className="button number">8</button>
          <button type="button" onClick={this.handleClick} className="button number">9</button>
          <button type="button" onClick={this.handleClick} className="button operator">*</button>
          <button type="button" onClick={this.handleClick} className="button number">4</button>
          <button type="button" onClick={this.handleClick} className="button number">5</button>
          <button type="button" onClick={this.handleClick} className="button number">6</button>
          <button type="button" onClick={this.handleClick} className="button operator">-</button>
          <button type="button" onClick={this.handleClick} className="button number">1</button>
          <button type="button" onClick={this.handleClick} className="button number">2</button>
          <button type="button" onClick={this.handleClick} className="button number">3</button>
          <button type="button" onClick={this.handleClick} className="button operator">+</button>
          <button type="button" onClick={this.handleClick} className="button number zero-btn">0</button>
          <button type="button" onClick={this.handleClick} className="button number dot">.</button>
          <button type="button" onClick={this.handleClick} className="button  operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
