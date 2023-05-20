import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.jpg'

function Header() {
  return (
    <nav className="row">      
      <Link to="/" className="col logo">
        <img src={logo} alt="" />
      </Link>  
      <div className="col navbar">
        <NavLink to="/" className='font' activeClassName='active-link' exact>Home</NavLink>
        <NavLink to="/destinations" className='font' activeClassName='active-link' exact>Destinations</NavLink>
        <NavLink to="/hotels" className='font' activeClassName='active-link' exact>Hotels</NavLink>
        <NavLink to="/about" className='font' activeClassName='active-link' exact>About</NavLink>  
      </div>
      <div className="AuthBut col row">
             <div className='signin '>Sign In</div>
             <div className='signup '>Register</div>
      </div>        
    </nav>


  )
}

export default Header