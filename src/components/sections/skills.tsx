import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";

/* 🔥 ROLE-ALIGNED GROUPING */
const GROUPS: Record<string, SkillNames[]> = {
  "Backend Systems": [
    SkillNames.NODEJS,
    SkillNames.EXPRESS,
    SkillNames.FLASK,
    SkillNames.REDIS,
  ],

  "Databases": [
    SkillNames.POSTGRES,
    SkillNames.MONGODB,
  ],

  "DevOps & Infrastructure": [
    SkillNames.DOCKER,
    SkillNames.KUBERNETES,
    SkillNames.AWS,
    SkillNames.GCP,
    SkillNames.NGINX,
    SkillNames.LINUX,
  ],

  "AI & Agentic Systems": [
    SkillNames.PYTHON,
    SkillNames.LLM,
    SkillNames.LANGCHAIN,
  ],

  "Core Programming": [
    SkillNames.JS,
    SkillNames.TS,
  ],

  "Tools": [
    SkillNames.GIT,
    SkillNames.GITHUB,
    SkillNames.NPM,
    SkillNames.PRETTIER,
    SkillNames.VIM,
  ],
};

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen py-20 px-6"
    >
      <SectionHeader
        id="skills"
        title="Technical Capabilities"
        desc="Backend systems, distributed infrastructure, AI systems, and reliability engineering."
      />

      {/* 🔥 GROUPED SKILLS */}
      <div className="mt-12 space-y-12">
        {Object.entries(GROUPS).map(([group, keys]) => (
          <div key={group}>
            {/* 🔹 GROUP TITLE */}
            <h3 className="text-lg font-semibold text-white mb-4">
              {group}
            </h3>

            {/* 🔹 GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {keys
                .map((key) => SKILLS[key])
                .filter((skill) => skill !== undefined) // 🔥 safety guard
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-white/40 hover:bg-zinc-800 transition"
                  >
                    {/* 🔹 HEADER */}
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="w-6 h-6"
                      />
                      <p className="text-sm text-white font-medium">
                        {skill.label}
                      </p>
                    </div>

                    {/* 🔹 DESCRIPTION */}
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {skill.shortDescription}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;