import "./App.css";
import About from "./components/About";
import HrLogo from "./components/HrLogo";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto bg-red-400  p-8 text-center min-w-full">
        <p className="text-6xl text-gray-700 font-bold mb-5">Superior</p>
        <p className="text-gray-200 font-semibold text-lg">
          Tailwind in action
        </p>
      </div>
      <div>
        <About />
        <HrLogo />
        <Movies />
      </div>
    </div>
  );
}

export default App;
