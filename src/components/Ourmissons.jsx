import React from "react";
import Logo from "../images/Logo.png";
import '../index.css';

function Ourmissons() {
 

  return (
    <div className="Ourmissons flex flex-col  md:flex-row items-center justify-center mt-[80px]  text-white p-3">
    
    <div className="flex flex-col py-3 items-center md:items-start justify-center text-center md:text-left space-y-3 w-full max-w-[531px]">
      <h1 className="mt-2 text-3xl font-bold leading-tight font-Roboto md:text-4xl md:leading-snug">
        Unleashing the Potential of Budding Technocrats
      </h1>
      <h4 className="mt-2 text-lg font-light leading-6 font-Roboto">
        ABIT (Association of Budding Information Technocrats) is dedicated to providing a platform for students to develop and enhance their technical and soft skills. Our mission is to nurture talented minds and cultivate diligent hearts, empowering students to excel in various fields.
      </h4>
    </div>
  
    <div className="flex flex-col items-center md:items-end md:translate-x-[50px] justify-center space-y-5 w-full max-w-[531px]">
     
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <div className="text-center md:text-center md:w-[35%] m-3"> 
            <h1 className="text-2xl font-semibold font-Roboto">Our mission</h1>
            <p className="mt-2 font-normal font-Roboto">To be catalyst for growth and Innovation in the IT industry.</p>
          </div>
          <div className="text-center md:text-center md:w-[40%] m-3">
            <h1 className="text-2xl font-semibold font-Roboto">Our Values</h1>
            <p className="mt-2 font-normal font-Roboto">Integrity, Excellence, Collaboration and Continuous Learning.</p>
          </div>
        </div>
  
      <div className="flex flex-row items-center justify-center w-full md:flex-row md:justify-center md:space-x-4 md:space-y-0">
        <button className="m-1 text-white bg-blue-500 button w-36 h-9 rounded-3xl">
          <p className="text-lg font-normal font-Roboto">Explore Us</p>
        </button>
        <button className="m-1 text-white w-36 h-9 rounded-3xl secondary">
          <p className="text-lg font-normal font-Roboto">Our Mentors</p>
        </button>
      </div>
    </div>
  </div>  
  

  );
}

export default Ourmissons;
