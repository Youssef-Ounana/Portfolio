// type : "formation" | "experience"
// Du plus récent au plus ancien.
// TODO : remplace les "????" par les vraies dates (ex: "Mars 2024 – Juin 2024")
const experience = [
  {
    type: "formation",
    title: "Mastère Ingénierie Avancée du Logiciel",
    place: "ISCOD — en alternance",
    period: "2026 – 2028",
    details: "Rythme 4 jours en entreprise / 1 jour en formation. Architecture logicielle, DevOps et sécurité.",
  },
  {
    type: "experience",
    title: "Stage développeur full-stack",
    place: "CMGP — Casablanca",
    period: "11/2025 – 01/2026 ",
    details: "Développement full-stack, mise en place de pipelines CI/CD et conteneurisation avec Docker.",
    tags: ["Full-stack", "CI/CD", "Docker"],
  },
  {
    type: "experience",
    title: "Stage développeur front-end",
    place: "Fedaso",
    period: "07/2025 – 08/2025 ",
    details: "Intégration d'interfaces en React et Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    type: "formation",
    title: "Licence Informatique",
    place: "Université d'Avignon",
    period: "2025",
    details: null,
  },
  {
    type: "experience",
    title: "Inventoriste / Chef d'équipe",
    place: "RGIS France — Avignon",
    period: "Depuis 2021",
    details: "En parallèle des études : organisation des missions d'inventaire, encadrement d'équipe, respect des délais chez le client.",
    tags: ["Gestion d'équipe", "Rigueur"],
  },
];

export default experience;
