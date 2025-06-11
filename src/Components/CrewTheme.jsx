import { React, useState } from "react";
import Douglas from "../images/Douglas.png";
import Mark from "../images/Mark.png"
import Victor from "../images/Victor.png"
import Ansari from "../images/Ansari.png"

const CrewTheme = () => {
  const [selectCrew, setSelectCrew] = useState("1");

  const handleCrewClick = (crew) => {
    setSelectCrew(crew.id);
  };

  const people = [
    {
      id: "1",
      title: "Commander",
      name: "Douglas Hurley",
      details:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: Douglas,
    },
    {
      id: "2",
      title: "Mission Specialist",
      name: "Mark Shuttleworth",
      details:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: Mark,
    },
    {
      id: "3",
      title: "Pilot",
      name: "Victor Glover",
      details:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: Victor,
    },
    {
      id: "4",
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      details:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: Ansari,
    },
  ];

  const selectedCrewData = people.find((crew) => crew.id === selectCrew);

  return (
    <>
      <div className="flex justify-between">
        <div className="text-white">
          <h2 className="text-[#929095] md:text-[1.6rem] sm:text-sm font-extralight font-belle uppercase">{selectedCrewData.title}</h2>
          <h1 className="my-4 font-belle font-normal md:text-[3.5rem] sm:text-[1.5rem] uppercase">{selectedCrewData.name}</h1>
          <h3 className="max-w-lg break-words font-extralight md:text-lg leading-10 text-[#becce8] font-barlowCondensed">
            {selectedCrewData.details}
          </h3>

          <div className="flex gap-3 pt-72">
            {people.map((crew) => (
              <button
                key={crew.id}
                className={`w-4 h-4 rounded-full ${
                  selectCrew === crew.id ? "bg-blue-600" : " bg-gray-300 hover:bg-gray-50"
                }`}
                // className={selectCrew === crew.id ? 'w-4 h-4 rounded-full' : 'bg-blue-600 bg-gray-300'}
                onClick={() => handleCrewClick(crew)}
              >
                {/* {crew.id} */}
              </button>
            ))}
          </div>
        </div>
        <div>
          <img src={selectedCrewData.image} alt={selectedCrewData.title} />
        </div>
      </div>
    </>
  );
};

export default CrewTheme;
