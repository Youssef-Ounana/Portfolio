import React from 'react';
import skills from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-500">Compétences</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg bg-gray-900 border border-gray-800 p-5">
              <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 rounded-md bg-gray-800 px-3 py-2">
                    {skill.icon && <img src={skill.icon} alt="" loading="lazy" className="w-5 h-5" />}
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
