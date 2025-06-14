"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Chat-app",
    description:
      `This is a secure, encryption-based chat web application for private, person-to-person messaging. It ensures
      only intended users can communicate and share media safely. Built with Node.js, Express.js, and React, it uses endto
      end encryption for complete privacy.`,
    tags: ["Node.JS", "Express.JS", "MongoDB", "React", "Next.JS", "MUI"],
  },
  {
    title: "Vismay 2025 Website",
    description:
      "Designed a modern landing page using Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Voice Agent",
    description:
      `Build a voice-driven application that automates interview scheduling by calling candidates, collecting key
      details, and booking appointments. The agent should conduct a conversational Q&A to gather candidate information
      and confirm slots. Use open-source frameworks for speech processing and dialogue management.`,
    tags: ["Node.JS", "Express.JS", "MySQL", "OpenAI", "React", "Docker", "Postman"],
  },
];

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-auto w-full max-w-4xl mx-auto px-4 text-center py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <h3>These are some of the projects I have worked on. Feel free to explore them to see my skills in action.</h3>

      <div className="relative flex items-center justify-center pt-4">
        <button
          onClick={prevProject}
          className="absolute left-0 z-10 bg-white border shadow-md rounded-full p-2 hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <div className="bg-white shadow-md rounded-2xl px-8 py-6 w-full max-w-md mx-6 transition duration-300 ease-in-out transform hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-2">{projects[current].title}</h3>
          <p className="text-gray-600 mb-4">{projects[current].description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {projects[current].tags.map((tag, index) => (
              <span
                key={index}
                className="bg-black text-white text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={nextProject}
          className="absolute right-0 z-10 bg-white border shadow-md rounded-full p-2 hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;

