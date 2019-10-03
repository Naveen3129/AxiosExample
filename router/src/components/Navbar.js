import React from 'react';
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="brand-logo-left">Cognizant Studio</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to ='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar