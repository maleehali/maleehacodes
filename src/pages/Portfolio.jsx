import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Note Taker",
      image: "/notetaker.png",
      description: "A fun and interactive application for productivity.",
      link: "https://notetaker-tjv1.onrender.com/notes",
    },
    {
      title: "Weather Whiz",
      image: "/weatherwhiz.png",
      description: "A beautiful site built with creativity and purpose.",
      link: "https://maleehali.github.io/weatherwhiz/",
    },
    {
      title: "Echoes & Entries",
      image: "/e&e.png",
      description: "A sleek and responsive web design project.",
      link: "https://maleehali.github.io/echoesandentries/",
    },
    {
      title: "Regex Tutorial",
      image: "/regex.png",
      description: "A portfolio-worthy app showcasing strong React skills.",
      link: "https://gist.github.com/maleehali/a85e02e360f79c75daf1cab68f2a1be1",
    },
  ];

  return (
    <section className="w-full px-8 py-12">
      <h2 className="text-4xl font-bold text-sunsetPink text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-xl transition w-72 text-center"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="rounded-md mb-4 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-deepNavy mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-sunsetPink text-white rounded-full shadow-md hover:bg-pink-500 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
