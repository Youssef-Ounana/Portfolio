import profileImg from '../assets/profile.png';
import React, { useState, useEffect } from 'react';


const Hero = () => {

  
  const fullText = 'Youssef';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 150); // vitesse de frappe
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="hero"
      className="pt-20 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6"
    >
      {/* Texte à gauche */}
      <div className="md:w-1/2 p-3 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Salut, moi c’est{' '}
          <span className="text-blue-500">
            {displayedText}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 mx-auto md:mx-0">
          Développeur Full-Stack. Bienvenue sur mon portfolio !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
          >
            Voir mes projets
          </a>
          <a
            href="/OUNANA-YOUSSEF-CV.pdf"
            className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="min-w-sm md:max-w-md object-cover rounded-full shadow-lg animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Hero;
