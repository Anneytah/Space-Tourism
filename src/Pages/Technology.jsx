import React from "react";
import NavBar from "../Components/NavBar";
import TechnologyBack from "../images/TechnologyBack.jpg";
import TechTheme from "../Components/TechTheme";

const Technology = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${TechnologyBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <NavBar />

        <div className="mx-5 my-5">
          <h3
            className="mx-2 my-5 font-barlowCondensed font-size"
            style={{ color: "white", paddingLeft: "80px" }}
          >
            <span className="opacity-25 font-bold">03</span>{" "}
            <span className="uppercase"> Space Launch 101</span>
          </h3>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-32">
          <TechTheme />
        </div>
      </div>
    </>
  );
};

export default Technology;
