import React from "react";
import download from "../assets/download.png";
import ps from "../assets/ps.png";
import gform from "../assets/gform.png";
import apple from "../assets/apple.png";

const DownloadSection = () => {
  return (
    <div
      className="grid min-h-screen place-items-center"
      style={{
        backgroundImage: `url(${download})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Konten lain bisa ditambahkan di sini */}
      <div className="grid grid-cols-2 ">
        <div className=""></div>
        <div className="md:me-20  text-white -ml-30 md:ml-0">
          <div className="font-bold text-3xl md:text-4xl">
            Download dan Review sekarang juga
          </div>
          <div className="md:text-2xl text-lg">
            Bantu Trans Semarang menuju lebih baik
          </div>
          <div className="grid grid-cols-3 gap-2  md:gap-4 pt-2 md:me-5">
            {/* Play Store */}
            <a href="https://play.google.com/store/apps/details?id=ngi.brtsemarang.apppublic&hl=id">
              <div className="flex items-center bg-white text-black text-xs p-2 rounded-lg shadow-md hover:bg-red-100">
                <img
                  src={ps}
                  alt="Play Store Logo"
                  className="md:w-12 md:h-12 w-7 h-7 object-contain !important"

                />
                <span className="md:ml-4 md:text-sm font-semibold">
                  Available on <span className="font-bold">Play Store</span>
                </span>
              </div>
            </a>
            <a href="https://apps.apple.com/id/app/trans-semarang/id1460565652">
              <div className="flex items-center bg-white text-black text-xs p-2 rounded-lg shadow-md hover:bg-red-100">
                <img
                  src={apple}
                  alt="Play Store Logo"
                  className="md:w-12 md:h-12 w-7 h-7 object-contain "
                />
                <span className="md:ml-4 md:text-sm font-semibold">
                  Available on <span className="font-bold">App Store</span>
                </span>
              </div>
            </a>
            <a href="https://forms.gle/HLwf6hASDt3n9cXi9">
              <div className="flex items-center bg-white text-black text-xs p-2 rounded-lg shadow-md hover:bg-red-100 me-1 md:me-0">
                <img
                  src={gform}
                  alt="Play Store Logo"
                  className="md:w-12 md:h-12 w-7 h-7 object-contain "
                />
                <span className="md:ml-4 md:text-sm font-semibold">
                  Click for <span className="font-bold">Review </span>
                  and get <span className="font-bold">Reward</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
