import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One goes here.",
    image: "https://via.placeholder.com/400x250", // Replace with actual image
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two goes here.",
    image: "https://via.placeholder.com/400x250",
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three goes here.",
    image: "https://via.placeholder.com/400x250",
    link: "https://github.com/yourusername/project3",
  },
];

const ProjectSlider = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="rounded-xl overflow-hidden"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition-all"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
