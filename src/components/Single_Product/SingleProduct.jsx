import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleProduct() {
  const { productId } = useParams();

  const [alldata, setAllData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isProductDisabled, setIsProductDisabled] = useState(false);

  console.log("selectedSize: ", selectedSize);
  console.log("selectedColor: ", selectedColor);
  console.log("quantity: ", selectedQuantity);

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
    // Disable();
  }, []);

  // const Disable = async ()=>{

  //   const selectedAttr = alldata[0].attribute.find(
  //     (attr) =>
  //       attr.size === selectedSize && attr.color === selectedColor
  //   );
  //   if (selectedAttr && selectedQuantity > selectedAttr.quantity) {
  //     setIsProductDisabled(true);
  //   } else {
  //     setIsProductDisabled(false);
  //   }

  // }

  //SIZE
  const handleSelectedSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);
    // const selectedAttr = alldata[0].attribute.find(
    //   (attr) => attr.size === selectedSize
    // );
  };

  //COLOR
  const handleSelectedColorChange = (event) => {
    const selectedColor = event.target.value;
    setSelectedColor(selectedColor);
    // const selectedAttr = alldata[0].attribute.find(
    //   (attr) => attr.color === selectedColor
    // );
  };

  //Quantity
  const handleSelectedQuantityChange = (event) => {
    const selectedQuantity = event.target.value;
    setSelectedQuantity(selectedQuantity);
    // const selectedAttr = alldata[0].attribute.find(
    //   (attr) => attr.quantity === selectedQuantity
    // );
  };

  const handleIncrease = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrease = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <div className="product-details-container">
      {alldata ? (
        alldata.map((product) => {
          const allSizes = product.attribute.map((attr) => attr.size);
          const allColors = product.attribute.map((attr) => attr.color);
          const allquantity = product.attribute.map((attr) => attr.quantity);

          return (
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
                <p className="product-category">{product.category.name}</p>
                <p className="product-description">{product.description}</p>
                <h2 className="product-price">{product.price} $</h2>

                {/* SIZES */}
                <div className="all-product-attribute">
                  <div className="product-attribute">
                    <select
                      id="attribute-size"
                      name="attribute-size"
                      value={selectedSize}
                      onChange={handleSelectedSizeChange}
                    >
                      <option value="">Select a Size</option>
                      {allSizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>

                    {/* COLORS */}
                  </div >

                  <div className="product-attribute">
                    <select
                      id="attribute-color"
                      name="attribute-color"
                      value={selectedColor}
                      onChange={handleSelectedColorChange}
                    >
                      <option value="">Select a Color</option>
                      {allColors.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity */}

                  <div className="product-attribute-quantity">
                    <div className="product-counter">
                      <button
                        className="counter-button"
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                      <span className="counter-value">{selectedQuantity}</span>
                      <button
                        className="counter-button"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>
                  </div>
              
             
              <div className="product-actions">
                <button
                  className="add-to-cart-button"
                  disabled={isProductDisabled}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            </div>
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SingleProduct;
