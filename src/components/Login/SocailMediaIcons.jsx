import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaRegEnvelope,
} from "react-icons/fa";


const SocailMediaIcons = () => {
    return (
      <div className='socialicon'>
        <a href='https://www.facebook.com/stepuplb' target='_blank'>
          <FaFacebookSquare className='facebook' />
        </a>
        <a
          href='https://instagram.com/stepupleb_?igshid=YmMyMTA2M2Y='
          target='_blank'
        >
          <FaInstagramSquare className='facebook' />
        </a>
        <a href='mailto:step88up@gmail.com'>
          <FaRegEnvelope className='facebook' />
        </a>
        <a>
          <FaWhatsappSquare />
        </a>
      </div>
    );
};

export default SocailMediaIcons;
