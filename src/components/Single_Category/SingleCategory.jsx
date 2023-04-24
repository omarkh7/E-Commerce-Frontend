import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleCategory() {
  const {categoryId} = useParams();

  const [allproduct, setallproductData] = useState([]);


  const apiURL = `http://localhost:8000/api/products/getproductsbycategory/${categoryId}`;


  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(apiURL);
      setallproductData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);




  if (allproduct && allproduct.length > 0) {
    return (
      <div>
        {allproduct.length > 0 ? (
          allproduct.map((item) => (
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
  } else {
    return <p>No data available</p>;
  }
}

export default SingleCategory;
