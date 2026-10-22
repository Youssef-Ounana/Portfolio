import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects, { getProjectBySlug } from '../data/projects';
import NotFound from './NotFound';

const Section = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold text-blue-400 mb-4">{title}</h2>
    {children}
  </section>
);

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — Youssef Ounana`;
  }, [project]);

  if (!project) return <NotFound />;

  // Projet suivant (revient au premier après le dernier)
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to={{ pathname: '/', hash: '#projects' }} className="text-sm text-gray-400 hover:text-white">
          ← Tous les projets
        </Link>

        {/* En-tête */}
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            {project.status === 'en cours' && (
              <span className="text-xs rounded-full bg-yellow-500/15 text-yellow-400 px-2 py-0.5">En cours</span>
            )}
          </div>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">{project.description}</p>

          <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            {project.team && (
              <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
                <dt className="text-gray-400">Cadre</dt>
                <dd className="mt-1 font-medium">{project.team}</dd>
              </div>
            )}
            {project.role && (
              <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
                <dt className="text-gray-400">Mon rôle</dt>
                <dd className="mt-1 font-medium">{project.role}</dd>
              </div>
            )}
          </dl>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md transition">
                  Démo en ligne
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-white px-5 py-2 rounded-md transition">
                  Code source
                </a>
              )}
            </div>
          )}
        </header>

        {project.image && (
          <img src={project.image} alt={`Capture d’écran de ${project.title}`}
            className="mt-10 w-full rounded-lg border border-gray-800" />
        )}

        {project.problem && (
          <Section title="Le problème">
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </Section>
        )}

        {project.features?.length > 0 && (
          <Section title="Fonctionnalités">
            <ul className="space-y-2 text-gray-300">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-blue-400" aria-hidden="true">▹</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.tech.length > 0 && (
          <Section title="Stack technique">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="text-sm rounded bg-gray-800 text-gray-200 px-3 py-1">{t}</li>
              ))}
            </ul>
          </Section>
        )}

        {project.challenges?.length > 0 && (
          <Section title="Difficultés résolues">
            <div className="space-y-4">
              {project.challenges.map((c) => (
                <div key={c.title} className="rounded-lg bg-gray-900 border border-gray-800 p-5">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm leading-relaxed">{c.solution}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {project.learnings && (
          <Section title="Ce que j’ai appris">
            <p className="text-gray-300 leading-relaxed">{project.learnings}</p>
          </Section>
        )}

        {/* Pied de page du projet */}
        <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-4">
          <Link to={{ pathname: '/', hash: '#contact' }} className="text-blue-400 hover:underline">
            Ce projet vous intéresse ? Contactez-moi
          </Link>
          <Link to={`/projets/${next.slug}`} className="text-gray-300 hover:text-white">
            Projet suivant : {next.title} →
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectPage;
