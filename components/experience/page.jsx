'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'Hues Apply',
    duration: 'Jun 2025 - Sep 2025',
    description: `I'm working as a SDE intern, contributing to the development and maintenance of server-side logic.`,
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Hues Apply',
    duration: 'Mar 2025 - May 2025',
    description: `I'm working as a Full Stack Developer intern, My role involves building efficient APIs, managing databases, and ensuring seamless integration with frontend services.`,
  },
  {
    role: 'Backend Developer Intern',
    company: 'Hues Apply',
    duration: 'Feb 2025 - Mar 2025',
    description: `I'm working as a Full Stack Developer intern, My role involves building efficient APIs, managing databases, and ensuring seamless integration with frontend services.`,
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
    role: 'Campus Ambassadors Internship',
    company: 'E-cell, IIT Bombay',
    duration: 'Jul 2024 - Dec 2024',
    description:
      `As a Campus Ambassador, I collaborated with IIT Bombay to promote entrepreneurship and connect students to opportunities.`,
  },
  {
    role: 'Event Deputy Lead of DimensionsForge',
    company: 'Paradox, IIT Madras',
    duration: 'May 2024 - Jun 2024',
    description:
      `At IIT Madras, I collaborated with a startup team and served as the Event Deputy Lead for DimensionsForge.`,
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
