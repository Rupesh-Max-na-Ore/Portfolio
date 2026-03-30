import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              {/* 🔹 INTRO */}
              <BlurIn delay={0.7}>
                <p className="mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 font-display sm:text-xl">
                  Hi, I am
                </p>
              </BlurIn>

              {/* 🔹 NAME */}
              <BlurIn delay={1}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                        "text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                        "cursor-default text-edge-outline font-display"
                      )}
                    >
                      {config.author.split(" ")[0]}
                      <br />
                      {config.author.split(" ")[1]}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black"
                  >
                    curiosity is a feature, not a bug
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              {/* 🔥 IDENTITY */}
              <BlurIn delay={1.2}>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 font-display max-w-xl">
                  Systems thinker disguised as a developer.
                </p>
              </BlurIn>

              {/* 🔥 WHAT YOU DO */}
              <BlurIn delay={1.3}>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
                  I build backend systems, distributed infrastructure, and
                  AI workflows that operate under real-world constraints—not
                  just ideal conditions.
                </p>
              </BlurIn>

              {/* 🔥 THINKING SIGNAL */}
              <BlurIn delay={1.4}>
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
                  Currently exploring how intelligence, systems, and
                  constraints interact—and where things break.
                </p>
              </BlurIn>

              {/* 🔥 PERSONALITY TOUCH */}
              <BlurIn delay={1.5}>
                <p className="text-xs text-zinc-500 mt-2 italic">
                  (occasionally breaks things on purpose to understand them better)
                </p>
              </BlurIn>

              {/* 🔹 CTA */}
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href="https://drive.google.com/file/d/1hVfZdutl3RlJdIAbuHDS5CyfG1PeFVRZ/view?usp=sharing"
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={20} />
                      <p>View Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                <div className="flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button variant={"outline"}>
                          Let’s build something interesting
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>I care more about problems than titles</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* 🔹 SOCIALS */}
                  <div className="flex items-center gap-2">
                    {config.social.twitter && (
                      <Link href={config.social.twitter} target="_blank">
                        <Button variant={"outline"}>
                          <SiX size={18} />
                        </Button>
                      </Link>
                    )}
                    {config.social.github && (
                      <Link href={config.social.github} target="_blank">
                        <Button variant={"outline"}>
                          <SiGithub size={18} />
                        </Button>
                      </Link>
                    )}
                    {config.social.linkedin && (
                      <Link href={config.social.linkedin} target="_blank">
                        <Button variant={"outline"}>
                          <SiLinkedin size={18} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right side empty (can add animation later) */}
        <div className="grid col-span-1"></div>
      </div>

      {/* 🔻 Scroll indicator */}
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;