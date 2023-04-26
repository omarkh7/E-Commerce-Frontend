import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo2-b.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <img className="img_footer" src={Logo} alt="description" />
       
      </div>
      <div className="footer__column">
        <h3>Title 1</h3>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Title 2</h3>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </div>
 
      <div className="footer__column footer__contact">
        <h3>Contact Us</h3>
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@example.com</p>
        <div>
          <a href="your-instagram-url">Instagram</a>
          <a href="your-facebook-url">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
