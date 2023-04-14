import React from 'react'
import '../Navhead/NavIcons.css'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsBag } from 'react-icons/bs'

function NavIcons() {
  return (
    <div className='icon-header-div'>
      <div className='icon-header'>
        <FaRegUser id='icon-header' />
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
