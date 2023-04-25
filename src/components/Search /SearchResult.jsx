import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result}) => {

  // useEffect(() => {
  //   <link  to={`single-category/${result._id}`}/>
  // }, [result._id])
  
  return (
    <Link
      to={`single-category/${result._id}`}
      style={{ textDecoration: "none", color: "black" }}
      onClick={window.location.reload}
    >
      <div className='search-result' onMouseDown={() => false}>
        {result.name}
      </div>
    </Link>
  );
};

export default SearchResult;
