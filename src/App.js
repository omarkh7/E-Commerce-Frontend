import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Navhead from "./components/Navhead/Navhead";
import Home from "./components/Home Page/Home";
import About from "./components/About Me/About";
import Contact from "./components/Contact us /Contact";
import Footer from './components/Footer/Footer';
import SingleProduct from './components/Single_Product/SingleProduct';
import SingleCategory from './components/Single_Category/SingleCategory';

function App() {
  
  return (
      <div className="App">
        <Navhead />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/terms" element={<Home />} />
          <Route path="/refund" element={<Home />} />


          <Route path='/single-product/:productId' element={<SingleProduct />} />
          <Route path='/single-category/:categoryId' element={<SingleCategory />} />

        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
