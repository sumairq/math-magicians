/* eslint-disable */
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='logo' ><a href="/">
          <span className='lg-primary'>Math</span>
          <span className='lg-secondary'>Magicians</span>
          </a>
        </div>
        <nav>
          <ul className='nav__links'>
            <li><a href="/">Home</a></li>
            <li><a href="/calculator">Calculator</a></li>
            <li><a href="/quote">Quote</a></li>
          </ul>
        </nav>
        </header>
  )
}

export default Header
