/* eslint-disable */
import React, { Component } from 'react'
import './Calculator.css'

export class Calculator extends Component {
  render() {
    return (
        <div class="container">
        <div class="result">0</div>
        <div class="buttons">
            <span class="button resetBtn">AC</span>
            <span class="button negative operator">+/-</span>
            <span class="button operator percent">%</span>
            <span class="button operator">/</span>
            <span class="button number">7</span>
            <span class="button number">8</span>
            <span class="button number">9</span>
            <span class="button operator">*</span>
            <span class="button number">4</span>
            <span class="button number">5</span>
            <span class="button number">6</span>
            <span class="button operator">-</span>
            <span class="button number">1</span>
            <span class="button number">2</span>
            <span class="button number">3</span>
            <span class="button operator">+</span>
            <span class="button number zero-btn">0</span>
            <span class="button number dot">.</span>
            <span class="button  operator">=</span>
        </div>
    </div>
    )
  }
}

export default Calculator
