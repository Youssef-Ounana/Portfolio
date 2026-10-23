import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  usePageMeta({
    title: 'Youssef Ounana — Développeur Full-Stack & DevOps',
    description:
      "Portfolio de Youssef Ounana, développeur Full-Stack & DevOps en recherche d'alternance (Mastère Ingénierie Avancée du Logiciel, ISCOD 2026–2028).",
    path: '/',
  });

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
