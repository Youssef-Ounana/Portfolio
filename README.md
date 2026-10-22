# Portfolio — Youssef Ounana

![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Mon portfolio de développeur Full-Stack & DevOps : projets, parcours, compétences et formulaire de contact.

🔗 **Site en ligne : [portfolio-one-ivory-ldyu06o7x2.vercel.app](https://portfolio-one-ivory-ldyu06o7x2.vercel.app/)**

> Je recherche une **alternance** en développement, DevOps ou cybersécurité, dans le cadre du Mastère Ingénierie Avancée du Logiciel (ISCOD, 2026–2028). Rythme : 4 jours en entreprise / 1 jour en formation. Mobile partout en France.

---

## ✨ Fonctionnalités

- **Page projet détaillée** pour chaque réalisation (`/projets/:slug`) : problème, rôle, fonctionnalités, stack, difficultés résolues, apprentissages
- **Filtre des projets** par catégorie (Web, Mobile, Sécurité, IA)
- **Frise du parcours** : formations et expériences
- **Formulaire de contact** avec EmailJS : états d'envoi, de succès et d'erreur, protection contre le double envoi
- **Contenu piloté par les données** : projets, compétences et parcours sont dans `src/data/`, sans toucher aux composants
- Design responsive (mobile d'abord), page 404, défilement vers les sections depuis n'importe quelle page

## 🛠️ Stack technique

| Rôle | Technologie |
|---|---|
| Interface | React 19 |
| Build / serveur de dev | Vite 7 |
| Style | Tailwind CSS 4 |
| Routage | React Router 7 |
| Emails | EmailJS |
| Qualité | ESLint |
| Hébergement | Vercel (déploiement continu depuis `main`) |

## 📁 Structure

```
frontend/
├── public/
│   ├── projects/           # Captures des projets (WebP)
│   ├── favicon.svg
│   └── OUNANA-YOUSSEF-CV.pdf
├── src/
│   ├── components/         # Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer
│   │   └── ScrollManager.jsx   # Défilement vers les ancres et remontée en haut de page
│   ├── pages/
│   │   ├── Home.jsx        # Page d'accueil (toutes les sections)
│   │   ├── ProjectPage.jsx # Page détaillée d'un projet
│   │   └── NotFound.jsx    # Page 404
│   ├── data/
│   │   ├── projects.js     # Liste des projets
│   │   ├── experience.js   # Formations et expériences
│   │   └── skills.js       # Compétences par catégorie
│   ├── App.jsx             # Routes
│   └── main.jsx            # Point d'entrée + BrowserRouter
└── vercel.json             # Redirige toutes les routes vers index.html (SPA)
```

## 🚀 Lancer le projet en local

**Prérequis :** Node.js 20.19 ou plus récent

```bash
git clone https://github.com/Youssef-Ounana/Portfolio.git
cd Portfolio/frontend
npm install
```

Crée un fichier `.env` dans `frontend/` pour le formulaire de contact. Les clés se trouvent dans ton compte [EmailJS](https://www.emailjs.com/).

```env
VITE_EMAILJS_SERVICE_ID=ton_service_id
VITE_EMAILJS_TEMPLATE_ID=ton_template_id
VITE_EMAILJS_PUBLIC_KEY=ta_cle_publique
```

```bash
npm run dev      # Serveur de développement → http://localhost:5173
npm run lint     # Analyse du code avec ESLint
npm run build    # Build de production dans dist/
npm run preview  # Prévisualise le build
```

## ➕ Ajouter un projet

1. Ajoute une capture compressée en WebP (largeur 1200 px, moins de 200 Ko) dans `frontend/public/projects/`
2. Ajoute un objet dans `frontend/src/data/projects.js` :

```js
{
  slug: "mon-projet",            // URL : /projets/mon-projet
  title: "Mon projet",
  category: "Web",               // Web | Mobile | Sécurité | IA
  status: "terminé",             // terminé | en cours
  team: "Projet personnel",
  role: "Ce que j'ai fait",
  description: "Résumé affiché sur la carte",
  problem: "Le problème résolu",
  features: ["..."],
  challenges: [{ title: "...", solution: "..." }],
  learnings: "Ce que j'ai appris",
  tech: ["React", "Node.js"],
  image: "/projects/mon-projet.webp",
  github: "https://github.com/...", // ou null
  demo: null,
}
```

La carte et la page détaillée sont générées automatiquement. Les sections vides ne sont pas affichées.

## 🌐 Déploiement

Le site est déployé sur **Vercel** :
- **Root Directory** : `frontend`
- Chaque push sur `main` déclenche un déploiement en production
- Chaque Pull Request génère une URL d'aperçu
- Les variables `VITE_EMAILJS_*` sont définies dans *Settings → Environment Variables* (Production et Preview)

## 🗺️ Évolutions prévues

- [ ] Captures d'écran de tous les projets
- [ ] SEO : balises Open Graph (aperçu LinkedIn), sitemap
- [ ] En-têtes de sécurité HTTP (CSP, HSTS)
- [ ] Tests unitaires (Vitest) et end-to-end (Playwright)
- [ ] CI GitHub Actions : lint, tests, build et audit Lighthouse

## 👤 Auteur

**Youssef Ounana** — Développeur Full-Stack & DevOps

- GitHub : [@Youssef-Ounana](https://github.com/Youssef-Ounana)
- LinkedIn : [youssef-ounana](https://linkedin.com/in/youssef-ounana/)
