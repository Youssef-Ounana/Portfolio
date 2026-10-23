import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.webp';

const FULL_NAME = 'Youssef';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayedText(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6"
    >
      <div className="md:w-1/2 p-3 text-center md:text-left mb-10 md:mb-0">
        <span className="inline-block mb-4 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-sm text-green-400">
          Disponible en alternance · 4 j entreprise / 1 j école
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bonjour, je suis{' '}
          <span className="text-blue-500">
            {displayedText}
            <span className="animate-blink">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 mx-auto md:mx-0">
          Développeur Full-Stack &amp; DevOps, en Mastère Ingénierie Avancée du Logiciel.
          Je recherche une alternance en développement, DevOps ou cybersécurité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
            Voir mes projets
          </a>
          <a
            href="/OUNANA-YOUSSEF-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={profileImg}
          alt="Photo de Youssef Ounana"
          className="w-64 md:w-96 aspect-square object-cover rounded-full shadow-lg animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Hero;
