import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import HomeBack from "../images/HomeBack.jpg";
import "../App.css";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${HomeBack})` }} className="home h-screen">
      <NavBar />
      <div className="lg:mx-48 lg:my-9 sm:my-5 sm:mx-5">
        <div className="row text-white">
          <div className="col-md-8">
            <div className="space-col">
              <h3 className="text-[#ccd7f2] md:text-[1.40rem] sm:text-sm font-extralight font-barlowCondensed">SO, YOU WANT TO TRAVEL TO</h3>
              <h1 className="my-4 font-belle font-normal md:text-[8rem] sm:text-[5rem]">SPACE</h1>
              <p className="md:text-lg leading-7 text-[#ccd7f2] font-barlowCondensed">
                Let's face it; if you want to go to space, you might as well <br />
                genuinely go to outer space and not hover kind of on the <br /> edge of it.
                Well sit back, and relax because we'll give you a truly <br /> out of this
                world experience!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="circle">
                <h1 className="font-belle text-[1.50rem] text-center py-24 font-extralight">EXPLORE</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
