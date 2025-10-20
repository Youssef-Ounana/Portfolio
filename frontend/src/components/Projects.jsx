import React, { useState } from 'react';
import projects from '../data/projects';

const allTechs = [...new Set(projects.flatMap(p => p.tech))];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  const filtered = selectedTech === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(selectedTech));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-500">Mes projets</h2>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedTech('All')}
            className={`px-4 py-2 rounded-md border ${selectedTech === 'All' ? 'bg-blue-500 text-white' : 'text-blue-400 border-blue-400'}`}
          >
            Tous
          </button>
          {allTechs.map((tech, i) => (
            <button
              key={i}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-md border ${selectedTech === tech ? 'bg-blue-500 text-white' : 'text-blue-400 border-blue-400'}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Cartes projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">Tech: {project.tech.join(', ')}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" className="text-blue-400 hover:underline">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
