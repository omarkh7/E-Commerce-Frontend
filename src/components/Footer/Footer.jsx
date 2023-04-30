import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo2-b.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__column'>
        <img className='img_footer' src={Logo} alt='description' />
      </div>
      <div className='footer__column'>
        <Link to='/' style={{ textDecoration: "none" }}>
          {" "}
          <h3>Home</h3>
        </Link>
        <ul>
          <Link to='about' style={{ textDecoration: "none" }}>
            <li>About us</li>
          </Link>
          <Link to='contact' style={{ textDecoration: "none" }}>
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
      <div className='footer__column'>
        <h3>Other Links</h3>
        <ul>
          <a href='/terms'>
            <li>Terms and Conditions</li>
          </a>
          <a href='/refund'>
            {" "}
            <li>Refund and Return</li>
          </a>
          <a href='/privacy'>
            {" "}
            <li>Privacy Policy</li>
          </a>
        </ul>
      </div>

      <div className='footer__column footer__contact'>
        <h3>Contact Us</h3>
        <p>Phone: +961 76 503 378</p>
        <p>Email: step88up@gmail.com</p>
        <div>
          <a href='https://instagram.com/stepupleb_?igshid=YmMyMTA2M2Y='>
            Instagram
          </a>
          <a href='https://www.facebook.com/stepuplb'>Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
