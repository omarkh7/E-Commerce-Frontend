import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const [alldata, setAllData] = useState([]);

  const apiURL = "http://localhost:8000/api/category/allcategories";

  const fetchallData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchallData();
  }, []);

  return (

    <div>
      {alldata.length > 0 ? (
        alldata && alldata.map(item => (
          <div key={item._id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
        </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>

  );

}

export default Categories;
