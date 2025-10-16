import React from 'react';
import skills from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-500">Compétences</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
