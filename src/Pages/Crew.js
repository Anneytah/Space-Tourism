import React from 'react'
import NavBar from '../Components/NavBar'
import CrewBack from "../images/CrewBack.jpg";


const Crew = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${CrewBack})` }}>
                <NavBar />

                <div className="mx-5 my-5">
        <h3
          className="mx-2 my-5 font-barlowCondensed font-size"
          style={{ color: "white", paddingLeft: "80px" }}
        >
          <span className="opacity-25 font-bold">02</span> MEET YOUR CREW
        </h3>
      </div>
            </div>
        </>
    )
}

export default Crew