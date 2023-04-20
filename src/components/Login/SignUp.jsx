import React, { useRef, useState } from 'react';
import '../Login/SignUp.css';
import {
  FaRegUserCircle,
  FaLock,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import axios from 'axios';
// import {  useNavigate } from 'react-router-dom';


const SignUp = ({ onBackToLoginClick }) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [errMsg, setErrMsg] = useState('');

   const errRef = useRef();
  const emailRef = useRef();

  //  const navigate = useNavigate();

  const fetchRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/register", { fullName, email, password, location, phoneNumber });
     setErrMsg(response.data.message);
    } catch (error) {
      setErrMsg(error.response.data.message)
      console.log(error.response.data.message);
      //  navigate("/login");
    
    }
  }

  console.log({ 'fullname':fullName,'email':email,'password':password,'location':location,'phonNumber':phoneNumber});
  const handleSubmit = (e) => {
   e.preventDefault();
    fetchRegister();
    onBackToLoginClick();
    
  }

  return (
    <div>
    
      <form className='form-subcontainer-signup' onSubmit={handleSubmit}>
         <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live='assertive'
        >
          {errMsg}
        </p>
          <div className='Email-signup'>
            <FaRegUserCircle className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>
          <div className='Email-signup'>
            <FaRegEnvelope className='icone-login' />
            <input
              type='text'
              autoComplete='off'
            placeholder='Email'
            ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className='Password-signup'>
            <FaLock className='icone-login' />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className='Email-signup'>
            <FaMapMarkerAlt className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Location'
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </div>
          <div className='Email-signup'>
            <FaPhone className='icone-login' />
            <input
              type='text'
              autoComplete='off'
              placeholder='Phone Number'
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>

          <div className='signup-button-container'>
            <div onClick={() => onBackToLoginClick()}>Login here!</div>

            <button className='signup-btn'>Submit</button>
          </div>
        </form>
   
    </div>
  );
};

export default SignUp
