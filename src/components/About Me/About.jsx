import { useState } from 'react';
import { useEffect } from 'react';
import './About.css';
import axios from 'axios';


function About() {




  useEffect(() => { getabout() }, []);

  const [aboutdata, setaboutdata] = useState("");
  const [aboutimage, setaboutimage] = useState("");

  const getabout = async () => {
    const response = await axios.get(`http://localhost:8000/api/pages/getallpagesbyid/6440f68433ababf0bb2ad176`);

    console.log("data ", response.data.data)

    setaboutdata(response.data.data.description);
    setaboutimage(response.data.data.image);

  }


  /* <img alt='img' placehoder="IMAGE" src={`http://localhost:8000/images/${aboutimage}`} /> */

  return (
    <>
      <img src="https://i.pinimg.com/originals/3b/79/4b/3b794bae88e01274f97c085a2427cfa4.jpg" alt="img" />
      <div id='box'>
        <h1 className='h1_walkingexperience'>We Provide You With The Best Walking Experience!
          <hr className='hr1' />
        </h1>
      </div>
      <div className='div_h3'>
        <h3 className='h3_aboutUs'>
          {aboutdata}
          {console.log("img ", `localhost/8000/images/${aboutimage}`)}
        </h3>

      </div>
      <span className='span_aboutUs'><h3>Thank you for choosing our website!
        <hr className='hr2' />
      </h3>
      </span>
    </>
  )
}

export default About
