import React from "react";

const Potentials = () => {
  return (
    <div className="Potentionals flex flex-col  md:flex-row items-center justify-center mt-[80px]  text-white p-3">
      <div
        className="flex flex-col items-center justify-center h-auto py-3 space-y-3 mb-7"
        style={{ minWidth: "356px", maxWidth: "531px"  }}
      >
        <div>
          <h1
            className="mt-2 text-xl font-semibold text-center md:leading-10 font-Roboto sm:text-2xl"
            style={{
              minWidth: "356px",
              maxWidth: "525px"
            }}
          >
            Unlock Your Potential With ABIT’s Development Opportunities
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="mt-2 font-light text-center font-Roboto ">
            ABIT arranges a wide range of programs for developing technical and
            soft skills, empowering you to excel in various fields.
          </h4>
        </div>
        <div className="flex items-start md:items-center">
          <button className="m-1 text-white w-36 h-9 rounded-3xl secondary">
            <p className="text-lg font-normal font-Roboto "> Our Events</p>
          </button>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center h-auto py-3 mb-10 space-y-3"
        style={{ minWidth: "356px", maxWidth: "531px" }}
      >
        <div>
          <h1
            className="mt-2 text-xl font-semibold text-center font-Roboto sm:text-2xl md:leading-10"
            style={{
              minWidth: "356px",
              maxWidth: "525px",
            }}
          >
            Unleashing the Potential of Budding Technocrats
          </h1>
        </div>
        <div style={{ fontSize: "18px", lineHeight: "22px" }}>
          <h4 className="mt-2 font-light text-center font-Roboto ">
            ABIT offers a supportive community and resources to help you grow
            and excel in your chosen field.
          </h4>
              </div>
              <div className="flex items-start md:items-center">
          <button
            className="m-1 text-white w-36 h-9 rounded-3xl secondary"
            
          >
            <p className="text-lg font-normal font-Roboto "> Community </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Potentials;
