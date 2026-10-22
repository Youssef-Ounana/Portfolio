import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="pt-32 pb-20 px-6 text-center">
    <p className="text-6xl font-bold text-blue-500">404</p>
    <h1 className="mt-4 text-2xl font-semibold">Page introuvable</h1>
    <p className="mt-2 text-gray-400">Cette page n’existe pas ou a été déplacée.</p>
    <Link to="/" className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition">
      Retour à l’accueil
    </Link>
  </section>
);

export default NotFound;
