import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login/Login";
import Navhead from "./components/Navhead/Navhead";
import Home from "./components/Home Page/Home";
import About from "./components/About Me/About";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/Single_Product/SingleProduct";
import SingleCategory from "./components/Single_Category/SingleCategory";
import Order from "./components/Order/Order";
import ContactForm from "./components/Contact us /ContactForm";
import './App.css';
import DashCategory from './components/Dashboard/Sidebar/Pages/DashCategory';
import DashPages from './components/Dashboard/Sidebar/Pages/DashPages';
import DashOrders from './components/Dashboard/Sidebar/Pages/DashOrders';
import DashProducts from './components/Dashboard/Sidebar/Pages/DashProducts';
import DashUsers from './components/Dashboard/Sidebar/Pages/DashUsers'
import Page404 from "./components/404PAge/Page404";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("loggedIn")
  );

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("loggedIn"));
  }, []);

  return (
    <div className="App">
      <Navhead />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element ={<About />} />
          <Route path='/contact' element= {<ContactForm />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/terms' element={<Home />} />
          <Route path='/refund' element={<Home />} />
          <Route path='/single-product/:productId' element={<SingleProduct/>} />
          <Route path='/single-category/:categoryId' element={<SingleCategory/>} />
        <Route path='/order' element={<Order />} />
        <Route path='/dashboard' element={<DashCategory />} />
        <Route path='/error' element={<Page404/>}/>
           {/* <Route
              exact
              path='/DashPages'
              element={<DashPages />} />
            <Route
              exact
              path='DashCategory'
              element={<DashCategory />} />
            <Route
              exact
              path='DashOrders'
              element={<DashOrders />} />

            <Route
              exact
              path='DashUsers'
              element={<DashUsers />} />

            <Route
              exact
              path='DashProducts'
              element={<DashProducts />} /> */}
          </Routes>
    
        <Footer />
      </div>
    
  
  );
}

export default App;
