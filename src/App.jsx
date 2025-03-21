import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './index.css';

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between p-5 bg-gray-900 shadow-lg fixed top-0">
        <h1 className="text-2xl font-bold">My Portfoli - Maleeha C0des</h1>
        <div className="space-x-4">
          <a href="#about" className="btn btn-blue">About</a>
          <a href="#portfolio" className="btn btn-blue">Portfolio</a>
          <a href="#contact" className="btn btn-blue">Contact</a>  {/* Updated */}
          </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center mt-20">
        <h2 className="text-4xl font-extrabold animate-fade-in">Hey, I'm Maleeha! 👋</h2>
        <p className="mt-2 text-lg text-gray-300">Web Developer & Creative Designer</p>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-300 mt-3">
          I love building interactive and creative applications using modern web technologies.
        </p>
      </section>

      {/* Contact Section (Placed Between About & Projects) */}
<section id="contact" className="p-10 bg-gray-900 text-white text-center">
  <h2 className="text-3xl font-bold">Contact Me</h2>
  <p className="text-gray-400 mt-2">Feel free to reach out to me through the following platforms:</p>

  <div className="mt-6 space-y-3">
    {/* Email */}
    <div className="flex items-center justify-center space-x-3">
      <span className="text-blue-400">📧</span>
      <a href="mailto:your.email@example.com" className="hover:underline text-blue-400">your.email@example.com</a>
    </div>

    {/* Phone Number */}
    <div className="flex items-center justify-center space-x-3">
      <span className="text-green-400">📞</span>
      <a href="tel:+1234567890" className="hover:underline text-green-400">+1 (234) 567-890</a>
    </div>

    {/* Location */}
    <div className="flex items-center justify-center space-x-3">
      <span className="text-red-400">📍</span>
      <p>Toronto, Canada</p>
    </div>

    {/* Social Media */}
    <div className="flex justify-center space-x-6 mt-4">
      <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">
        <i className="fab fa-github text-2xl"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:text-white">
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
      <a href="https://twitter.com/yourusername" className="text-blue-400 hover:text-white">
        <i className="fab fa-twitter text-2xl"></i>
      </a>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400">A cool project description goes here.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400">Another cool project description.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400">Yet another cool project here.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 4</h3>
            <p className="text-gray-400">Yet another cool project here.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-5 bg-gray-900 w-full text-center mt-10">
        <p className="text-gray-400">© 2025 My Portfolio</p>
        <div className="mt-2 space-x-3">
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
          <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:underline">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
