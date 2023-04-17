import React from 'react';
import '../Login/SignUp.css';
import {
  FaRegUserCircle,
  FaLock,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";


const SignUp = ({ onBackToLoginClick }) => {
  return (
    <div>
      <form>
        <form className='form-subcontainer-signup'>
          <div className='Email-signup'>
            <FaRegEnvelope className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Full Name'
            ></input>
          </div>
          <div className='Email-signup'>
            <FaRegUserCircle className='icone-login' />
            <input type='text' autoComplete='off' placeholder='Email'></input>
          </div>
          <div className='Password-signup'>
            <FaLock className='icone-login' />
            <input type='password' placeholder='Password'></input>
          </div>

          <div className='Email-signup'>
            <FaMapMarkerAlt className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Location'
            ></input>
          </div>
          <div className='Email-signup'>
            <FaPhone className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Phone Number'
            ></input>
          </div>

          <div className='signup-button-container'>
            <div onClick={() => onBackToLoginClick()}>Back to login !</div>

            <button className='signup-btn'>Submit</button>
          </div>
        </form>
      </form>
    </div>
  );
};

export default SignUp
