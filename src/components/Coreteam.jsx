import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import Teamcard from "./Teamcard";


const Coreteam = () => {
    const teamData = [
        { imageSrc: "pratik.png", imageAltText: "Pratik Dave(President)", name: "Pratik Dave", title: "President" },
        { imageSrc: "aryaman.png", imageAltText: "Aryaman Jha(General Secretary)", name: "Aryaman Jha", title: "General Secretary" },
        { imageSrc: "jenil.png", imageAltText: "Jenil Kumbhani(Treasurer)", name: "Jenil Kumbhani", title: "Treasurer" },
        { imageSrc: "dhiraj.png", imageAltText: "Dhiraj Jadhav(Vice President)", name: "Dhiraj Jadhav", title: "Vice President" },
    ];
 
    const [currIndex, setCurrIndex] = useState(0);
    const [isUpClicked, setIsUpClicked] = useState(false);
    const [isDownClicked, setIsDownClicked] = useState(false);

    const handlePrevSlide = () => {
        setCurrIndex((prevIndex) => (prevIndex === 0 ? teamData.length - 1 : prevIndex - 1));
        setIsUpClicked(true);
        setIsDownClicked(false);
    };

    const handleNextSlide = () => {
        setCurrIndex((prevIndex) => (prevIndex === teamData.length - 1 ? 0 : prevIndex + 1));
        setIsDownClicked(true);
        setIsUpClicked(false);
    };

    return (
        <section className="bg-[#5C5C5C40] max-w-full w-[343px] md:w-[1100px] md:h-[550px] border-[1px] rounded-3xl border-[#858080BF] p-2 my-10 mx-auto text-white text-center">
            <p className="mb-4 text-4xl">Core Team</p>
            <div className="flex-col hidden gap-8 md:flex md:flex-row gap-x-4 md:gap-0 md:my-6">
                {teamData.map((team, index) => (
                    <Teamcard
                        key={index}
                        imageSrc={team.imageSrc}
                        imageAltText={team.imageAltText}
                        name={team.name}
                        title={team.title}
                    />
                ))}
            </div>
            <div className="md:hidden relative h-[480px]">
                {teamData.map((team, index) => (
                    <div key={index} style={{ display: index === currIndex ? 'block' : 'none' }}>
                        <Teamcard
                            imageSrc={team.imageSrc}
                            imageAltText={team.imageAltText}
                            name={team.name}
                            title={team.title}
                        />
                    </div>
                ))}
                <div className="absolute bottom-0 flex flex-col items-end right-9">
                    {/* <FaAngleUp onClick={handleNextSlide} size={32} className="bg-[#D9D9D9] text-black hover:bg-white rounded-full p-1 my-3" />
                    <FaAngleDown onClick={handlePrevSlide} size={32} className="bg-[#D9D9D9] text-black hover:bg-white rounded-full p-1 my-3" /> */}
                    <FaAngleUp
                            onClick={handlePrevSlide}
                            size={32}
                            className="p-1 my-3 rounded-full"
                            style={{
                                color: "black",
                                backgroundColor: isUpClicked ? "#d9d9d9" : "#787878",
                                cursor: "pointer",
                                transition: "background-color 0.2s ease"
                            }}
                        />
                        <FaAngleDown
                            onClick={handleNextSlide}
                            size={32}
                            className="p-1 my-2 rounded-full"
                            style={{
                                color: "black",
                                backgroundColor: isDownClicked ? "#d9d9d9" : "#787878",
                                cursor: "pointer",
                                transition: "background-color 0.2s ease"
                            }}
                        />
                </div>
            </div>
        </section>
    )
}

export default Coreteam