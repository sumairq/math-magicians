/* eslint-disable */
import React, { Component } from 'react';
import Calculator from "../../components/Calculator"
import Header from '../../components/Header'

class CalculatorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Header/>
      <div className='flex-sp-between padd-50'>
          <h1>
      Lets do some math!
          </h1>
          <Calculator/>
      </div>
      </>
    );
  }
}

export default CalculatorPage;
