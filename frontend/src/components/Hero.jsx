import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <img src="" alt="Photo" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Salut, moi c’est <span className="text-blue-500">Youssef</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-6">
        Développeur Full-Stack. Bienvenue sur mon portfolio !
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
        >
          Voir mes projets
        </a>
        <a
          href="/assets/OUNANA-YOUSSEF-CV.pdf"
          className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
