import React from "react";
import "../Navbar/Navbar.css";


function Navbar( ) {


  return (
    <div className='navbar'>
     

      <div>Home</div>
      <div>Shop</div>
      <div>About Us</div>
      <div>Contact Us</div>
      <div className='nav-dropdown'>
        <div className='dropdown-button'> Conditions</div>

        <div className='dropdown-menu'>
          <a href='#'>Terms and Conditions</a>
          <a href='#'>Refund and Return</a>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
