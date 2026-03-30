export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",

  NODEJS = "nodejs",
  EXPRESS = "express",
  FLASK = "flask",

  POSTGRES = "postgres",
  MONGODB = "mongodb",
  REDIS = "redis",

  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",

  FIREBASE = "firebase",
  WORDPRESS = "wordpress",

  LINUX = "linux",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  NGINX = "nginx",

  AWS = "aws",
  GCP = "gcp",

  VIM = "vim",
  VERCEL = "vercel",

  /* 🔥 NEW */
  PYTHON = "python",
  LANGCHAIN = "langchain",
  LLM = "llm",

  ALGORITHMS = "algorithms",
  DSA = "dsa",
  GAME_THEORY = "game_theory",
  SYSTEM_DESIGN = "system_design",
  NETWORKING = "networking",
  OPTIMIZATION = "optimization",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  /* 🔹 FRONTEND */
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core language for web and event-driven systems",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for scalable applications",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Structure layer of web applications",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling and layout for responsive UI",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-based UI framework",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "Reactive frontend framework",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS framework",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  /* 🔹 BACKEND */
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Event-driven backend runtime",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Backend framework for APIs",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 11,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight Python API framework",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },

  /* 🔹 DATABASE */
  [SkillNames.POSTGRES]: {
    id: 12,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational DB with strong consistency",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 13,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document database",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 14,
    name: "redis",
    label: "Redis",
    shortDescription: "In-memory caching and queue system",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  /* 🔹 DEVOPS */
  [SkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for deployments",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: 16,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Container orchestration",
    color: "#326ce5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  [SkillNames.AWS]: {
    id: 17,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure platform",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 18,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud computing services",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 19,
    name: "nginx",
    label: "Nginx",
    shortDescription: "Reverse proxy and load balancer",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 20,
    name: "linux",
    label: "Linux",
    shortDescription: "System-level operations and scripting",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  /* 🔹 TOOLS */
  [SkillNames.GIT]: {
    id: 21,
    name: "git",
    label: "Git",
    shortDescription: "Version control system",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 22,
    name: "github",
    label: "GitHub",
    shortDescription: "Code collaboration platform",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 23,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for Node.js",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 24,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatting tool",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.VIM]: {
    id: 25,
    name: "vim",
    label: "Vim",
    shortDescription: "Efficient terminal-based editor",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },

  /* 🔹 AI */
  [SkillNames.PYTHON]: {
    id: 26,
    name: "python",
    label: "Python",
    shortDescription: "Primary language for AI and backend systems",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 27,
    name: "langchain",
    label: "LangChain",
    shortDescription: "LLM orchestration and agent pipelines",
    color: "#ffffff",
    icon: "https://seeklogo.com/images/L/langchain-logo-4C5A88F6A0-seeklogo.com.png",
  },
  [SkillNames.LLM]: {
    id: 28,
    name: "llm",
    label: "LLM Systems",
    shortDescription: "Prompt engineering and AI systems integration",
    color: "#9333ea",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },

  /* 🔹 REMAINING */
  [SkillNames.FIREBASE]: {
    id: 29,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend-as-a-service platform",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 30,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "CMS for web applications",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.VERCEL]: {
    id: 31,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment platform",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.ALGORITHMS]: {
    id: 100,
    name: "algorithms",
    label: "Algorithms",
    shortDescription: "Design and analysis of efficient algorithms",
    color: "#f59e0b",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721268.png",
  },

  [SkillNames.DSA]: {
    id: 101,
    name: "dsa",
    label: "Data Structures",
    shortDescription: "Core data structures and problem solving",
    color: "#10b981",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },

  [SkillNames.GAME_THEORY]: {
    id: 102,
    name: "game_theory",
    label: "Game Theory",
    shortDescription: "Strategic interaction and optimization models",
    color: "#8b5cf6",
    icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },

  [SkillNames.SYSTEM_DESIGN]: {
    id: 103,
    name: "system_design",
    label: "System Design",
    shortDescription: "LLD/HLD and scalable architecture design",
    color: "#3b82f6",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },

  [SkillNames.NETWORKING]: {
    id: 104,
    name: "networking",
    label: "Networking",
    shortDescription: "Distributed systems and communication models",
    color: "#06b6d4",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
  },

  [SkillNames.OPTIMIZATION]: {
    id: 105,
    name: "optimization",
    label: "Optimization",
    shortDescription: "Mathematical optimization and resource allocation",
    color: "#ef4444",
    icon: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  /* 🔥 1. PROJECTS (TOP PRIORITY) */
  {
    id: 1,
    startDate: "Sep 2024",
    endDate: "Present",
    title: "Systems & AI Engineering Projects",
    company: "Personal Projects",
    description: [
      "Designed and deployed an agentic AI system enabling natural language-driven workflows for movie discovery, planning, and tracking.",
      "Built LLM-powered backend with intent parsing and function calling, mapping user queries to structured database operations.",
      "Engineered a semantic recommendation engine over 4800+ items using feature engineering and similarity computation.",
      "Developed stateful backend systems supporting users, watchlists, reviews, and temporal planning workflows.",
      "Implemented production-grade pipelines including containerization (Docker), automated DB initialization, and dependency orchestration.",
      "Built SRE-grade monitoring system using Prometheus + Grafana with alert lifecycle validation and root cause analysis workflows.",
      "Instrumented backend services for observability (latency, request rate) and implemented alerting for anomaly detection.",
      "Developed full-stack systems with Flask + React + MongoDB + Redis, including CI/CD pipelines (Docker + Jenkins) and rate-limited APIs.",
      "Built low-level systems including a real-time 2.5D raycasting engine in C with custom rendering pipeline and trigonometric computations.",
      "Applied algorithmic optimization (DP, segment trees) in a game-theoretic auction system for resource allocation problems."
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LLM,
      SkillNames.LANGCHAIN,
      SkillNames.NODEJS,
      SkillNames.FLASK,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.REDIS,
      SkillNames.DOCKER,
      SkillNames.KUBERNETES,
      SkillNames.AWS,
      SkillNames.GCP,
      SkillNames.LINUX,
      SkillNames.REACT,
      SkillNames.TS,
    ],
  },

  /* 🔹 2. DEEP LEARNING INTERN */
  {
    id: 2,
    startDate: "Sep 2025",
    endDate: "Nov 2025",
    title: "Deep Learning Intern",
    company: "KIIT University",
    description: [
      "Worked on backend and data pipeline for GAN-based system generating realistic flower renderings.",
      "Handled data preprocessing and integration for training pipelines.",
      "Strengthened practical skills in SQL, BigQuery, and Flask.",
      "Collaborated under academic supervision on applied ML systems."
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FLASK,
      SkillNames.POSTGRES,
      SkillNames.GCP,
    ],
  },

  /* 🔹 3. RESEARCH INTERN */
  {
    id: 3,
    startDate: "Sep 2024",
    endDate: "Mar 2025",
    title: "Research Intern",
    company: "KIIT University",
    description: [
      "Authored 2 research papers on game theory in edge computing and distributed systems.",
      "Implemented algorithmic models and conducted system-level simulations.",
      "Applied concepts from networking, distributed systems, and optimization.",
      "Bridged theoretical models with practical system design insights."
    ],
    skills: [
      SkillNames.ALGORITHMS,
      SkillNames.DSA,
      SkillNames.GAME_THEORY,
      SkillNames.OPTIMIZATION,
      SkillNames.SYSTEM_DESIGN,
      SkillNames.NETWORKING,
      SkillNames.PYTHON,
    ],
  },
];

export const themeDisclaimers = {
  light: "Light mode activated",
  dark: "Dark mode activated",
};