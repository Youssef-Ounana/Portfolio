import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// À chaque changement d'URL :
// - s'il y a un #ancre (ex: /#contact) → défile jusqu'à la section
// - sinon → remonte en haut de la page
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // On attend le rendu de la page avant de chercher l'élément
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
