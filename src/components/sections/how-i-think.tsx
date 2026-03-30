import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const THINKING_POINTS = [
  {
    title: "I think in systems, not features",
    desc: "Whenever I build something, I try to understand how data flows, where it breaks, and what happens under stress—not just whether it works.",
  },
  {
    title: "I like constraints",
    desc: "Rate limits, latency, memory, failure cases—constraints make systems interesting. They force better design decisions.",
  },
  {
    title: "I break things on purpose",
    desc: "Some of my best learning came from intentionally pushing systems until they failed. That’s usually where the real understanding begins.",
  },
  {
    title: "I care about why something works",
    desc: "Not just using tools, but understanding the tradeoffs behind them—why Redis over Postgres, why queues, why eventual consistency.",
  },
  {
    title: "I enjoy connecting ideas",
    desc: "Game theory, distributed systems, AI—different domains often solve similar problems. I like exploring those overlaps.",
  },
  {
    title: "Still figuring things out",
    desc: "There’s a lot I don’t know yet. But I’ve learned how to learn fast, debug deeply, and stay curious without getting overwhelmed.",
  },
];

const HowIThinkSection = () => {
  return (
    <SectionWrapper id="thinking" className="w-full py-20 px-6">
      <SectionHeader
        id="thinking"
        title="How I Think"
        desc="The patterns I keep noticing while building and breaking systems"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {THINKING_POINTS.map((point, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-white/40 transition"
          >
            <h3 className="text-white font-semibold mb-2">
              {point.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
        <p className="text-xs text-zinc-500 mt-10 text-center">
            This section will probably evolve as I keep learning.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default HowIThinkSection;