import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiSocketdotio,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

/* ---------------- TYPES ---------------- */

type ProjectRole = "backend" | "devops" | "ai" | "systems";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];

  tags: ProjectRole[];

  skills: { frontend: Skill[]; backend: Skill[] };

  live?: string;     // 🔥 made optional
  github?: string;   // 🔥 already optional

  highlights: string[];
  architecture?: string;

  content: React.ReactNode;
};

/* ---------------- SKILLS ---------------- */

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  socket: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};

/* ---------------- SAFE LINK COMPONENT ---------------- */

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex gap-3 my-3 mb-6">
      {typeof live === "string" && live.length > 0 && (
        <Link target="_blank" href={live}>
          <Button size="sm">
            Visit
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}

      {typeof repo === "string" && repo.length > 0 && (
        <Link target="_blank" href={repo}>
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
    screenshots: [],
    tags: ["ai", "backend", "systems"],

    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },

    live: "#",
    github: "#",

    highlights: [
      "LLM-driven intent parsing with function calling",
      "Stateful backend for users, watchlists, and scheduling",
      "Semantic recommendation system over 4800+ movies",
      "Dockerized deployment with runtime model loading",
    ],

    architecture:
      "User → LLM → Intent Parser → Function Router → Backend → PostgreSQL",

    content: (
      <TypographyP>
        Agentic system enabling natural language interaction with structured backend orchestration.
      </TypographyP>
    ),
  },

  {
    id: "monitoring",
    category: "DevOps / Observability",
    title: "Monitoring & Alerting System",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    tags: ["devops", "systems"],

    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.docker],
    },

    live: "#",
    github: "#",

    highlights: [
      "Prometheus-based metrics collection",
      "Grafana dashboards for observability",
      "Alert pipeline with rule-based triggers",
      "Simulated load testing and RCA workflows",
    ],

    architecture:
      "Application → Prometheus → Grafana → Alert Manager",

    content: (
      <TypographyP>
        Containerized observability stack for monitoring and alerting pipelines.
      </TypographyP>
    ),
  },

  {
    id: "codingducks",
    category: "Distributed Coding Platform",
    title: "Coding Ducks",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    tags: ["backend", "systems"],

    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.socket,
      ],
    },

    live: "https://www.codingducks.xyz/",
    github: "https://github.com/Naresh-Khatri/Coding-Ducks",

    highlights: [
      "Real-time collaborative coding",
      "Contest system with evaluation",
      "User ranking system",
    ],

    architecture:
      "Client → Next.js → Node API → PostgreSQL + WebSockets",

    content: (
      <>
        <TypographyP>
          Distributed platform combining collaboration and competitive programming.
        </TypographyP>
        <ProjectsLinks
          live="https://www.codingducks.xyz/"
          repo="https://github.com/Naresh-Khatri/Coding-Ducks"
        />
      </>
    ),
  },

  {
    id: "ghostchat",
    category: "Realtime Messaging",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png"],
    tags: ["backend", "systems"],

    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.supabase],
    },

    live: "https://ghostchat.vercel.app",
    github: "https://github.com/Naresh-Khatri/GhostChat",

    highlights: [
      "Realtime messaging using subscriptions",
      "Anonymous system design",
      "Low-latency architecture",
    ],

    architecture: "Client → Next.js → Supabase Realtime",

    content: (
      <>
        <TypographyP>
          Anonymous real-time messaging system.
        </TypographyP>
        <ProjectsLinks
          live="https://ghostchat.vercel.app"
          repo="https://github.com/Naresh-Khatri/GhostChat"
        />
      </>
    ),
  },
];

export default projects;