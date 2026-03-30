"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

type ProjectRole = "all" | "backend" | "devops" | "ai" | "systems";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<ProjectRole>("all");

  // 🔥 Recruiter mode via URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const role = params.get("role") as ProjectRole;
    if (role) setFilter(role);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto">
      <SectionHeader
        id="projects"
        title="Projects"
        desc="Systems, backend, AI and infrastructure work."
      />

      {/* 🔥 FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["all", "backend", "devops", "ai", "systems"].map((role) => (
          <button
            key={role}
            onClick={() => setFilter(role as ProjectRole)}
            className={`px-4 py-2 text-sm rounded-md border ${
              filter === role
                ? "bg-black text-white"
                : "bg-transparent text-gray-500"
            }`}
          >
            {role.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🔥 PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>

            {project.live && (
              <Link href={project.live} target="_blank">
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                  Visit
                </button>
              </Link>
            )}

            {project.github && (
              <Link href={project.github} target="_blank">
                <button className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md border border-black w-28">
                  Github
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-2xl font-bold text-center mb-6">
        {project.title}
      </h4>

      {/* 🔥 TAGS */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 🔥 HIGHLIGHTS */}
      <div className="mb-6">
        <h5 className="font-semibold mb-2">Key Contributions</h5>
        <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      {/* 🔥 ARCHITECTURE */}
      {project.architecture && (
        <div className="mb-6">
          <h5 className="font-semibold mb-2">Architecture</h5>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.architecture}
          </p>
        </div>
      )}

      {/* EXISTING CONTENT */}
      {project.content}
    </>
  );
};
