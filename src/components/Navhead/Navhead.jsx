import React, { useState } from 'react';
import Logo from '../../assets/images/logo2-removebg-preview.png'
import '../Navhead/Navhead.css';
import Navbar from'../Navbar/Navbar';
import SearchBar from '../Navhead/SearchBar'
import NavIcons from '../Navhead/NavIcons'
import { FaAlignRight } from 'react-icons/fa';
function Navhead() {

  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const closeMenu = () => setIsNavExpanded(false);

    return (
      <header className='navhead pre-header'>
        <div>
          <img className='logo-header' src={Logo} alt='logo' />
        </div>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(isNavExpanded);
          }}
        >
          <FaAlignRight />
        </button>
        <div>
          <Navbar isNavExpanded={isNavExpanded} />
        </div>
        <div className='right-side-header'>
          <div>
            <SearchBar />
          </div>
          <div>
            <NavIcons />
          </div>
        </div>
      </header>
    );
}

export default Navhead
