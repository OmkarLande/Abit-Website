import React from "react";
import Logo2 from '../images/Logo2.png';
import Logo1 from '../images/Logo3.png';
import '../index.css';

function Herosection() {
  return (
    <div className="flex items-center justify-center text-white px-4 mt-[110px] md:mt-[170px]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between md:w-[80%]">
        <div className="flex flex-col items-center md:items-start justify-center py-3 space-y-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="mt-2 text-3xl font-bold leading-[46.88px] tracking-[0%] font-Roboto sm:text-5xl md:w-[85%] w-[80%]">
            Empowering IT students to reach their potential
          </h1>
          <h4 className="mt-2 font-normal text-[18px] leading-[22px] tracking-[1.5%] font-Roboto">
            ABIT is a dynamic departmental committee that provides a platform for IT students to develop technical and soft skills, enabling them to excel in their chosen fields.
          </h4>
          <button className="button my-5 w-[150px] h-[35px] rounded-[24px] border border-solid border-[#009EFF] flex items-center justify-center gap-[8px] px-[24px] py-[12px] ">
            <p className="text-lg font-normal font-Roboto"> Learn More </p>
          </button>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-[45%] h-[383px] ml-auto">
          <img src={Logo1} alt="Logo" className="object-contain w-[68%] h-[68%] block md:hidden" />
          <img src={Logo2} alt="Logo" className="object-contain w-[95%] h-[95%] hidden md:block" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;

