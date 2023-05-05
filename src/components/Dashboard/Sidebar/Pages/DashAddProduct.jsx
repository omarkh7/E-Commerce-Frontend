import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Sidebar";

const CreateProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [infoImage, setInfoImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const [newInfo, setNewInfo] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    size: "",
    color: "",
    quantity: "",
    images: null,
    image: null,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", newInfo.name);
    formData.append("price", newInfo.price);
    formData.append("description", newInfo.description);
    formData.append("category", newInfo.category);

    // Append multiple images
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    // Append size, color, and quantity as arrays
    for (let i = 0; i < size.length; i++) {
      formData.append("size[]", newInfo.size[i]);
      formData.append("color[]", newInfo.color[i]);
      formData.append("quantity[]", newInfo.quantity[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/products/createproduct",
        formData
      );

      if (response.status !== 200) {
        throw new Error("Failed to create product");
      }

      const product = response.data;
      console.log("Product created:", product);
      // Do something with the created product
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle the error
    }
  };
  const APIKEY = "http://localhost:8000/api/products/getproducts";

  const Products = async () => {
    try {
      const res = await axios.get(APIKEY);
      setAllProducts(res.data.productList);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allProducts);
  useEffect(() => {
    Products();
  }, []);

  const handleImage = (e) => {
    setInfoImage(e.target.files[0]);
  };

  const handleUpdate = (info) => {
    setSelectedInfo(info);
    setIsUpdateMode(true);
  };

  const updateUser = async () => {
    const formData = new FormData();
    formData.append("name", selectedInfo.name);
    formData.append("price", selectedInfo.price);
    formData.append("description", selectedInfo.description);
    formData.append("category", selectedInfo.category);
    formData.append("size", selectedInfo.size);
    formData.append("color", selectedInfo.color);
    formData.append("quantity", selectedInfo.quantity);
    formData.append("images", infoImage);
    console.log("UPDATE", isUpdateMode);

    await axios.put(
      `http://localhost:8000/api/pages/updatepage/${selectedInfo._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success("Updated Successfully", 2000);
    setIsUpdateMode(false);
    Products();
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `http://localhost:8000/api/products/deleteproduct/${id}`
    );
    toast.success("Deleted Successfully", 2000);
    await allProducts();
  };

  return (
    <div className='compflex'>
      <Sidebar />
      <div className='container-info'>
        <div>
          <form
            ref={selectedInfo}
            className='contact-formmm'
            encType='multipart/form-data'
          >
            <input
              className='inputadd'
              type='text'
              value={newInfo.name}
              onChange={(e) => setNewInfo({ ...newInfo, name: e.target.value })}
              placeholder='Enter Name'
            />
            <input
              className='inputadd'
              type='text'
              value={newInfo.price}
              onChange={(e) =>
                setNewInfo({ ...newInfo, price: e.target.value })
              }
              placeholder='Enter Price'
            />
            <input
              className='inputadd'
              type='text'
              value={newInfo.description}
              onChange={(e) =>
                setNewInfo({ ...newInfo, description: e.target.value })
              }
              placeholder='Enter description'
            />
            <input
              className='inputadd'
              type='text'
              value={newInfo.category}
              onChange={(e) =>
                setNewInfo({ ...newInfo, category: e.target.value })
              }
              placeholder='Enter Category'
            />
            <input
              className='inputadd'
              type='text'
              value={newInfo.size}
              onChange={(e) => setNewInfo({ ...newInfo, size: e.target.value })}
              placeholder='Enter Sizes'
            />
            <input
              className='inputadd'
              type='text'
              value={newInfo.color}
              onChange={(e) =>
                setNewInfo({ ...newInfo, color: e.target.value })
              }
              placeholder='Enter Colors'
            />{" "}
            <input
              className='inputadd'
              type='text'
              value={newInfo.quantity}
              onChange={(e) =>
                setNewInfo({ ...newInfo, quantity: e.target.value })
              }
              placeholder='Enter Quantity'
            />
            <input
              className='inputadd'
              type='file'
              value={newInfo.image}
              onChange={(e) => handleImage(e)}
            />
            <input
              className='inputadd'
              type='file'
              value={newInfo.images}
              onChange={(e) => handleImage(e)}
            />
            <button className='buttonadd' onClick={handleFormSubmit}>
              Add
            </button>
          </form>
        </div>
        {isUpdateMode && (
          <div className='container-info'>
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.name}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, name: e.target.value })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.price}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, price: e.target.value })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.description}
              onChange={(e) =>
                setSelectedInfo({
                  ...selectedInfo,
                  description: e.target.value,
                })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.countInStock}
              onChange={(e) =>
                setSelectedInfo({
                  ...selectedInfo,
                  countInStock: e.target.value,
                })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.category}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, category: e.target.value })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.sizes}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, sizes: e.target.value })
              }
            />
            <input
              className='inputadd'
              type='text'
              value={selectedInfo.colors}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, colors: e.target.value })
              }
            />
            <input
              className='inputadd'
              type='file'
              value={newInfo.image}
              onChange={(e) => setInfoImage(e.target.files[0])}
            />{" "}
            <input
              className='inputadd'
              type='file'
              value={newInfo.images}
              onChange={(e) => setInfoImage(e.target.files[0])}
            />
            <div className='compflexbutton'>
              <button className='buttonadd' onClick={() => updateUser()}>
                Save
              </button>
              <button
                className='buttonadd'
                onClick={() => setIsUpdateMode(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>NB</th>
                <th scope='col'>Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>description</th>
                <th scope='col'>countInStock</th>
                <th scope='col'>Category</th>
                <th scope='col'>Sizes</th>
                <th scope='col'>Colors</th>
                <th scope='col'>Image</th>
                <th scope='col'>Images</th>
                <th scope='col'>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((info, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{info.name}</td>
                  <td>{info.price}</td>
                  <td>{info.description}</td>
                  <td>{info.countInStock}</td>
                  <td>{info.category.name}</td>
                  <td>
                    {info.attribute.map((info, index) => (
                      <p>
                        Size {index}: {info.size}
                      </p>
                    ))}
                  </td>
                  <td>
                    {info.attribute.map((info, index) => (
                      <p>
                        Color {index}: {info.color}
                      </p>
                    ))}
                  </td>
                  <td>
                    <img src={info.image} alt={info.image} />
                  </td>
                  <td>
                    <img src={info.images} alt={info.images} />
                  </td>

                  <td>
                    <button
                      className='buttonedit'
                      onClick={() => handleUpdate(info)}
                    >
                      Edit
                    </button>
                    <button
                      className='buttondelete'
                      onClick={() => deleteUser(info._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

//     <div className="compflex">
//       <Sidebar />
//       <div className="container-info">
//         <div>
//           <form
//             ref={selectedInfo}
//             className="contact-formmm"
//             encType="multipart/form-data"
//           >
//             <form onSubmit={handleFormSubmit}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="inputadd"
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//               />

//               <label htmlFor="description">Description:</label>
//               <textarea
//                 className="inputadd"
//                 id="description"
//                 value={description}
//                 onChange={(event) => setDescription(event.target.value)}
//               ></textarea>

//               <label htmlFor="category">Category:</label>
//               <input
//                 className="inputadd"
//                 type="text"
//                 id="category"
//                 value={categoryName}
//                 onChange={(event) => setCategoryName(event.target.value)}
//               />

//               {/* Add input fields for size, color, quantity */}
//               {/* Example code for a single set of size, color, quantity fields */}
//               <label htmlFor="size">Size:</label>
//               <input
//                 className="inputadd"
//                 type="text"
//                 id="size"
//                 value={size[0]}
//                 onChange={(event) => setSize([event.target.value])}
//               />

//               <label htmlFor="color">Color:</label>
//               <input
//                 className="inputadd"
//                 type="text"
//                 id="color"
//                 value={color[0]}
//                 onChange={(event) => setColor([event.target.value])}
//               />

//               <label htmlFor="quantity">Quantity:</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 value={quantity[0]}
//                 onChange={(event) => setQuantity([event.target.value])}
//               />

//               {/* Add input fields for price */}
//               <label htmlFor="price">Price:</label>
//               <input
//                 className="inputadd"
//                 type="number"
//                 id="price"
//                 value={price}
//                 onChange={(event) => setPrice(event.target.value)}
//               />

//               {/* Add input field for images */}
//               <label htmlFor="images">Images:</label>
//               <input
//                 className="inputadd"
//                 type="file"
//                 id="images"
//                 multiple
//                 onChange={(event) => setImages(event.target.files)}
//               />
//               <button type="submit">Create Product</button>
//             </form>

//             <tbody>
//               {allProducts.map((info, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{info.name}</td>
//                   <td>{info.price}</td>
//                   <td>{info.description}</td>
//                   <td>{info.countInStock}</td>
//                   <td>{info.category.name}</td>
//                   <td>
//                     {info.attribute.map((info, index) => (
//                       <p>
//                         Size {index}: {info.size}
//                       </p>
//                     ))}
//                   </td>
//                   <td>
//                     {info.attribute.map((info, index) => (
//                       <p>
//                         Color {index}: {info.color}
//                       </p>
//                     ))}
//                   </td>
//                   <td>
//                     <img src={info.image} alt={info.image} />
//                   </td>
//                   <td>
//                     <img src={info.images} alt={info.images} />
//                   </td>

//                   <td>
//                     <button
//                       className="buttonedit"
//                       onClick={() => handleUpdate(info)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="buttondelete"
//                       onClick={() => deleteUser(info._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CreateProduct;

// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateProduct = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [size, setSize] = useState([]);
//   const [color, setColor] = useState([]);
//   const [quantity, setQuantity] = useState([]);
//   const [price, setPrice] = useState('');
//   const [images, setImages] = useState([]);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('price', price);

//     // Append multiple images
//     for (let i = 0; i < images.length; i++) {
//       formData.append('images', images[i]);
//     }

//     // Append size, color, and quantity as arrays
//     for (let i = 0; i < size.length; i++) {
//       formData.append('size[]', size[i]);
//       formData.append('color[]', color[i]);
//       formData.append('quantity[]', quantity[i]);
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/api/products/createproduct', formData);

//       if (response.status !== 200) {
//         throw new Error('Failed to create product');
//       }

//       const product = response.data;
//       console.log('Product created:', product);
//       // Do something with the created product
//     } catch (error) {
//       console.error('Error creating product:', error);
//       // Handle the error
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />

//       <label htmlFor="description">Description:</label>
//       <textarea
//         id="description"
//         value={description}
//         onChange={(event) => setDescription(event.target.value)}
//       ></textarea>

//       <label htmlFor="category">Category:</label>
//       <input
//         type="text"
//         id="category"
//         value={category}
//         onChange={(event) => setCategory(event.target.value)}
//       />

//       {/* Add input fields for size, color, quantity */}
//       {/* Example code for a single set of size, color, quantity fields */}
//       <label htmlFor="size">Size:</label>
//       <input
//         type="text"
//         id="size"
//         value={size[0]}
//         onChange={(event) => setSize([event.target.value])}
//       />

//       <label htmlFor="color">Color:</label>
//       <input
//         type="text"
//         id="color"
//         value={color[0]}
//         onChange={(event) => setColor([event.target.value])}
//       />

//       <label htmlFor="quantity">Quantity:</label>
//       <input
//         type="number"
//         id="quantity"
//         value={quantity[0]}
//         onChange={(event) => setQuantity([event.target.value])}
//       />

//       {/* Add input fields for price */}
//       <label htmlFor="price">Price:</label>
//       <input
//         type="number"
//         id="price"
//         value={price}
//         onChange={(event) => setPrice(event.target.value)}
//       />

//       {/* Add input field for images */}
//       <label htmlFor="images">Images:</label>
//       <input
//         type="file"
//         id="images"
//         multiple onChange={(event) => setImages(event.target.files)}
// />
// <button type="submit">Create Product</button>
// </form>
// );
// };

// export default CreateProduct;
