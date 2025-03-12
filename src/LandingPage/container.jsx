import jumbotron from "../assets/informasi.png";
import Fitur from "./Fitur";
import DownloadSection from "./Download";

const Container = () => {
  return (
    <div className="container mx-auto rounded-2xl shadow-md p-6 ">
      <div className="grid md:grid-cols-2 items-center py-8 max-w-screen-xl mx-auto gap-8  mb-20">
        {/* Konten Teks */}
        <div>
          <h2 className="mb-4 text-3xl me-20 md:text-4xl font-extrabold text-gray-900">
            Semua kebutuhanmu tentang{" "}
            <span className="text-red-700">Trans Semarang</span> ada dalam satu
            genggaman
          </h2>
          <p className="mb-6 text-lg font-medium text-gray-700">
            Dapatkan informasi terkini dan layanan terbaik hanya dalam satu
            aplikasi.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Mulai Sekarang
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        {/* Gambar */}
        <div className="flex justify-center ">
          <img src={jumbotron} alt="Hero Image" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Komponen Fitur */}
      <Fitur />
      <DownloadSection />
    </div>
  );
};

export default Container;
