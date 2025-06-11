import { useState } from "react";
import React from "react";
import { PiList } from "react-icons/pi";
import Logo from "../images/Logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [onToggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!onToggle);
  };

  return (
    <div>
      <nav>
        <div className="nav-div flex flex-col md:flex-row">
          <div className="nav-bar">
            <div className="logo0 flex justify-around mt-5 gap-20 border-t-1 border-white">
              <h1>
                <img className="" src={Logo} alt="not found" />
              </h1>
              <PiList
                className="list text-white block md:hidden "
                onClick={toggleNavbar}
              />
            </div>
  
            <div className="backdrop-sm font-extralight text-[15px] font-barlowCondensed  py-8">
              {/* {onToggle ? "ON" : "OFF"} */}
              <div
                className={`nav-link ${onToggle ? "block" : "hidden md:flex"}`}
              >
                <ul
                  className={`liste ${onToggle ? "block" : "hidden md:flex"}`}
                >
                  <li>
                    <Link to="/" className="nav-linker">
                    <div className="page"><span className="font-bold">00</span> <br/> <span>HOME</span></div>
                    
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination" className="nav-linker">
                      <span className="font-bold">01</span> <br/> <span>DESTINATION</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/crew" className="nav-linker">
                      <span className="font-bold">02</span> <br/> <span>CREW</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="nav-linker">
                      <span className="font-bold">03</span> <br/> <span>TECHNOLOGY</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
