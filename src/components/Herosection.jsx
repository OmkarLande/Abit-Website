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


// import React from "react";
// import Logo2 from '../images/Logo2.png';
// import Logo1 from '../images/Logo1.svg';
// import '../index.css';

// function Herosection() {
//   return (
//     <div className="flex items-center justify-center text-white px-4 mt-[110px] md:mt-[170px]">
//       <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between md:w-[80%]">
//         <div className="flex flex-col items-center md:items-start justify-center py-3 space-y-9 text-center md:text-left w-full md:w-[50%]">
//           <div className="flex flex-col space-y-4">
//             <h1 className="mt-2 text-3xl font-bold leading-snug font-Roboto sm:text-5xl md:w-[85%] w-[100%]">
//               Empowering IT students to reach their potential
//             </h1>
//             <h4 className="text-[18px] font-Roboto font-normal leading-[22px] tracking-[1.5%]">
//               ABIT is a dynamic departmental committee that provides a platform for IT students to develop technical and soft skills, enabling them to excel in their
//               chosen fields.
//             </h4>
//           </div>      

//           <button className="w-[130px] h-[35px] rounded-[24px] px-[24px] bg-[#009EFF] hover:bg-[#007ACC] transition-colors">
//             <p className="text-sm font-normal font-Roboto">Learn More</p>
//           </button>
//         </div>
//         <div className="flex justify-end mt-8 md:mt-0 w-full md:w-[45%] h-[383px] ml-auto">
//           <img src={Logo1} alt="Logo" className="object-contain w-[95%] h-[95%] block md:hidden" />
//           <img src={Logo2} alt="Logo" className="object-contain w-[95%] h-[95%] hidden md:block" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herosection;




// export default Herosection;

// import React from "react";
// import Logo from '../images/Logo.png'
// import '../index.css';

// function Herosection() {
//   return (
//     <div className="Herosection flex flex-col md:flex-row items-center justify-center mt-[150px] text-white">
//       <div
//         className="flex flex-col items-center justify-center py-3 ml-5 space-y-3 sm:items-start"
//         style={{ minWidth: "356px", maxWidth: "531px", height: "383px" }}
//       >
//         <div>
//           <h1
//             className="mt-2 text-3xl font-bold text-center font-Roboto sm:text-left sm:text-5xl"
//             style={{ minWidth: "356px", maxWidth: "531px", lineHeight: "46.88px" }}
//           >
//             Empowering IT students to reach their potential
//           </h1>
//         </div>
//         <div style={{ fontSize: "18px", lineHeight: "22px" }}>
//           <h4 className="mt-2 font-light text-center font-Roboto sm:text-left">
//             ABIT is a dynamic departmental committee that provides a platform
//             for IT students to develop technical and soft skills, enabling them
//             to excel in their chosen fields.
//           </h4>
//         </div>
//         <div className="flex items-start md:items-center">
//           <button
//             className="my-5 w-36 h-9 rounded-3xl"
//             style={{ backgroundColor: "#009EFF" }}
//           >
//             <p className="text-lg font-normal font-Roboto "> Learn More </p>
//           </button>
//         </div>
//       </div>
//       <div
//         className="flex items-center justify-center"
//         style={{ minWidth: "250px", width: "531px", height: "383px" }}
//       >
//         <img src={Logo} alt="" />
//       </div>
//     </div>
//   );
// }

// export default Herosection;

// import React from "react";
// import Logo2 from "../images/Logo2.png";
// import Logo1 from "../images/Logo1.svg";
// import "../index.css";

// function Herosection() {
//   return (
//     <div className="flex items-center justify-center text-white px-4 mt-[110px] md:mt-[170px]">
//       <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between md:w-[80%]">
//         {/* Left Section: Text Content */}
//         <div className="flex flex-col items-center md:items-start justify-center py-3 space-y-3 text-center md:text-left w-full md:w-[50%]">
//           <h1 className="mt-2 text-3xl font-bold leading-[46.88px] font-Roboto sm:text-5xl md:w-[85%] w-[80%]">
//             Empowering IT students to reach their potential
//           </h1>
//           <h4 className="mt-2 text-[18px] font-Roboto font-normal leading-[22px] tracking-[1.5%]">
//             ABIT is a dynamic departmental committee that provides a platform for IT students to develop technical and soft skills, enabling them to excel in their
//             chosen fields.
//           </h4>

//           <button className="my-5 w-36 h-9 rounded-3xl bg-[#009EFF] hover:bg-[#007ACC] transition-colors">
//             <p className="text-lg font-normal font-Roboto">Learn More</p>
//           </button>
//         </div>

//         {/* Right Section: Responsive Images */}
//         <div className="flex justify-end mt-8 md:mt-0 w-full md:w-[45%] h-[383px] ml-auto">
//           {/* Logo1: Mobile */}
//           <img
//             src={Logo1}
//             alt="Logo Mobile"
//             className="object-contain w-[95%] h-[95%] block md:hidden"
//           />
//           {/* Logo2: PC */}
//           <img
//             src={Logo2}
//             alt="Logo Desktop"
//             className="object-contain w-[95%] h-[95%] hidden md:block"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herosection;


