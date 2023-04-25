import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "../Search /SearchBar.css";
import axios from "axios";

function SearchBar({ setResults }) {
  
  const [input, setInput] = useState("");


  const fetchData = async(value) => {
    try {
      await axios.get("http://localhost:8000/api/category/allcategories")
        .then((res) =>res.data.data)
        .then((json) => {
        const result = json.filter((result) => {
          return value && result && result.name && result.name.toLowerCase().includes(value)
        })
           setResults(result);
          
         
        })
    }catch (error) {
      console.error(error);
    }
  
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
  
    <div className='input-wrapper'>
      <FaSistrix id='search-icon' />
      <input
        placeholder='Type to search ...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
  </div>

  );
}

export default SearchBar;
