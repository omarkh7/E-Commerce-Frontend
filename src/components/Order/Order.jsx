import React, { useState } from "react";
import "./Order.css";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa"

const Order = () => {
  const cart = [
    {
      product_id: "64469d3c30a3f02fc407edfd",
      size: "41",
      color: "White",
      quantity: "1",
      price: "200",
      name: "Dunk Low 3D Swoosh",
      image: "http://localhost:8000/images/1682349372097-4.webp",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted,setISSubmitted]=useState(false)

  const handleSubmitOrder = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/orders",
        {
          cart,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response.data.data);
      setISSubmitted(true);
    } catch (error) {
      console.error(error.response.data.error);
      setErrorMessage("An error occurred while submitting the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className='shopping-cart'>Shopping Cart</h1>
      <div className='cart-table-view'>
        <div className='table-cart'>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan='7'>Your cart is empty.</td>
                </tr>
              ) : (
                <>
                  {cart.map((item) => (
                    <tr key={item.product_id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='cart-image'
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>
                        <AiFillDelete className='delete-icon-row' />
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        {isSubmitted ? (<div className='success-message'> <FaCheckCircle className="success"/> Order submitted successfully!</div>) : (
          <div className='cart-discription'>
            <h3 className='cart-description-title'>
              {" "}
              <BsCart className='cart-icon-cart' /> Cart Description
            </h3>
            <div className='order-details'>
              <div>
                <p className='order-detail-title'>Order details:</p>
                <ul className='cart-list'>
                  {cart.map((item) => (
                    <li key={item.product_id}>
                      <p className='cart-item-quantity'>{item.quantity} </p>{" "}
                      {item.name} / color : {item.color} / size : {item.size}
                    </li>
                  ))}
                </ul>
              </div>
              <div>Created At: {new Date().toLocaleString()}</div>
              <div className='cart-total-price'>
                Total Price :{" "}
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                $
              </div>
            </div>
            <div className='submit-cart'>
              <button
                onClick={handleSubmitOrder}
                className='submit-order'
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Order"}
              </button>
              {errorMessage && (
                <div className='error-message'>{errorMessage}</div>
              )}
              
            </div>
          </div>)}
      </div>
    </div>
  );
};

export default Order;
