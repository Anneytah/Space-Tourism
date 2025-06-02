import React from 'react'
import NavBar from "../Components/NavBar";
// import DestinationImg from "../images/DesinationImg.jpg";
// import Moon from "../images/Moon.png"
// import Mars from "../images/Mars.png"
// import Europa from "../images/Europa.png"
// import Titan from "../images/Titan.png"
import "../App.css";
import { PlanetTheme } from '../Components/PlanetTheme';

const Destination = () => {
  return (
     <div >
      <NavBar />

      <div className="mt-10">
        <h3
          className="mx-2 my-5 font-barlowCondensed text-[1.75rem] spacing"
          style={{ color: "white", paddingLeft: "80px" }}
        >
          <span className="opacity-25 font-bold">01</span>PICK YOUR DESTINATION
        </h3>
      </div>

      <div className='max-w-screen-xl mx-auto'>
       <PlanetTheme/>
      </div>
    </div>

  )
}

export default Destination