import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home"

import UWMedicine from "./projects/UWMedicine"
import BaseballClutch from "./projects/Baseballclutch";
import Climate from "./projects/climate";

import About from "./components/About";
import Resume from "./components/Resume";



const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased
      selection: bg-black-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/uwmedicine" element={<UWMedicine />} />
        <Route path="/projects/baseballclutch" element={<BaseballClutch />} />
        <Route path="/projects/climate" element={<Climate />} />
       </Routes>
       </div>
    </Router>
  );
};

export default App
