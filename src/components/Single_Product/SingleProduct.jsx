import "./SingleProduct.css";
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
    <div className="product-details-container">
      {alldata ? (
        alldata.map((product) => (
          <div key={product._id} className="product-details">
            <div className="image-wrapper">
              <ul>
                {product.images &&
                  product.images.map((image, index) => (
                    <li key={index}>
                      <img src={image} alt="" />
                    </li>
                  ))}
              </ul>
            </div>
            <div className="product-info">
              <h1 className="product-name">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <h2 className="product-price">{product.price} $</h2>
              {product.attribute && (
                <select>
                  {product.attribute &&
                    (Array.isArray(product.attribute.size)
                      ? product.attribute.size.map((size) => (

                          <option value={size} key={size}>
                            {size` ${console.log("SIZE",size)}`} Size
                     
                          </option>
                        ))
                      : null)}
                </select>
              )}
              <div className="product-actions">
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SingleProduct;
