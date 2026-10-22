import React from 'react';

const facts = [
  { label: 'Formation', value: 'Mastère Ingénierie Avancée du Logiciel — ISCOD' },
  { label: 'Diplôme', value: 'Licence Informatique — Université d’Avignon' },
  { label: 'Rythme', value: '4 jours en entreprise / 1 jour en formation' },
  { label: 'Mobilité', value: 'Basé à Avignon, mobile partout en France' },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500 text-center">À propos</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Diplômé d’une licence en informatique, je développe des applications web et mobiles de bout en bout :
          interfaces React, API Node.js, bases de données, conteneurisation Docker et pipelines CI/CD.
          Lors de mes stages chez Fedaso (front-end React/Tailwind) et CMGP (full-stack, CI/CD, Docker),
          j’ai appris à livrer du code propre dans une équipe.
        </p>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          Je m’oriente aujourd’hui vers un double profil développement logiciel et DevOps / cybersécurité.
          En parallèle de mes études, je suis chef d’équipe inventaire chez RGIS depuis 2021 : organisation,
          rigueur et gestion d’équipe sur le terrain.
        </p>

        <dl className="mt-10 grid sm:grid-cols-2 gap-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-lg bg-gray-900 p-4 border border-gray-800">
              <dt className="text-sm text-gray-400">{fact.label}</dt>
              <dd className="mt-1 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
