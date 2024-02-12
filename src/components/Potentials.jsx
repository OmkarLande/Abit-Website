import React from "react";

const Potentials = () => {
  return (
    <div className="Ourmissons flex flex-col  sm:flex-row items-center justify-center mt-[80px]  text-white">
      <div
        className="flex flex-col py-3 items-center  justify-center space-y-3"
        style={{ minWidth: "356px", maxWidth: "531px", height: "383px" }}
      >
        <div>
          <h1
            className="font-semibold text-center mt-2 font-Roboto   text-xl sm:text-2xl"
            style={{
              minWidth: "356px",
              maxWidth: "525px",
              lineHeight: "46.88px",
            }}
          >
            Unlock Your Potential With ABIT’s Development Opportunities
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="font-light mt-2 font-Roboto text-center ">
            ABIT arranges a wide range of programs for developing technical and
            soft skills, empowering you to excel in various fields.
          </h4>
        </div>
        <div className="flex items-start md:items-center">
          <button className="my-5 w-36 h-9 rounded-3xl">
            <p className="font-normal font-Roboto text-lg "> Our Events</p>
          </button>
        </div>
      </div>
      <div
        className="flex flex-col py-3 items-center justify-center space-y-3"
        style={{ minWidth: "356px", maxWidth: "531px", height: "383px" }}
      >
        <div>
          <h1
            className="font-semibold text-center mt-2 font-Roboto   text-xl sm:text-2xl"
            style={{
              minWidth: "356px",
              maxWidth: "525px",
              lineHeight: "46.88px",
            }}
          >
            Unleashing the Potential of Budding Technocrats
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="font-light mt-2 font-Roboto text-center ">
            ABIT offers a supportive community and resources to help you grow
            and excel in your chosen field.
          </h4>
              </div>
              <div className="flex items-start md:items-center">
          <button
            className="my-5 w-36 h-9 rounded-3xl"
            
          >
            <p className="font-normal font-Roboto text-lg "> Community </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Potentials;
