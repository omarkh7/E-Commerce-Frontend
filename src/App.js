import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navhead from './components/Navhead/Navhead'
import Home from './components/Home Page/Home';
import About from './components/About Me/About';
import Contact from './components/Contact us /Contact';
import Shop from './components/Shop/Shop';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navhead />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/terms' element={<Home />} />
          <Route path='/refund' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
