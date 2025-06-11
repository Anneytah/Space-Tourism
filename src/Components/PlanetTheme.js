import React, { useState } from 'react';
import Moon from "../images/Moon.png";
import Mars from "../images/Mars.png";
import Europa from "../images/Europa.png";
import Titan from "../images/Titan.png";

export const PlanetTheme = () => {
    const [selectedPlanet, setSelectedPlanet] = useState("MOON");

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet.title);
    };

    const data = [
        {
            id: "1",
            image: Moon,
            title: "MOON",
            details: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            // average: "AVG. DISTANCE",
            // est: "EST. TRAVEL TIME",
            kilometer: "384,400 KM",
            days: "3 DAYS"
        },
        {
            id: "2",
            image: Mars,
            title: "MARS",
            details: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            // average: "AVG. DISTANCE",
            // est: "EST. TRAVEL TIME",
            kilometer: "225 MIL. KM",
            days: "9 MONTHS"
        },
        {
            id: "3",
            image: Europa,
            title: "EUROPA",
            details: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            // average: "AVG. DISTANCE",
            // est: "EST. TRAVEL TIME",
            kilometer: "628 MIL. KM",
            days: "3 YEARS"
        },
        {
            id: "4",
            image: Titan,
            title: "TITAN",
            details: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            // average: "AVG. DISTANCE",
            // est: "EST. TRAVEL TIME",
            kilometer: "1.6 BIL. KM",
            days: "7 YEARS"
        }
    ];

    const selectedPlanetData = data.find(planet => planet.title === selectedPlanet);

    return (
        <section className='max-w-screen-xl mx-auto grid lg:grid-cols-12 grid-cols-2 h-full pb-14'>
            <div className='col-span-7'>
                <img src={selectedPlanetData.image} alt={selectedPlanetData.title} srcset="" />
            </div>
            <div className='col-span-5 flex flex-col gap-4'>
                <div className='Planet navigation font-belle flex gap-5 text-md text-white'>
                    {data.map(planet => (
                        <p key={planet.id} className={selectedPlanet === planet.title ? 'border-b-[3px] mb-2' : 'hover:border-b-[3px] focus:border-b-[3px] active:border-b-[3px] mb-2 cursor-pointer'} onClick={() => handlePlanetClick(planet)}>
                            {planet.title}
                        </p>
                    ))}
                </div>
                <div className='planet-description flex flex-col gap-2 text-white'>
                    <h1 className='planet-title text-8xl  font-normal font-serif'>{selectedPlanetData.title}</h1>
                    <p className='text-lg text-[#becce8] font-barlowCondensed'>{selectedPlanetData.details}</p>
                </div>
                <div className='planet-parameters flex gap-16 my-3 border-t-[1px] text-white'>
                    <div className='flex flex-col mt-4'>
                        <p className='text-sm'>AVG. DISTANCE</p>
                        <p className='text-[28px]'>{selectedPlanetData.kilometer}</p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <p className='text-sm'>EST. TRAVEL TIME</p>
                        <p className='text-[28px] '>{selectedPlanetData.days}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
