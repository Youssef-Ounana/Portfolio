import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Youssef.dev — Tous droits réservés.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
        <a href="https://linkedin.com/in/tonpseudo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
