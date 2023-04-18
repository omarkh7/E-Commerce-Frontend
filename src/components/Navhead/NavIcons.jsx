import React from 'react'
import '../Navhead/NavIcons.css'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function NavIcons() {
  return (
    <div className='icon-header-div'>
      <div className='icon-header'>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <FaRegUser id='icon-header' />
        </Link>{" "}
      </div>
      <div className='icon-header'>
        <FaRegHeart id='icon-header' />
      </div>
      <div className='icon-header'>
        <BsBag id='icon-header' />
      </div>
    </div>
  );
}

export default NavIcons