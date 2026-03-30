import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const NOW_ITEMS = [
  {
    title: "Agentic AI systems",
    desc: "Exploring how LLMs can move beyond static responses into structured workflows using tools, memory, and decision loops.",
  },
  {
    title: "Distributed systems fundamentals",
    desc: "Trying to better understand failure modes, consistency tradeoffs, and how systems behave under real-world constraints.",
  },
  {
    title: "System design thinking",
    desc: "Practicing breaking down vague problems into components, constraints, and tradeoffs instead of jumping into implementation.",
  },
  {
    title: "Mathematical foundations",
    desc: "Continuing to strengthen intuition in optimization, probability, and linear algebra for better reasoning in ML and systems.",
  },
  {
    title: "Observability & SRE mindset",
    desc: "Thinking more about monitoring, debugging, and how to design systems that explain their own failures.",
  },
];

const NowSection = () => {
  return (
    <SectionWrapper id="now" className="w-full py-20 px-6">
      <SectionHeader
        id="now"
        title="Now / Learning"
        desc="Things I'm currently exploring, questioning, or trying to understand better"
      />

      <div className="mt-12 space-y-6 max-w-3xl mx-auto">
        {NOW_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-white/30 transition"
          >
            <h3 className="text-white font-medium mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

        {/* 🔥 subtle evolving signal */}
        <p className="text-xs text-zinc-500 mt-10 text-center italic">
          This list changes as I learn, unlearn, and revisit ideas.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default NowSection;