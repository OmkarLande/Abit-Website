import React from "react";
import "../styles/flipcard.css"; // Import your CSS file with additional styles
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Flipcard = (props) => {
  const { name, image, position, quote, linkedin, mail } = props;

  const frontStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "50px",
  };

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="front" style={frontStyle}>
          <div className="frontcontent ">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-600">{position}</p>
          </div>
        </div>
        <div className="back">
          <p className="text-xl font-bold">{quote}</p>
          <div className="mt-10 flex flex-row space-x-2">
            <p className="icon ">
              <FaLinkedinIn  className="text-xl " />
              {linkedin}
            </p>
            <p className="icon">
              <MdOutlineMailOutline className=" text-xl " />
              {mail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
