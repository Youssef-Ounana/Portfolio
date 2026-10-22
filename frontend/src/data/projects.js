// status : "terminé" | "en cours"
// image  : chemin dans /public (ex: "/projects/webagency.png") ou null
// github / demo : URL ou null (le lien n'est pas affiché si null)

const projects = [
  {
    slug: "webagency",
    title: "WebAgency",
    category: "Web",
    status: "terminé",
    description:
      "Site d'agence web multilingue (FR/EN/AR avec support RTL), formulaire de contact transactionnel, tests unitaires et pipeline CI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Vitest", "GitHub Actions"],
    image: null,
    github: null, // TODO: lien du repo
    demo: "https://webagency-chi.vercel.app",
  },
  {
    slug: "decisio",
    title: "Decisio",
    category: "Mobile",
    status: "terminé",
    description:
      "Application mobile gamifiée d'entraînement à la prise de décision. Seul développeur technique du groupe : authentification, modèles scénarios/choix, 5 écrans et déploiement.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB Atlas"],
    image: null,
    github: null, // TODO
    demo: null,
  },
  {
    slug: "mini-siem",
    title: "Mini SIEM",
    category: "Sécurité",
    status: "en cours",
    description:
      "Plateforme de supervision de sécurité : agent de collecte de logs en C++, moteur de détection en Python, API Node.js et tableau de bord React, le tout conteneurisé.",
    tech: ["C++", "Python", "Node.js", "PostgreSQL", "React", "Docker"],
    image: null,
    github: null, // TODO
    demo: null,
  },
  {
    slug: "email-assistant",
    title: "Email Assistant",
    category: "IA",
    status: "en cours",
    description:
      "Application web qui analyse un email avec un LLM (intention, urgence, ton, points clés) et génère une réponse au ton et à la longueur choisis, modifiable avant envoi.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "LLM API"],
    image: null,
    github: null, // TODO
    demo: null,
  },
  {
    slug: "cericar",
    title: "CERICar",
    category: "Web",
    status: "terminé",
    description:
      "Plateforme de covoiturage inspirée de BlaBlaCar, réalisée en projet universitaire au CERI (Avignon).",
    tech: ["PHP", "Yii", "Tailwind CSS"], // TODO: vérifier (BDD ?)
    image: null,
    github: null, // TODO
    demo: null,
  },
  {
    slug: "image-classification",
    title: "Classification d'images",
    category: "IA",
    status: "terminé",
    description:
      "Comparaison de modèles MLP et CNN pour la classification d'images : prétraitement, entraînement et évaluation.",
    tech: ["Python"], // TODO: ajouter les librairies (TensorFlow/PyTorch, scikit-learn…)
    image: null,
    github: null, // TODO
    demo: null,
  },
  {
    slug: "amazon-nlp",
    title: "Analyse d'avis Amazon (NLP)",
    category: "IA",
    status: "terminé",
    description:
      "Traitement du langage naturel sur des avis clients Amazon : nettoyage du texte, vectorisation et classification du sentiment.",
    tech: ["Python"], // TODO: ajouter les librairies
    image: null,
    github: null, // TODO
    demo: null,
  },
];

export default projects;
