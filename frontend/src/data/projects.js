// ─────────────────────────────────────────────────────────────
// Format d'un projet
//   slug        : identifiant dans l'URL → /projets/<slug>
//   status      : "terminé" | "en cours"
//   team        : "Projet personnel" | "Projet d'équipe" ...
//   role        : ce que TU as fait (phrase courte)
//   description : résumé affiché sur la carte (1–2 phrases)
//   problem     : le problème résolu (page détail)
//   features    : fonctionnalités principales (page détail)
//   challenges  : [{ title, solution }] difficultés résolues (page détail)
//   learnings   : ce que le projet t'a appris (page détail)
//   image       : chemin dans /public (ex: "/projects/tinmel.webp") ou null
//   github/demo : URL ou null (le lien n'est pas affiché si null)
// Les champs de la page détail sont optionnels : une section vide n'est pas affichée.
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    slug: "tinmel",
    title: "Tinmel",
    category: "Web",
    status: "terminé",
    team: "Projet personnel",
    role: "Conception, développement full-stack, conteneurisation et déploiement",
    description:
      "SaaS de gestion d'école privée : élèves, parents, classes, années scolaires, facturation et reçus PDF. API NestJS, interface Next.js, PostgreSQL, le tout dockerisé.",
    problem:
      "Les écoles privées gèrent souvent inscriptions et paiements sur papier ou tableur. Tinmel (« école » en amazigh) centralise la gestion administrative et financière dans une application web sécurisée, avec un accès adapté à chaque rôle.",
    features: [
      "Authentification JWT avec refresh token et 6 rôles (directeur, comptable, secrétaire, enseignant, parent, élève)",
      "Inscription d'un élève avec son parent en une seule opération",
      "Années scolaires, classes et historique des affectations",
      "Facturation, paiements partiels et génération de reçus PDF",
      "Tableau de bord avec statistiques financières",
      "Assistant d'initialisation (école + directeur), bloqué après la première utilisation",
    ],
    challenges: [
      {
        title: "Migration vers Prisma 7",
        solution:
          "Prisma 7 n'accepte plus l'URL de connexion dans schema.prisma. J'ai déplacé la configuration dans prisma.config.ts et branché l'adaptateur @prisma/adapter-pg.",
      },
      {
        title: "Créer un élève et son parent sans incohérence",
        solution:
          "La création passe par une transaction Prisma : si l'enregistrement du parent échoue, l'élève n'est pas créé non plus.",
      },
      {
        title: "Sécuriser l'API",
        solution:
          "Access token court (15 min) + refresh token stocké en base, guards NestJS par rôle, Helmet, limitation de débit (ThrottlerModule) et CORS strict.",
      },
      {
        title: "Mise en production",
        solution:
          "Dockerfiles backend et frontend, docker-compose de production avec healthchecks (PostgreSQL, Redis, MinIO) et Nginx en reverse proxy, déployé sur un VPS Ubuntu.",
      },
    ],
    learnings:
      "Concevoir une architecture modulaire côté back (modules, DTO, guards), modéliser une base relationnelle complète et mener un projet jusqu'au déploiement sur un serveur.",
    tech: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "MinIO", "Docker", "Nginx", "TanStack Query", "Zustand", "shadcn/ui"],
    image: null, // TODO: "/projects/tinmel.webp"
    github: "https://github.com/Youssef-Ounana/edumanager",
    demo: null,
  },
  {
    slug: "webagency",
    title: "WebAgency",
    category: "Web",
    status: "terminé",
    team: "Projet personnel",
    role: "Conception, développement, tests et CI",
    description:
      "Site d'agence web multilingue (FR/EN/AR avec support RTL), formulaire de contact transactionnel, tests unitaires et pipeline CI.",
    problem:
      "Présenter les services d'une agence web à une clientèle internationale, avec un site rapide, traduit en trois langues dont l'arabe (lecture de droite à gauche) et un formulaire de contact fiable.",
    features: [
      "Internationalisation FR / EN / AR avec bascule de mise en page RTL",
      "Animations avec Framer Motion",
      "Formulaire de contact avec envoi d'email via Resend",
      "Pipeline GitHub Actions : lint, vérification des types, tests, build",
    ],
    challenges: [
      {
        title: "Client Resend instancié au build",
        solution:
          "Le build Next.js échouait car le client Resend était créé au chargement du module, sans clé API disponible. Je l'instancie désormais au moment de la requête.",
      },
      {
        title: "Incompatibilité de versions next-intl",
        solution: "Version de next-intl alignée sur celle de Next.js et configuration du middleware adaptée.",
      },
      {
        title: "Réinitialisation du formulaire après un envoi asynchrone",
        solution: "Le reset s'exécutait avant la fin de la requête : il est maintenant déclenché uniquement après la réponse du serveur.",
      },
      {
        title: "Conflit de dépendances avec Vitest",
        solution: "Résolution d'un conflit de peer dependencies pour faire tourner les tests React avec Testing Library.",
      },
    ],
    learnings:
      "Mettre en place une CI dès le début, écrire des tests de composants et gérer l'internationalisation, y compris en RTL.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl", "Resend", "Vitest", "GitHub Actions"],
    image: null, // TODO: "/projects/webagency.webp"
    github: "https://github.com/Youssef-Ounana/webagency-",
    demo: "https://webagency-chi.vercel.app",
  },
  {
    slug: "decisio",
    title: "Decisio",
    category: "Mobile",
    status: "terminé",
    team: "Projet d'équipe — seul développeur",
    role: "Tout le développement : application mobile, API et base de données",
    description:
      "Application mobile gamifiée, inspirée de Duolingo, pour s'entraîner à prendre de meilleures décisions face à des scénarios du quotidien.",
    problem:
      "Aider collégiens, lycéens et étudiants à développer leur capacité de décision : l'utilisateur fait face à une situation réaliste (conflit, argent, pression des pairs), choisit une réponse et reçoit un retour pédagogique.",
    features: [
      "Inscription et connexion sécurisées (JWT + bcrypt)",
      "Scénarios à choix multiples avec feedback pédagogique",
      "Système de points et progression par niveaux",
      "Progression synchronisée avec le backend",
    ],
    challenges: [
      {
        title: "Stocker le token de façon sécurisée sur mobile",
        solution: "Utilisation d'expo-secure-store (stockage chiffré du téléphone) plutôt qu'un stockage en clair.",
      },
      {
        title: "Navigation selon l'état de connexion",
        solution: "Un AuthContext global pilote la navigation : écrans de connexion ou écrans de l'application selon la présence d'un token valide.",
      },
      {
        title: "Empêcher de gagner des points deux fois",
        solution: "L'API vérifie si le scénario a déjà été joué et renvoie un indicateur alreadyDone au lieu d'ajouter des points.",
      },
    ],
    learnings:
      "Porter seul la partie technique d'un projet d'équipe : architecture de l'API REST, modélisation MongoDB et communication avec les membres non techniques.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB Atlas", "JWT"],
    image: null, // TODO
    github: "https://github.com/Youssef-Ounana/Decisio",
    demo: null,
  },
    {
    slug: "wesee",
    title: "WeSee",
    category: "Web",
    status: "terminé",
    team: "Projet d'équipe",
    role: "Développeur full-stack, principalement front-end",
    description:
      "Plateforme de visionnage collaboratif : regarder des vidéos ensemble, en même temps, depuis des appareils différents.",
    problem:
      "Regarder une vidéo à plusieurs à distance oblige souvent à se coordonner à la main (« lance à 3… »). WeSee réunit les participants dans un même espace de visionnage.",
    features: [],    // à compléter
    challenges: [],  // à compléter
    learnings:
      "Travailler à plusieurs sur une même base de code Next.js : répartition des tâches, revues et intégration du front avec l'API.",
    tech: ["Next.js", "React","webSocket"], // à compléter
    image: "/projects/wesee.webp",
    github: null,
    demo: null,
  },
  {
    slug: "mini-siem",
    title: "Mini SIEM",
    category: "Sécurité",
    status: "en cours",
    team: "Projet personnel",
    role: "Conception et développement",
    description:
      "Plateforme de supervision de sécurité : agent de collecte de logs en C++, moteur de détection en Python, API Node.js et tableau de bord React, le tout conteneurisé.",
    problem: null,
    features: [],
    challenges: [],
    learnings: null,
    tech: ["C++", "Python", "Node.js", "PostgreSQL", "React", "Docker"],
    image: null,
    github: null,
    demo: null,
  },
  {
    slug: "email-assistant",
    title: "Email Assistant",
    category: "IA",
    status: "en cours",
    team: "Projet personnel",
    role: "Conception et développement",
    description:
      "Application web qui analyse un email avec un LLM (intention, urgence, ton, points clés) et génère une réponse au ton et à la longueur choisis, modifiable avant envoi.",
    problem: null,
    features: [],
    challenges: [],
    learnings: null,
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "LLM API"],
    image: null,
    github: null,
    demo: null,
  },
  {
    slug: "cericar",
    title: "CERICar",
    category: "Web",
    status: "terminé",
    team: "Projet universitaire",
    role: null,
    description: "Plateforme de covoiturage inspirée de BlaBlaCar, réalisée en projet universitaire au CERI (Avignon).",
    problem: null,
    features: [],
    challenges: [],
    learnings: null,
    tech: ["PHP", "Yii", "Tailwind CSS"],
    image: null,
    github: null,
    demo: null,
  },
  {
    slug: "image-classification",
    title: "Classification d'images",
    category: "IA",
    status: "terminé",
    team: "Projet universitaire",
    role: null,
    description: "Comparaison de modèles MLP et CNN pour la classification d'images : prétraitement, entraînement et évaluation.",
    problem: null,
    features: [],
    challenges: [],
    learnings: null,
    tech: ["Python"],
    image: null,
    github: null,
    demo: null,
  },
  {
    slug: "amazon-nlp",
    title: "Analyse d'avis Amazon (NLP)",
    category: "IA",
    status: "terminé",
    team: "Projet universitaire",
    role: null,
    description:
      "Traitement du langage naturel sur des avis clients Amazon : nettoyage du texte, vectorisation et classification du sentiment.",
    problem: null,
    features: [],
    challenges: [],
    learnings: null,
    tech: ["Python"],
    image: null,
    github: null,
    demo: null,
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export default projects;
