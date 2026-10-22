const icon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

// Ne garde que ce que tu peux défendre en entretien.
const skills = [
  {
    category: "Front-end",
    items: [
      { name: "React", icon: icon("react/react-original.svg") },
      { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
      { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
      { name: "Next.js", icon: icon("nextjs/nextjs-original.svg") },
      { name: "Tailwind CSS", icon: icon("tailwindcss/tailwindcss-original.svg") },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
      { name: "Express", icon: null },
      { name: "PHP", icon: icon("php/php-original.svg") },
      { name: "Java", icon: icon("java/java-original.svg") },
      { name: "Python", icon: icon("python/python-original.svg") },
      { name: "C++", icon: icon("cplusplus/cplusplus-original.svg") },
    ],
  },
  {
    category: "Bases de données",
    items: [
      { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
      { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg") },
    ],
  },
  {
    category: "DevOps & outils",
    items: [
      { name: "Docker", icon: icon("docker/docker-original.svg") },
      { name: "GitHub Actions", icon: icon("githubactions/githubactions-original.svg") },
      { name: "Git", icon: icon("git/git-original.svg") },
      { name: "Linux", icon: icon("linux/linux-original.svg") },
    ],
  },
];

export default skills;
