import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiTypescript,
  SiJenkins,
} from "react-icons/si";
import { RiReactjsFill, RiNodejsFill } from "react-icons/ri";

/* ---------------- TYPES ---------------- */

type ProjectRole = "backend" | "devops" | "ai" | "systems";

export type Skill = {
  title: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  tags: ProjectRole[];

  skills: Skill[];

  github?: string;
  live?: string;

  highlights: string[];
  architecture?: string;

  content: React.ReactNode;
};

/* ---------------- SKILLS ---------------- */

const S = {
  python: { title: "Python", icon: <SiPython /> },
  postgres: { title: "PostgreSQL", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", icon: <SiMongodb /> },
  redis: { title: "Redis", icon: <SiRedis /> },
  docker: { title: "Docker", icon: <SiDocker /> },
  express: { title: "Express", icon: <SiExpress /> },
  react: { title: "React", icon: <RiReactjsFill /> },
  node: { title: "Node.js", icon: <RiNodejsFill /> },
  ts: { title: "TypeScript", icon: <SiTypescript /> },
  jenkins: { title: "Jenkins", icon: <SiJenkins /> },
};

/* ---------------- SAFE LINKS ---------------- */

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex gap-3 mt-4">
      {live && (
        <Link href={live} target="_blank">
          <Button size="sm">
            Visit <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link href={repo} target="_blank">
          <Button size="sm" variant="outline">
            Github
          </Button>
        </Link>
      )}
    </div>
  );
};

/* ---------------- PROJECTS ---------------- */

const projects: Project[] = [
  {
    id: "agentic-movie",
    category: "Agentic AI System",
    title: "Agentic Movie Assistant",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    tags: ["ai", "backend", "systems"],

    skills: [S.python, S.postgres, S.docker],

    github: "https://github.com/Rupesh-Max-na-Ore/Agentic-Movie-Recommender",

    highlights: [
      "LLM-driven intent parsing with function calling",
      "Semantic recommendation over 4800+ movies",
      "Stateful backend with users, watchlists, scheduling",
      "Handled runtime model loading (~100MB artifacts)",
      "Dockerized deployment with automated DB initialization",
    ],

    architecture:
      "User → LLM → Intent Parser → Function Router → Backend → PostgreSQL",

    content: (
      <p className="text-sm text-zinc-400 leading-relaxed">
        Designed an agentic system that translates natural language into structured backend actions. 
        Focused on bridging ambiguity in user intent with deterministic execution pipelines, while 
        maintaining persistent state across interactions.
      </p>
    ),
  },

  {
    id: "monitoring",
    category: "Observability System",
    title: "SRE Monitoring & Alerting System",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    tags: ["devops", "systems"],

    skills: [S.docker],

    github: "https://github.com/Rupesh-Max-na-Ore/sre-monitoring-alerting-system-2",

    highlights: [
      "Prometheus-based metrics collection (CPU + app latency)",
      "Grafana dashboards for visualization",
      "Alert lifecycle simulation (Inactive → Firing → Recovery)",
      "Performed RCA on high CPU and latency scenarios",
      "Instrumented Flask app for observability metrics",
    ],

    architecture:
      "Application → Prometheus → Grafana → Alert Manager",

    content: (
      <p className="text-sm text-zinc-400 leading-relaxed">
        Built a monitoring pipeline to understand how systems expose internal state. 
        Simulated failure scenarios and traced issues through metrics, alerts, and 
        root cause analysis workflows.
      </p>
    ),
  },

  {
    id: "mindful-gallery",
    category: "Full Stack + DevOps",
    title: "Mindful Image Gallery",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    tags: ["backend", "systems", "devops"],

    skills: [
      S.react,
      S.node,
      S.mongo,
      S.redis,
      S.docker,
      S.jenkins,
    ],

    github: "https://github.com/Rupesh-Max-na-Ore/images-gallery",

    highlights: [
      "Full CRUD system with REST APIs",
      "Unsplash API integration for dynamic image fetching",
      "Redis-based rate limiting for API control",
      "CI/CD pipeline using Docker + Jenkins",
      "Modular backend separation (API / business logic)",
    ],

    architecture:
      "Client → React → Flask API → MongoDB + Redis → CI/CD Pipeline",

    content: (
      <p className="text-sm text-zinc-400 leading-relaxed">
        Built a full-stack system mimicking SaaS workflows, focusing on modular architecture, 
        controlled API usage, and deployment automation through CI/CD pipelines.
      </p>
    ),
  },

  {
    id: "raycasting",
    category: "Systems / Graphics",
    title: "2.5D Raycasting Engine",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    tags: ["systems"],

    skills: [],

    github: "https://github.com/Rupesh-Max-na-Ore/2.5D-Raycasting",

    highlights: [
      "Real-time rendering engine inspired by Wolfenstein 3D",
      "Implemented ray-wall intersection using trigonometry",
      "Built pixel-level rendering pipeline from scratch",
      "Handled movement, angle normalization, grid traversal",
    ],

    content: (
      <p className="text-sm text-zinc-400 leading-relaxed">
        Low-level systems project implementing rendering logic from scratch. 
        Focused on mathematical modeling, event-driven updates, and 
        understanding how graphics pipelines work at a fundamental level.
      </p>
    ),
  },

  {
    id: "auction-engine",
    category: "Algorithms / Game Theory",
    title: "Game-Theoretic Travel Auction Engine",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    tags: ["systems"],

    skills: [S.python],

    github: "https://github.com/Rupesh-Max-na-Ore/Travel-Auction-Game-Theoretic-Engine",

    highlights: [
      "Combinatorial bidding and allocation system",
      "Dynamic programming for winner determination",
      "Explored segment trees for bundle evaluation",
      "Simulated trade-offs between user satisfaction and revenue",
    ],

    content: (
      <p className="text-sm text-zinc-400 leading-relaxed">
        Algorithm-heavy system exploring optimization and resource allocation. 
        Focused on modeling decision trade-offs and designing extensible 
        auction logic with separation of concerns.
      </p>
    ),
  },
];

export default projects;