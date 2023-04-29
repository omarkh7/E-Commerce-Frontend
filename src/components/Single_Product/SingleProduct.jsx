import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleProduct() {
  const { productId } = useParams();

  const [alldata, setAllData] = useState(null);
  // const [selectedSize, setSelectedSize] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');
  // const [selectedQuantity, setSelectedQuantity] = useState(1);

  // const handleSizeChange = (event) => {
  //   setSelectedSize(event.target.value);
  // };

  // const handleColorChange = (event) => {
  //   setSelectedColor(event.target.value);
  // };

  // const handleQuantityChange = (event) => {
  //   setSelectedQuantity(parseInt(event.target.value));
  // };

  // const sizeOptions = alldata.attribute.map((attr) => attr.size);
  // const colorOptions = alldata.attribute.map((attr) => attr.color);

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

  // return (
  //   <div>
  //     {alldata ? (
  //       alldata.map((item) => (
  //         <div key={item._id}>
  //           <h2>{item.name}</h2>
  //           <h2>{item.description}</h2>
  //           <h2>{item.price} $</h2>
  //           <h2>{item.category.name} </h2>
  //           <h2>{item.countInStock} </h2>

  //           <img src={item.image} alt={item.name} />
  //           <img src={item.images[1]}/>
  //           <img src={item.images[2]}/>
  //         </div>
  //       ))
  //     ) : (
  //       <p>No data available</p>
  //     )}
  //   </div>
  // );
  return (
    <div className="product-details-container">
      {alldata ? (
        alldata.map((product) => (
          <div key={product._id} className="product-details">
            <div class="image-wrapper">
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
              <div className="product-attributes">
                {product.attribute &&
                  product.attribute.map((attr, index) => (
                    <div key={index} className="product-attribute">
                      <h3 className="attribute-title">Size:</h3>
                      <p className="attribute-value">{attr.size}</p>
                      <h3 className="attribute-title">Color:</h3>
                      <p className="attribute-value">{attr.color}</p>
                      <h3 className="attribute-title">Quantity:</h3>
                      <p className="attribute-value">{attr.quantity}</p>
                    </div>
                  ))}
              </div>

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
