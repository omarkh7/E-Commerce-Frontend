import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Loader/Loader";

function Lowtop() {
  const [alldata, setAllData] = useState([]);
  
  const apiURL = "http://localhost:8000/api/products/getproducts";

  const fetchAllData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log("Products", response.data);
      setAllData(response.data?.productList || []);
     
    } catch (error) {
      console.error(error);
      
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  
  if (alldata && alldata.length > 0) {
    const filteredData = alldata.filter((item) =>
      item.category._id.includes("6437ba63a671878f61ce7e40")
    );
    console.log("filter", filteredData);
    return (
     
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
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
}

export default Lowtop;
