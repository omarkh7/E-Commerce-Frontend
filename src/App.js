import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navhead from './components/Navhead/Navhead'
import Home from './components/Home Page/Home';
import About from './components/About Me/About';
import Contact from './components/Contact us /Contact';
import Shop from './components/Shop/Shop';
import DashCategory from './components/Dashboard/Sidebar/Pages/DashCategory';
import DashPages from './components/Dashboard/Sidebar/Pages/DashPages';
import DashOrders from './components/Dashboard/Sidebar/Pages/DashOrders';
import DashProducts from './components/Dashboard/Sidebar/Pages/DashProducts';
import DashUsers from './components/Dashboard/Sidebar/Pages/DashUsers'

function App() {
  return (
    <>

      <BrowserRouter>
        <div className="App">
          {/* <Navhead />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/terms' element={<Home />} />
            <Route path='/refund' element={<Home />} />
            
          </Routes> */}
          <Routes>
            <Route
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
              element={<DashProducts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
