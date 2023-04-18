import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "../Search /SearchBar.css";

function SearchBar({setResults,setIsLoading}) {
  const [input, setInput] = useState("");


  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(result);
        setIsLoading(false);
      });
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