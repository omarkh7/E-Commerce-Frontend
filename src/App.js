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
// import ContactForm from "./components/Contact us /ContactForm";
import Order from "./components/Order/Order";
import ContactForm from "./components/Contact us /ContactForm";
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
        <Route
          exact
          path="/order"
          element={isLoggedIn === "true" ? <Order /> : <Login />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/terms" element={<Home />} />
        <Route path="/refund" element={<Home />} />
        <Route path="/single-product/:productId" element={<SingleProduct />} />
        <Route
          path="/single-category/:categoryId"
          element={<SingleCategory />}
        />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
