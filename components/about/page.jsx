import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-10 bg-white text-black">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug break-words">
          Hello I’m <span className="font-bold">Narendrakumar Kumawat.</span>
          <br />
          <span className="font-bold">Full Stack</span>{" "}
          <span className="font-bold bg-black text-white px-2 py-1 rounded">
            Developer
          </span>
          <br />
          Based In <span className="font-bold">India.</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base px-2 md:px-0">
          I am a dedicated professional with skills in Python, Django, FastAPI, RESTful APIs,
          GraphQL, Node.js, Express.js, MongoDB, and PostgreSQL. I enjoy solving complex problems,
          designing efficient algorithms, and building user-friendly solutions. With experience in
          Software Development projects, I thrive in team environments and embrace the latest tech.
        </p>
        
        <div className="flex justify-center md:justify-start items-center gap-4 pt-2">
          <a href="https://github.com/narendrakumar9867" className="bg-black text-white p-2 rounded">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/narendrakumar-kumawat-474647257/" className="border p-2 rounded">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/Narendra9867043" className="border p-2 rounded">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="border p-2 rounded">
            <FaDiscord size={20} />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
          <Image
            src="/homepage.png"
            alt="Narendrakumar Kumawat"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
