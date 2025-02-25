import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SponsorSection = () => {
    const SponsorData = [
        { imageSrc: "public/d5a7d6679c37f6040f6f0defc711de3c.jpeg", imageAltText: "Sponsorimg1" },
        { imageSrc: "public/f2dcf148e2d3ed280110b2002230032a.png", imageAltText: "Sponsorimg2" },
        { imageSrc: "public/9fb23d5503a19657997f1dd17e91641b.png", imageAltText: "Sponsorimg3" },
    ];

    const [currIndex, setCurrIndex] = useState(0);
    const [isRightClicked, setIsRightClicked] = useState(false);
    const [isLeftClicked, setIsLeftClicked] = useState(false);

    const handlePrevSlide = () => {
        setCurrIndex((prevIndex) => (prevIndex === 0 ? SponsorData.length - 1 : prevIndex - 1));
        setIsLeftClicked(true);
        setIsRightClicked(false);

    };

    const handleNextSlide = () => {
        setCurrIndex((prevIndex) => (prevIndex === SponsorData.length - 1 ? 0 : prevIndex + 1));
        setIsRightClicked(true);
        setIsLeftClicked(false);
    };

    return (
        <div className="flex items-center justify-center">
        <section className="bg-[#5C5C5C40] max-w-full w-[90vw] md:w-[1096px] md:h-[299px] border-[1px] rounded-3xl border-[#858080BF]  p-2 my-10 md:mx-auto text-white text-center overflow-hidden relative ">
            <p className="mb-4 text-4xl">Our Sponsors</p>
            <div className="flex-row justify-center hidden gap-8 md:flex md:my-6 sponsor-scroll">
                {SponsorData.map((team, index) => (
                    <div key={index} style={{ margin: '0 10px', borderRadius: '5%' }}>
                        <img
                            src={team.imageSrc}
                            alt={team.imageAltText}
                            style={{ width: '345px', height: '180px', borderRadius: '5%' }}
                        />
                    </div>
                ))}
            </div>
            <div className="md:hidden relative h-[240px] overflow-hidden">
                <div className="flex sponsor-scroll">
                    {SponsorData.map((team, index) => (
                        <div key={index} style={{ display: index === currIndex ? 'block' : 'none', margin: '0 10px', borderRadius: '5%' }}>
                            <img
                                src={team.imageSrc}
                                alt={team.imageAltText}
                                style={{ width: '100vw', height: '160px', borderRadius: '5%' }}
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
                    <FaAngleLeft
                        onClick={handlePrevSlide}
                        size={32}
                        className="p-1 mx-3 rounded-full"
                        style={{
                            color: "black",
                            backgroundColor: isLeftClicked ? "#d9d9d9" : "#787878",
                            cursor: "pointer",
                            transition: "background-color 0.2s ease"
                        }}
                    />
                    <FaAngleRight
                        onClick={handleNextSlide}
                        size={32}
                        className="p-1 mx-2 rounded-full"
                        style={{
                            color: "black",
                            backgroundColor: isRightClicked ? "#d9d9d9" : "#787878",
                            cursor: "pointer",
                            transition: "background-color 0.2s ease"
                        }}
                    />
                </div>
            </div>
        </section>
        </div>
    );
};

export default SponsorSection;
