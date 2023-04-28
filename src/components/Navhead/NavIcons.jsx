import React, { useEffect, useState } from "react";
import "../Navhead/NavIcons.css";
import { FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavIcons() {
  const [cartItemsCount, setCartItemsCount] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("cart");
    const cartItems = JSON.parse(localStorageData);
    setCartItemsCount(cartItems);
  }, [cartItemsCount]);

  return (
    <div className='icon-header-div'>
      <div className='icon-header'>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <FaRegUser id='icon-header' />
        </Link>
      </div>

      <div className='icon-header'>
        <Link to='/order' style={{ textDecoration: "none" }}>
          <BsBag id='icon-header' />
          <span className='span-cart'>{cartItemsCount.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default NavIcons;
