import React from "react";
import Teamcard from "./Teamcard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Coreteam = () => {
    const teamData = [
        { imageSrc: "pratik.png", imageAltText: "Pratik Dave(President)", name: "Pratik Dave", title: "President" },
        { imageSrc: "aryaman.png", imageAltText: "Aryaman Jha(General Secretary)", name: "Aryaman Jha", title: "General Secretary" },
        { imageSrc: "jenil.png", imageAltText: "Jenil Kumbhani(Treasurer)", name: "Jenil Kumbhani", title: "Treasurer" },
        { imageSrc: "dhiraj.png", imageAltText: "Dhiraj Jadhav(Vice President)", name: "Dhiraj Jadhav", title: "Vice President" },
    ];
    return (
        <section className="bg-[#5C5C5C40] max-w-full w-[343px] md:w-[1100px] md:h-[550px] border-[1px] rounded-3xl border-[#858080BF] p-2 my-10 mx-auto text-white text-center">
            <p className="text-4xl mb-4">Core Team</p>
            <div className="hidden md:flex flex-col md:flex-row gap-x-4 gap-8 md:gap-0 md:my-6">
                {teamData.map((team, index) => (
                    <Teamcard
                        key={index}
                        imageSrc={team.imageSrc}
                        imageAltText={team.imageAltText}
                        name={team.name}
                        title={team.title}
                        height="435px"
                        width="255px"
                        mobileHeight="368px"
                        mobileWidth="216px"
                    />
                ))}
            </div>
            <Carousel responsive={responsive} className="md:hidden">
                {teamData.map((team, index) => (
                    <Teamcard
                        key={index}
                        imageSrc={team.imageSrc}
                        imageAltText={team.imageAltText}
                        name={team.name}
                        title={team.title}
                    />
                ))}
            </Carousel>
        </section>
    )
}

export default Coreteam