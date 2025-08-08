import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiDocker } from 'react-icons/si';

function SkillPage() {
  return (
    <section className="min-h-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 bg-gray-800 text-black py-20">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">My Skills</h2>

        <p className="text-white max-w-2xl mx-auto mb-10 text-sm md:text-base">
          I specialize in building modern web applications using the latest technologies. Here are the tools and frameworks I work with:
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-600 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-600 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-yellow-500 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-cyan-500 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-black text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-700 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-red-500 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-600 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-emerald-50 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-green-700 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-blue-800 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiDocker className="text-blue-400 text-4xl" />
            <span className="mt-2 text-sm text-amber-50">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillPage;
