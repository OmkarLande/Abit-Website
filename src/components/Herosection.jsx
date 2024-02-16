import React from "react";
import Logo from '../images/Logo.png'
import '../index.css';

function Herosection() {
  return (
    <div className="Herosection flex flex-col md:flex-row items-center justify-center mt-[80px]  text-white">
      <div
        className="flex flex-col py-3 items-center sm:items-start justify-center space-y-3"
        style={{ minWidth:"356px", maxWidth: "531px", height: "383px" }}
      >
        <div>
          <h1
            className="font-bold  mt-2 font-Roboto text-center sm:text-left text-3xl sm:text-5xl"
            style={{ minWidth:"356px", maxWidth: "531px", lineHeight: "46.88px" }}
          >
            Empowering IT students to reach their potential
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="font-light mt-2 font-Roboto text-center sm:text-left">
            ABIT is a dynamic departmental committee that provides a platform
            for IT students to develop technical and soft skills, enabling them
            to excel in their chosen fields.
          </h4>
        </div>
        <div className="flex items-start md:items-center">
          <button
            className="my-5 w-36 h-9 rounded-3xl"
            
          >
            <p className="font-normal font-Roboto text-lg "> Learn More </p>
          </button>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{  minWidth:"356px", width: "531px", height: "383px" }}
      >
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Herosection;
