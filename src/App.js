/* eslint-disable */
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom"
import CalculatorPage from './pages/Calculator/CalculatorPage';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='body'>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/calculator' element={<CalculatorPage/>}/>
         <Route path='/quote' element={<Quote/>}/>
        </Routes>
      
      </div>
    );
  }
}

export default App;
