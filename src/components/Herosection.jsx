import React from "react";
import Logo from '../images/Logo.png'

function Herosection() {
  return (
    <div className="Herosection flex flex-row items-center justify-around mt-80   text-white">
      <div
        className="flex flex-col py-3 justify-center"
        style={{ width: "531px", height: "383px" }}
      >
        <div>
          <h1
            className="font-bold  mt-2 font-Roboto "
            style={{ fontSize: "40PX", lineHeight: "46.88px" }}
          >
            Empowering IT students to reach their potential
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="font-normal mt-2 font-Archivo">
            ABIT is a dynamic departmental committee that provides a platform
            for IT students to develop technical and soft skills, enabling them
            to excel in their chosen fields.
          </h4>
        </div>
        <div>
          <button
            className="my-5 w-36 h-9 rounded-3xl"
            style={{ backgroundColor: "#009EFF" }}
          >
            <p className="font-normal font-Archivo text-lg"> Learn More </p>
          </button>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ width: "531px", height: "383px" }}
      >
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Herosection;
