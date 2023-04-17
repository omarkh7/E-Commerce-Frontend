import React from 'react'
import '../Login/Login.css'
import { FaRegUserCircle, FaLock } from "react-icons/fa";

const SignIn = ({ onSignupClick }) => {
  return (
    <div>
      <form className='form-subcontainer'>
        <div className='userEmail-title'>
          <FaRegUserCircle className='icone-login' />
          <input type='text' autoComplete='off' placeholder='Email'></input>
        </div>
        <div className='userPassword-title'>
          <FaLock className='icone-login' />
          <input type='password' placeholder='Password'></input>
        </div>
        <div className='login-button-container'>
          <div onClick={()=>onSignupClick()}>Sign Up ?</div>

          <button className='login-btn'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn
