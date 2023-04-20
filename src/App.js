import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Navhead from "./components/Navhead/Navhead";
import Home from "./components/Home Page/Home";
import About from "./components/About Me/About";
import Contact from "./components/Contact us /Contact";
import Hightop from "./components/Shop/Categories/Hightop/Hightop";
import Lowtop from "./components/Shop/Categories/Lowtop/Lowtop";
import Athletic from "./components/Shop/Categories/Athletic/Athletic"
import Retro from "./components/Shop/Categories/Retro/Retro"
import Slide from "./components/Shop/Categories/Slides/Slides"
import Socks from "./components/Shop/Categories/Socks/Socks"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navhead />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/terms" element={<Home />} />
          <Route path="/refund" element={<Home />} />
          <Route path="/hightop" element={<Hightop />} />

          <Route path="/lowtop" element={<Lowtop/>} />
          <Route path="/athletic" element={<Athletic />} />
          <Route path="/retro" element={<Retro/>} />
          <Route path="/slides" element={<Slide />} />
          <Route path="/socks" element={<Socks/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
