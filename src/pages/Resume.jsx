import React from "react";

const Resume = () => {
  return (
    <div className="p-10 text-center text-gray-800">
      <h2 className="text-3xl font-bold text-sunsetPink mb-6">📄 Resume</h2>

      {/* ✅ Download Button */}
      <a
  href="/Maleeha-Ali-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="z-10 mt-6 inline-block px-6 py-2 bg-sunsetPink text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition cursor-pointer"
>
  Download Resume
</a>


      {/* 💻 Proficiencies Box */}
      <div className="mt-10 max-w-xl mx-auto bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-sunsetPink mb-4">💻 Proficiencies</h3>
        <ul className="grid grid-cols-2 gap-4 text-left text-lg text-gray-700">
          <li>🌐 HTML5</li>
          <li>🎨 CSS3 / Tailwind CSS</li>
          <li>⚛️ JavaScript / ES6+</li>
          <li>📦 React / Vite</li>
          <li>🔧 Git & GitHub</li>
          <li>🌐 APIs / REST</li>
          <li>🗃️ MongoDB / Express</li>
          <li>🔐 JWT / Auth Basics</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
