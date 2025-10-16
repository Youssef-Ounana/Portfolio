import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">À propos de moi</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Je m'appelle Youssef, développeur front-end passionné basé en France 🇫🇷. J'adore créer des interfaces modernes, fluides et accessibles avec React, Tailwind CSS et les dernières technologies du web.
        </p>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          Mon objectif est de construire des expériences utilisateur élégantes et performantes. Curieux et motivé, je suis toujours en quête de nouveaux défis pour progresser et innover.
        </p>
      </div>
    </section>
  );
};

export default About;
