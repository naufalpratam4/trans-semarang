import HomeSection from "./LandingPage/NavbarSection";
import Container from "./LandingPage/container";
import "./App.css";

function App() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
        rel="stylesheet"
      />
      <HomeSection />
      <Container />
      <div className="fixed bottom-4 right-4">
        <a href="https://forms.gle/gqLTJUnEfD3Yv8SF9" target="_blank">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center shadow-lg transition-colors duration-200 cursor-pointer">
            <span className="mr-2">Review Aplikasi Disini</span>+
          </button>
        </a>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </>
  );
}

export default App;
