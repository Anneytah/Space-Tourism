import React, { useState } from "react";
import Launch from "../images/Launch.jpg";
import Spaceport from "../images/Spaceport.jpg";
import Space from "../images/Space.jpg";

const TechTheme = () => {
  const [selectTech, setSelectTheme] = useState("1");

  const handleTechClick = (tech) => {
    setSelectTheme(tech.id);
  };

  const launch = [
    {
      id: "1",
      title: "Launch vehicle",
      details:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: Launch,
    },
    {
      id: "2",
      title: "Launch vehicle",
      details:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: Spaceport,
    },
    {
      id: "3",
      title: "Launch vehicle",
      details:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: Space,
    },
  ];

  const selectedTechData = launch.find((tech) => tech.id === selectTech);
  return (
    <>
      <div className="flex gap-5">
        <ul className="px-3 text-2xl">
          {launch.map((tech) => (
            <li
              key={tech.id}
              className={`w-8 text-[#becce8] p-[2.5rem] my-3 mx-5 h-8 rounded-full bg-transparent border border-white-100 cursor-pointer ${
                selectTech === tech.id
                  ? "bg-white"
                  : "hover:border-blue-500"
              }`}
              onClick={() => handleTechClick(tech)}
            >
              {tech.id}
            </li>
          ))}
        </ul>
        <div>
            <p className="text-[#becce8] font-barlowCondensed uppercase">The terminology...</p>
            <h2 className="text-white my-4 font-belle font-normal md:text-[3.5rem] sm:text-[1.5rem] uppercase">{selectedTechData.title}</h2>
            <p className="max-w-lg break-words font-extralight md:text-lg leading-10 text-[#becce8] font-barlowCondensed">{selectedTechData.details}</p>
        </div>
        <div>
            <img src={selectedTechData.image} alt={selectedTechData.title} />
        </div>
      </div>
    </>
  );
};

export default TechTheme;
