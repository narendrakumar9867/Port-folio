'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Backend Developer Intern',
    company: 'Hues Apply',
    duration: 'Feb 2025 - May 2025',
    description: `During this internship, I was part of the backend team, where my responsibilities included handling backend APIs,
    developing modules and managing database-related tasks. I worked on optimizing backend performance, ensuring
    efficient data handling and contributing to the overall architecture of the system.`,
  },
  {
    role: 'Machine Learning Intern',
    company: 'Suvidha Foundation',
    duration: 'Dec 2024 - Jan 2025',
    description:
      `As a Machine Learning intern, I worked with transformer models, implemented architectures for NLP and sequence 
      tasks, and analyzed ML research papers to stay updated on advancements and enhance model performance.`,
  },
  {
    role: 'Open Source Contributor',
    company: 'Open Source Community',
    duration: 'Dec 2024 - Present',
    description:
      `Contributed to Node.js projects by implementing core features, optimizing performance, and writing tests and
      documentation. Skilled in web development (Node.js, Express.js, React) and actively engaged in the open-source
      community.`,
  },
  {
    role: 'Developer Team Lead',
    company: 'DYPIEMR, Akurdi, Pune',
    duration: 'May 2024 -Dec2024',
    description:
      ` As the Lead Backend Developer in my college, I led a team in building scalable web applications using Django and
      FastAPI, developing RESTful APIs and optimizing database performance. I also managed deployments with Docker,
      automated CI/CD pipelines, and mentored junior developers.`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function ExperiencePage() {
  return (
    <div className="min-h-auto px-6 py-20 bg-gray-800 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-white"
      >
        Experience
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 max-w-3xl mx-auto"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{exp.role}</h2>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ExperiencePage;
