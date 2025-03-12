import React, { useState } from "react";
import semuabus from "../assets/semuabus.png";
import inforute from "../assets/inforute.png";

import "./Fitur.css";

const Fitur = () => {
  const [activeTab, setActiveTab] = useState("Semua Bus");

  const tabs = ["Semua Bus", "Info Rute", "Nearby Bus", "Beli Tiket"];

  return (
    <>
      <div className="tab-container md:mx-96">
        <div className="tab-buttons">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Semua Bus" && (
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-white">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={semuabus}
                alt="Peta Trans Semarang"
                className="max-w-xs md:max-w-md rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Seluruh bus{" "}
                <span className="text-red-600 font-bold">Trans Semarang</span>{" "}
                dapat dilihat secara detail pada fitur
                <span className="italic text-red-600"> Semua Bus</span>
              </h2>
            </div>
          </div>
        )}
        {activeTab === "Info Rute" && (
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-white">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={inforute}
                alt="Peta Trans Semarang"
                className="max-w-xs md:max-w-md rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Seluruh bus{" "}
                <span className="text-red-600 font-bold">Trans Semarang</span>{" "}
                dapat dilihat secara detail pada fitur
                <span className="italic text-red-600"> Semua Bus</span>
              </h2>
            </div>
          </div>
        )}
        ,
      </div>
    </>
  );
};

export default Fitur;
