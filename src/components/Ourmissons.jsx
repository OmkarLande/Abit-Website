import React from "react";
import Logo from "../images/Logo.png";
import '../index.css';

function Ourmissons() {
 

  return (
    <div className="Ourmissons flex flex-col  md:flex-row items-center justify-center mt-[80px]  text-white">
      <div
        className="flex flex-col py-3 items-center md:items-start justify-center space-y-3"
        style={{ minWidth: "356px", maxWidth: "531px", height: "383px" }}
      >
        <div>
          <h1
            className="font-bold  mt-2 font-Roboto text-center md:text-left text-3xl md:text-4xl"
            style={{
              minWidth: "356px",
              maxWidth: "525px",
              lineHeight: "47.88px",
            }}
          >
            Unleashing the Potential of Budding Technocrats
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="font-light mt-2 font-Roboto text-center md:text-left">
            ABIT (Association of Budding Information Technocrats) is dedicated
            to providing a platform for students to develop and enhance their
            technical and soft skills. Our mission is to nurture talented minds
            and cultivate diligent hearts, empowering students to excel in
            various fields
          </h4>
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col space-y-5"
        style={{ minWidth: "356px", width: "531px", height: "383px" }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row ">
          <div className="m-2 ">
            <h1 className="font-semibold font-Roboto text-2xl text-center">Our mission</h1>
            <p className="font-normal  text-center mt-5 font-Roboto">To be catalyst for growth and Innovation in the IT industry.</p>
          </div>
          <div className="m-2">
            <h1 className="font-semibold font-Roboto text-2xl text-center">Our Values</h1>
            <p className="font-normal  text-center mt-5 font-Roboto">Integrity, Excellence, Collaboration and Continuous Learning.</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around space-x-2">
          <button
            className="missonbut my-5 w-36 h-9 rounded-3xl"
            
          >
            <p className="font-normal font-Roboto text-lg "> Explore Us </p>
          </button>
          <button
            className="missonbut my-5 w-36 h-9 rounded-3xl"
            
          >
            <p className="font-normal font-Roboto text-lg "> Our mentors </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ourmissons;
