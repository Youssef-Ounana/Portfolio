import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// hash: section de la page d'accueil (fonctionne aussi depuis une page projet)
const links = [
  { hash: '#hero', label: 'Accueil' },
  { hash: '#about', label: 'À propos' },
  { hash: '#experience', label: 'Parcours' },
  { hash: '#projects', label: 'Projets' },
  { hash: '#skills', label: 'Compétences' },
  { hash: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-500">Youssef Ounana</Link>

        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.hash} to={{ pathname: '/', hash: link.hash }} className="hover:text-blue-400 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              onClick={() => setIsOpen(false)}
              className="block py-1 hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
