import React from "react";
import Teamcard from "./Teamcard";

const Motivators = () => {
    const teamData = [
        { imageSrc: "ankush.png", imageAltText: "Prof. Ankush Hutke(ABIT Convenor)", name: "Prof. Ankush Hutke", title: "ABIT Convenor" },
        { imageSrc: "sunil.png", imageAltText: "Dr. Sunil Wankhade(Head of Department)", name: "Dr. Sunil Wankhade", title: "Head of Department" },
        { imageSrc: "sanjay.png", imageAltText: "Dr. Sanjay Bokade(Principal)", name: "Dr. Sanjay Bokade", title: "Principal" },
    ];
    return (
        <section className="max-w-full w-[540px] md:w-[1140px] md:h-[550px] my-10 mx-auto text-white text-center">
            <p className="text-4xl mb-4">Our Motivators</p>
            <div className="flex flex-col md:flex-row gap-x-4 gap-8 md:gap-0 md:my-6">
                {teamData.map((team, index) => (
                    <Teamcard
                        key={index}
                        imageSrc={team.imageSrc}
                        imageAltText={team.imageAltText}
                        name={team.name}
                        title={team.title}
                        height="465px"
                        width="345px"
                        mobileHeight="394px"
                        mobileWidth="290px"
                    />
                ))}
            </div>
        </section>
    )
}

export default Motivators;