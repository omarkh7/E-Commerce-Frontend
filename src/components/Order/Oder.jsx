import axios from "axios";
import React, { useEffect, useState } from "react";

const Oder = () => {
  const cart = [
    {
      productId: "64469d3c30a3f02fc407edfd",
      size: "41",
      color: "White",
      quantity: "1",
      price: "200",
      name: "Dunk Low 3D Swoosh",
      image: "http://localhost:8000/images/1682349372097-4.webp",
    },
    {
      productId: "64469ce330a3f02fc407edf8",
      size: "41",
      color: "Red",
      quantity: "1",
      price: "200",
      name: "Dunk Low Team Red",
      image: "http://localhost:8000/images/1682349283421-3.webp",
    },
  ];

  const [status, setStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmitOrder = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/orders",
        {
          status,
          paymentStatus,
          cart,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('rsponse',response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };
  

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove from cart
              </button>
            </div>
          ))}
          <p>
            Total: $
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <form>
            <label htmlFor='status'>Status:</label>
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value='delivered'>Delivered</option>
              <option value='Pending'>Pending</option>
            </select>
            <label htmlFor='status'>Payment Status:</label>
            <select onChange={(e) => setPaymentStatus(e.target.value)}>
              <option value='Paid'>Paid</option>
              <option value='Unpaid'>Unpaid</option>
            </select>
          </form>

          <button onClick={handleSubmitOrder}>Submit Order</button>
        </>
      )}
    </div>
  );
};

export default Oder;
