import React from 'react'
import { FaSistrix } from "react-icons/fa";
import '../Navhead/SearchBar.css';


function SearchBar() {
  return (
    <div className='input-wrapper'>
      <FaSistrix id='search-icon' />
      <input placeholder="Type to search ..."/>
    </div>
  );
}

export default SearchBar;
