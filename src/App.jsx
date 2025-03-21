import React from "react";
import ProjectSlider from "./components/ProjectSlider";
import ParticlesBackground from "./components/ParticlesBackground";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-yellow-200 flex relative">
      {/* Background Animation */}
      <ParticlesBackground />

      {/* Sidebar */}
      <aside className="w-1/4 bg-white/20 backdrop-blur-md p-6 flex flex-col items-center rounded-lg shadow-lg m-6">
        {/* Profile Image */}
        <img src="/assets/profilepic.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-lg glow-border" />

        {/* Navigation */}
        <nav className="mt-8 space-y-4 text-lg font-medium text-white">
          <a href="#home" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            🏠 <span>Home</span>
          </a>
          <a href="#about" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            ℹ️ <span>About</span>
          </a>
          <a href="#projects" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            📖 <span>Projects</span>
          </a>
          <a href="#contact" className="flex items-center space-x-2 hover:text-yellow-200 transition">
            📞 <span>Contact</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center w-3/4">
        {/* Hero Section */}
        <div className="bg-white/30 backdrop-blur-md p-10 rounded-lg shadow-xl text-center w-3/4 mt-16">
          <h1 className="text-4xl font-bold text-deepNavy">Maleeha Ali</h1>
          <h2 className="text-2xl text-sunsetPink mt-2">Web Developer & Creative Designer</h2>
          <p className="text-lg text-gray-700 mt-4">
            Passionate about building creative and interactive applications.
          </p>
          <button className="mt-6 px-6 py-2 bg-sunsetPink text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition">
            View Resume
          </button>
        </div>

        {/* Social Links with Images */}
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/maleehali" className="glow-on-hover">
            <img src="/assets/icons/github.png" alt="GitHub" className="w-10 h-10 float-on-hover" />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="glow-on-hover">
            <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10 float-on-hover" />
          </a>
          <a href="https://instagram.com/maleehali" className="glow-on-hover">
            <img src="/assets/icons/instagram.png" alt="Instagram" className="w-10 h-10 float-on-hover" />
          </a>
          <a href="https://pinterest.com/yourusername" className="glow-on-hover">
            <img src="/assets/icons/pinterest.png" alt="Pinterest" className="w-10 h-10 float-on-hover" />
          </a>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-12 p-6 bg-white/30 rounded-lg shadow-lg text-center w-3/4 mx-auto">
          <h2 className="text-2xl font-semibold text-sunsetPink">✨ Fun Facts About Me ✨</h2>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>💄 Makeup artist & floral designer</li>
            <li>📚 Obsessed with books & storytelling</li>
            <li>🌎 Traveling to Puerto Rico soon!</li>
            <li>🐱 Cat mom to **Cheeto**!</li>
          </ul>
        </div>

        {/* Project Slider */}
        <div id="projects" className="mt-12 w-full flex justify-center">
          <ProjectSlider />
        </div>

        {/* Wave Animation at Bottom */}
        <div className="relative mt-12">
          <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFD1DC" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,138.7C672,160,768,160,864,176C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64V320H0Z"></path>
          </svg>
        </div>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default App;
