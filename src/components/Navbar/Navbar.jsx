import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";


function Navbar( ) {


  return (
    <div className='navbar'>
      {" "}
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Home </div>
      </Link>{" "}
      <Link to='shop' style={{ textDecoration: "none" }}>
        <div className='navbar-divstyle'>Shop </div>
      </Link>
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
