import logo from "../../src/assets/logo trans semarang.png";
const HomeSection = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-red-700 font-bold text-xl">
          <img src={logo} alt="Hero Image" className="mr-2 h-8 w-8"/>
          <a
            href="https://transsemarang.semarangkota.go.id/"
            className="hover:underline"
          >
            Trans Semarang
          </a>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=ngi.brtsemarang.apppublic&hl=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-red-700 text-white font-bold rounded-4xl cursor-pointer hover:bg-red-600">
              Download App
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default HomeSection;
