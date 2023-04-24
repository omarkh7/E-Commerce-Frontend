// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function SingleProduct() {
//   const { productId } = useParams();

//   const [alldata, setAllData] = useState([]);

//   const apiURL = `http://localhost:8000/api/products/getproductbyid/${productId}`;

//   const fetchallData = async () => {
//     try {
//       const response = await axios.get(apiURL);
//       console.log("hello:", response.data.product);
//       setAllData(response.data.product);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchallData();
//   }, []);
//   return (
//     <div>
//       {alldata ? (
//         alldata.map((item) => (
//           <div key={item._id}>
//             <h2>{item.name}</h2>
//             <h2>{item.description}</h2>
//             <img src={item.image} alt={item.name} />
//           </div>
//         ))
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// }

// export default SingleProduct;

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleProduct() {
  const { productId } = useParams();

  const [alldata, setAllData] = useState(null);

  const apiURL = `http://localhost:8000/api/products/getproductbyid/${productId}`;

  const fetchallData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log("hello:", response.data.product);
      setAllData([response.data.product]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchallData();
  }, []);
  
  return (
    <div>
      {alldata ? (
        alldata.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SingleProduct;

