import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const STORIES = [
  {
    title: "Teaching myself how to think mathematically",
    desc: "I wasn’t good at math in school—not because I disliked abstraction, but because I struggled with application and generalization. Inspired by thinkers like Cal Newport and Scott Young, I rebuilt my foundations from scratch: logic, calculus, linear algebra, and programming. After a year of consistent effort, things started to click. Today, I’ve worked on research in distributed systems and machine learning that relies heavily on mathematical reasoning.",
    insight:
      "Understanding comes not from exposure, but from reconstruction.",
  },

  {
    title: "Unlearning OOP to actually understand design",
    desc: "In my OOP course, I could solve problems and pass tests, but I didn’t understand why systems were designed a certain way. So I took a different route—I abandoned the top-down teaching approach and rebuilt my understanding bottom-up. I experimented with hundreds of designs, analyzed why they failed, and gradually internalized good design principles. I didn’t top the course, but I learned something far more useful.",
    insight:
      "Not all metrics are signals. Not everything that matters is measurable.",
  },

  {
    title: "Leading under constraint: 8 hours, 11 strangers",
    desc: "At the Lumen Hackathon, I led a team of 11 randomly assigned participants. We had 8 hours to design, build, and present a full-stack system. I focused on coordination, accountability, and clear communication, while contributing to backend and CI/CD. We shipped just minutes before the deadline and secured 3rd place—something we didn’t expect.",
    insight:
      "Leadership is less about control and more about clarity under pressure.",
  },

  {
    title: "Challenging assumptions in research",
    desc: "I proposed an ML research idea that was initially dismissed as impractical. Instead of arguing, I built a working prototype in a week and followed it up with a structured explanation backed by literature. It took effort, but it changed the conversation. The idea was eventually accepted.",
    insight:
      "If an idea seems unreasonable, make it concrete.",
  },
];

const StoriesSection = () => {
  return (
    <SectionWrapper id="stories" className="w-full py-20 px-6">
      <SectionHeader
        id="stories"
        title="Stories & Turning Points"
        desc="Moments that shaped how I learn, build, and think"
      />

      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        {STORIES.map((story, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-white/30 transition"
          >
            <h3 className="text-white font-semibold mb-3">
              {story.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {story.desc}
            </p>

            <p className="text-xs text-zinc-500 italic">
              {story.insight}
            </p>
          </div>
        ))}
        <p className="text-xs text-zinc-500 mt-10 text-center italic">
            I expect this section to keep evolving as I encounter better problems.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default StoriesSection;