import React from "react";

const AboutMe = () => {
  return (
    <section className="p-10 text-center text-gray-800">
      <h2 className="text-4xl font-bold text-sunsetPink mb-6">✨ About Me ✨</h2>

      {/* Profile Bio Box */}
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/40">
        <p className="text-lg leading-relaxed mb-4">
          Hey! I’m <span className="font-bold text-pink-600">Maleeha</span>, a web developer & creative designer who’s passionate
          about building magical, meaningful digital experiences. ✨ Whether it’s code or color palettes,
          I love combining creativity and functionality to tell beautiful stories through design.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I’m also a makeup artist, a floral designer, and a big-time bookworm 📚. You’ll often find me
          sketching layouts, arranging flowers, or escaping into fictional worlds.
        </p>
        <p className="text-lg leading-relaxed">
          Let’s create something beautiful together 🤍
        </p>
      </div>

      {/* Fun Emojis Row */}
      <div className="flex justify-center gap-6 mt-10 text-3xl">
        💄🌸📚🌍🎨💻🐱✨
      </div>
    </section>
  );
};

export default AboutMe;
