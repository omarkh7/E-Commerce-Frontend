import React, { useEffect, useState } from "react";
import "../Navhead/NavIcons.css";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavIcons() {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const localStorageData = localStorage.getItem("cart");
    const cartItems = localStorageData ? JSON.parse(localStorageData) : [];
    setCartItemsCount(cartItems.length);
    console.log('cartitem',cartItemsCount)
  }, [localStorage.getItem("cart")]);


  const logOut = () => {
    window.localStorage.removeItem("loggedIn");
    window.localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <div className='icon-header-div'>
      <div className='icon-header'>
        <Link to='/login'  style={{ textDecoration: "none" }}>
          <FaRegUser id='icon-header' />
        </Link>
      </div>

      <div className='flex-icon-header'>
        <Link to='/order'  style={{ textDecoration: "none" }}>
          <FiShoppingBag id='icon-header' className='bag-icon' />
        </Link>
        <span className='span-cart'>{cartItemsCount}</span>
      </div>
    </div>
  );
}

export default NavIcons;
