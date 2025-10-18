import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">Youssef Ounana</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-400 transition">Accueil</a>
          <a href="#about" className="hover:text-blue-400 transition">À propos</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projets</a>
          <a href="#skills" className="hover:text-blue-400 transition">Compétences</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          <a href="#hero" className="block hover:text-blue-400">Accueil</a>
          <a href="#about" className="block hover:text-blue-400">À propos</a>
          <a href="#projects" className="block hover:text-blue-400">Projets</a>
          <a href="#skills" className="block hover:text-blue-400">Compétences</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
