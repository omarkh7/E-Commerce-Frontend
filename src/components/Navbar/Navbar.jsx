import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";


function Navbar( ) {


  return (
    <div className='navbar'>
      {" "}
      <Link to='Home' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Home </div>
      </Link>{" "}
     
      <div className='nav-dropdown'>

        <div className='navbar-divstyle'>Shop </div>
        
        <div className='dropdown-menu'>
        <div className='dropdown-button navbar-divstyle'> 
          <Link to='hightop'> Hightop sneakers </Link>
          
          <Link to='/lowtop'>Lowtop sneakers </Link>
          <Link to='/athletic'>Athletic shoes</Link>
          <Link to='/retro'>Retro Shoes </Link>
          <Link to='/slides'>Slides</Link>
          <Link to='/socks'>Socks</Link>

          </div>
        </div>
        </div>
     
      <Link to='about' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>About US </div>
      </Link>
      <Link to='contact' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Contact Us </div>
      </Link>
      <div className='nav-dropdown'>
        <div className='dropdown-button navbar-divstyle'> Conditions</div>

        <div className='dropdown-menu'>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/refund'>Refund and Return</a>
          <a href='/privacy'>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
