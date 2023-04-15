import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaRegEnvelope,
} from "react-icons/fa";


const SocailMediaIcons = () => {
    return (
      <div className="socialicon">
        <a href='https://www.facebook.com/stepuplb' target='_blank'>
          <FaFacebookSquare className="facebook" />
        </a>
        <a>
          <FaInstagramSquare />
        </a>
        <a >
          <FaRegEnvelope />
        </a>
        <a>
          <FaWhatsappSquare />
        </a>
      </div>
    );
};

export default SocailMediaIcons;
