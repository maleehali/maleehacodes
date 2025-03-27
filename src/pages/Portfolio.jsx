import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A fun and interactive application for productivity.",
      link: "https://yourproject1link.com",
    },
    {
      title: "Project 2",
      description: "A beautiful site built with creativity and purpose.",
      link: "https://yourproject2link.com",
    },
    {
      title: "Project 3",
      description: "A sleek and responsive web design project.",
      link: "https://yourproject3link.com",
    },
    {
      title: "Project 4",
      description: "A portfolio-worthy app showcasing strong React skills.",
      link: "https://yourproject4link.com",
    },
  ];

  return (
    <section className="w-full px-8 py-12">
      <h2 className="text-4xl font-bold text-sunsetPink text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-xl text-center border-2 border-pink-200 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-deepNavy mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-sunsetPink text-white rounded-full shadow-md hover:bg-pink-500 transition"
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
