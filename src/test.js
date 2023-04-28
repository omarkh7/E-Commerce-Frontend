// import React, { useState } from "react";
// import "./Order.css";
// import axios from "axios";
// import { AiFillDelete } from "react-icons/ai";
// import { BsCart } from "react-icons/bs";
// import {FaCheckCircle} from "react-icons/fa"

// const Order = () => {
//   const [cart, setCart] = useState([
//     {
//       product_id: "64469d3c30a3f02fc407edfd",
//       size: "41",
//       color: "White",
//       quantity: "1",
//       price: "200",
//       name: "Dunk Low 3D Swoosh",
//       image: "http://localhost:8000/images/1682349372097-4.webp",
//     },
//   ]);

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitted,setISSubmitted]=useState(false)

//   const handleUpdateCart = (index, field, value) => {
//     const updatedCart = [...cart];
//     updatedCart[index][field] = value;
//     setCart(updatedCart);
//   };

//   const handleSubmitOrder = async () => {
//     setIsLoading(true);
//     setErrorMessage("");
//     const token = localStorage.getItem("token");
//     if (!token) {
//       window.location.href = "/login";
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/orders",
//         {
//           cart,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("response", response.data.data);
//       setISSubmitted(true);
//     } catch (error) {
//       console.error(error.response.data.error);
//       setErrorMessage("An error occurred while submitting the order.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1 className='shopping-cart'>Shopping Cart</h1>
//       <div className='cart-table-view'>
//         <div className='table-cart'>
//           <table>
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Color</th>
//                 <th>Size</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.length === 0 ? (
//                 <tr>
//                   <td colSpan='7'>Your cart is empty.</td>
//                 </tr>
//               ) : (
//                 <>
//                   {cart.map((item, index) => (
//                     <tr key={item.product_id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className='cart-image'
//                         />
//                       </td>
//                       <td>{item.name}</td>
//                       <td>
//                         <select
//                           value={item.color}
//                           onChange={(event) =>
//                             handleUpdateCart(
//                               index,
//                               "color",
//                               event.target.value
//                             )
//                           }
//                         >
//                           <option value='White'>White</option>
//                           <option value='Black'>Black</option>
//                           <option value='Red'>Red</option>
//                           <option value='Blue'>Blue</option>
//                         </select>
//                       </td>
//                       <td>
//                         <select
//                           value={item.size}
//                           onChange={(event) =>
//                             handleUpdateCart(
//                               index,
//                               "size",
//                               event.target.value
//                             )
//                           }
