import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ProjectSlider from "./components/ProjectSlider";
import ParticlesBackground from "./components/ParticlesBackground";
import MusicPlayer from "./components/MusicPlayer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-yellow-200 flex relative">
      {/* Background Animation */}
      <ParticlesBackground />

      {/* Sidebar */}
      <aside className="w-1/4 bg-white/20 backdrop-blur-md p-6 flex flex-col items-center rounded-lg shadow-lg m-6">
        {/* Profile Image */}
        <img
          src="src/assets/profilepic.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg glow-border"
        />

        {/* Navigation */}
        <nav className="mt-8 space-y-4 text-lg font-medium text-white">
          <NavLink to="/" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            🏠 <span>About</span>
          </NavLink>
          <NavLink to="/projects" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            📖 <span>Projects</span>
          </NavLink>
          <NavLink to="/contact" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            📞 <span>Contact</span>
          </NavLink>
          <NavLink to="/resume" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            📄 <span>Resume</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-col justify-center items-center w-3/4">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default App;
