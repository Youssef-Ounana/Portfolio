import { useEffect } from 'react';

const SITE_URL = 'https://youssefounana.vercel.app';

// Met à jour le titre, la description et l'URL canonique de la page courante.
// (Les aperçus LinkedIn lisent index.html ; ceci sert surtout à Google et à l'onglet du navigateur.)
const setMeta = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
};

const usePageMeta = ({ title, description, path = '/' }) => {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`);
  }, [title, description, path]);
};

export default usePageMeta;
