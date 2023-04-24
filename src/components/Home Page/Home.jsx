import React from 'react'
import Categories from './Categories_Home/Categories'
import ProductsHome from './Products_Home/ProductsHome'
import Slider from './Slider/Slider'
import "./Home.css"

function Home() {


  return (
    <div>
      <Slider/>
      <Categories/>
      <ProductsHome/>

   <div className="container">
      <div className="column1"></div>
      <div className="column2">
        <h1>Title</h1>
        <p>Description</p>
        <button>Button</button>
      </div>
    </div> 
    <div className="container">
      <div className="column2">
        <h1>Title</h1>
        <p>Description</p>
        <button>Button</button>
      </div>
      <div className="column1"></div>

    </div> 
    </div>
  )
}

export default Home
