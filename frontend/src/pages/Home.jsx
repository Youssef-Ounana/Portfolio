import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    document.title = 'Youssef Ounana — Développeur Full-Stack & DevOps';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
