import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen py-20 px-6"
    >
      <SectionHeader
        id="skills"
        title="Technical Capabilities"
        desc="Backend systems, distributed infrastructure, and AI engineering tools."
      />

      {/* 🔥 SKILLS GRID */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Object.values(SKILLS).map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:scale-105 transition"
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="w-10 h-10 mb-2"
            />
            <p className="text-sm text-white text-center">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;