import React, { useState } from "react";
import Logo from "../../assets/images/logo2-removebg-preview.png";
import "../Navhead/Navhead.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../Search /SearchBar";
import NavIcons from "../Navhead/NavIcons";
import NavbarMobile from "../Navbar/NavbarMobile";
import SearchResultsList from "../Search /SearchResultsList";
function Navhead() {
  const [results, setResults] = useState([]);

  return (
    <header className='navhead pre-header'>
      <div>
        <img className='logo-header' src={Logo} alt='logo' />
      </div>

      <div className='nav-navbar'>
        <Navbar />
      </div>
      <div className='right-side-header'>
        <div>
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
        <div className='navicons'>
          <NavIcons />
        </div>
      </div>
      <div className='nav-navMobile'>
        <NavbarMobile />
      </div>

      <div className='icons-mobileversion'>
        <div>
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
        <div>
          <NavIcons />
        </div>
      </div>
    </header>
  );
}

export default Navhead;
