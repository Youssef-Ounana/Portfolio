import React, { useState } from 'react';
import projects from '../data/projects';

const categories = ['Tous', ...new Set(projects.map((p) => p.category))];

const ProjectImage = ({ project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
    );
  }
  // Remplaçant tant qu'il n'y a pas de capture d'écran
  return (
    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-gray-900">
      <span className="text-3xl font-bold text-white/80">{project.title}</span>
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState('Tous');

  const filtered = selected === 'Tous' ? projects : projects.filter((p) => p.category === selected);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-500">Projets</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              aria-pressed={selected === cat}
              className={`px-4 py-2 rounded-md border transition ${
                selected === cat
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'text-blue-400 border-blue-400 hover:bg-blue-500/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/60 transition"
            >
              <ProjectImage project={project} />

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status === 'en cours' && (
                    <span className="shrink-0 text-xs rounded-full bg-yellow-500/15 text-yellow-400 px-2 py-0.5">
                      En cours
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <li key={t} className="text-xs rounded bg-gray-800 text-gray-300 px-2 py-1">
                      {t}
                    </li>
                  ))}
                </ul>

                {(project.github || project.demo) && (
                  <div className="mt-auto flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Code source
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Démo en ligne
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
