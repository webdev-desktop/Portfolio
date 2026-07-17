"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/UI/PageHeader";
import WaterMark from "@/components/UI/WaterMark";
import TechIcons from "@/components/UI/TechIcons";
import projectsData from "@/JSON/projects.json";
import { fadeDownUp, fadeLeftRight } from "@/components/UI/FadeEffects";
import skills from "@/JSON/skills.json";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const GithubIcon = TechIcons["github"];
  const ExternalLinkIcon = TechIcons["externalLink"];

  return (
    <>
      <WaterMark text="Projects" />

      <section
        id="projects"
        className={`w-full mx-auto flex-1 flex flex-col items-center justify-center text-text-main relative px-[clamp(1rem,4.5vw,4rem)] md:pl-[clamp(6rem,9vw,8rem)] max-[769px]:pb-[clamp(5rem,12vw,8.5rem)] pb-5 overflow-hidden ${fadeLeftRight(isVisible)}`}
      >
        <PageHeader
          title="All Projects"
          subtitle="Some things I've built while learning and experimenting with modern web technologies."
        />

        <div
          className={`w-full max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(clamp(260px,30vw,320px),1fr))] gap-[clamp(1.25rem,2.5vw,2rem)] mt-[clamp(2rem,4vw,3rem)] ${fadeDownUp(isVisible)}`}
        >
          {projectsData?.map((project) => (
            <div
              key={project?._id}
              className="group rounded-[clamp(1.25rem,2vw,1.875rem)] overflow-hidden border border-white/10 bg-[#1e252b]/80 backdrop-blur-md hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Preview */}
              <div
                className={`w-full p-[clamp(1rem,2vw,1.5rem)] flex justify-center items-center h-[clamp(220px,32vw,320px)] relative group select-none ${fadeDownUp(isVisible)}`}
              >
                {/* Code Snippet */}
                <div className="absolute w-[80%] h-[85%] bg-[#121519]/95 border border-white/5 rounded-[clamp(1rem,2vw,1.5rem)] shadow-2xl p-[clamp(0.75rem,1.5vw,1rem)] font-mono text-[clamp(8px,0.9vw,11px)] text-brand-cyan/70 overflow-hidden transition-all duration-500 ease-out -rotate-6 -translate-x-6 -translate-y-3 group-hover:-rotate-3 group-hover:-translate-x-10 group-hover:-translate-y-5 opacity-40 group-hover:opacity-75">
                  <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>

                  <pre className="leading-relaxed whitespace-pre-wrap opacity-80">
                    {project?.codeSnippet}
                  </pre>
                </div>

                {/* Image Window */}
                <div className="absolute w-[85%] h-[85%] bg-[#1e252b] border border-border-subtle/30 rounded-[clamp(1rem,2vw,1.5rem)] shadow-2xl overflow-hidden transition-all duration-500 ease-out rotate-2 translate-x-3 group-hover:rotate-0 group-hover:translate-x-5 group-hover:translate-y-2 group-hover:border-brand-cyan/30">
                  <div className="w-full bg-[#15191d] px-3 py-2 flex items-center gap-3 border-b border-black/40">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>

                    <div className="w-full bg-bg-primary/60 rounded-md text-[clamp(8px,1vw,10px)] text-text-dim/60 font-mono py-0.5 px-3 truncate text-center">
                      {project?.liveLink?.replace("https://", "")}
                    </div>
                  </div>

                  <div className="w-full h-full relative bg-[#1c2227] overflow-hidden">
                    <img
                      src={project?.imageSrc}
                      alt={project?.title}
                      className="w-full h-11/12 object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-[clamp(1rem,2vw,1.5rem)] flex flex-col gap-[clamp(0.875rem,1.8vw,1.25rem)]">
                <div>
                  {/* Category Subtitle */}
                  <span className="font-mono text-[clamp(11px,1.4vw,13px)] text-brand-cyan tracking-widest uppercase mb-1">
                    {project?.subtitle}
                  </span>
                  <h3 className="font-ubuntu text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-white group-hover:text-brand-cyan transition leading-tight">
                    {project?.title}
                  </h3>

                  <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-text-muted text-[clamp(0.8125rem,1.3vw,0.9375rem)] leading-[1.7] line-clamp-3">
                    {project?.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project?.techStack?.map((techKey, index) => {
                    const TechIconComponent = TechIcons[techKey];
                    return (
                      <div
                        key={techKey}
                        style={{ transitionDelay: `${index * 40}ms` }}
                        className="flex items-center gap-1.5 bg-[#1a1f24] border border-border-subtle/40 px-3 py-1.5 rounded-xl text-[12px] text-text-muted hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-[#1e252b] transition-all duration-300 group/tag hover:-translate-y-0.5"
                      >
                        <div className="w-4 h-4 text-inherit opacity-75 group-hover/tag:opacity-100 group-hover/tag:scale-110 transition-all duration-300">
                          {TechIconComponent && (
                            <TechIconComponent className="w-full h-full" />
                          )}
                        </div>
                        <span className="font-mono text-[11px] capitalize tracking-wide select-none">
                          {techKey}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-[clamp(0.75rem,1.5vw,1rem)] pt-2">
                  {project?.liveLink && (
                    <a
                      href={project?.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group/live flex items-center justify-center gap-2 text-[clamp(0.75rem,1.2vw,0.875rem)] font-medium text-bg-primary bg-brand-cyan px-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.55rem,1vw,0.7rem)] rounded-full shadow-[0_4px_15px_rgba(18,247,214,0.15)] hover:shadow-[0_6px_25px_rgba(18,247,214,0.35)] transition-all duration-300 hover:scale-[1.03]"
                    >
                      <span>Live</span>

                      {ExternalLinkIcon && (
                        <ExternalLinkIcon className="w-3.5 h-3.5 group-hover/live:translate-x-1 group-hover/live:-translate-y-0.5 transition-transform duration-300" />
                      )}
                    </a>
                  )}

                  {project?.githubLink && (
                    <a
                      href={project?.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group/git flex items-center gap-2 text-[clamp(0.75rem,1.2vw,0.875rem)] text-text-muted hover:text-brand-cyan transition-colors duration-300"
                    >
                      {GithubIcon && (
                        <GithubIcon className="w-4 h-4 group-hover/git:rotate-12 transition-transform duration-300" />
                      )}

                      <span className="border-b border-transparent group-hover/git:border-brand-cyan transition-colors duration-300">
                        GitHub
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div
            className={`absolute -left-2.5 -top-60 hidden sm:flex flex-col items-center justify-center p-[clamp(1rem,2vw,1.25rem)] rounded-2xl border border-white/10 min-w-[clamp(160px,15vw,195px)] shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] group select-none transition-all duration-500 overflow-hidden hover:scale-105 animate-float capitalize`}
          >
            {/* Glass Background */}
            <div className="absolute inset-0 rounded-2xl bg-[#00f2fe]/5 backdrop-blur-xl pointer-events-none" />

            {/* Tech Icons */}
            <div className="relative flex items-center gap-3 mb-2.5 opacity-80 group-hover:opacity-100">
              {skills?.developmentSkills?.map((skill, index) => {
                const IconComponent = TechIcons[skill?.iconKey];

                return (
                  <div key={index} className={skill?.color}>
                    <IconComponent size={18} />
                  </div>
                );
              })}
            </div>

            {/* Content */}
            <div className="relative text-center">
              <span className="text-gray-400 font-medium block text-[clamp(0.55rem,0.8vw,0.7rem)] tracking-normal mb-1">
                🚀 project showcase
              </span>

              <span className="text-text-main font-bold block tracking-wider text-[clamp(0.75rem,1vw,0.9rem)]">
                {projectsData?.length || 12}+ Projects Built
              </span>

              <span className="text-gray-400 block mt-1 text-[clamp(0.55rem,0.8vw,0.7rem)] tracking-wide">
                Multi-Stack Projects
              </span>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-[clamp(0.55rem,0.8vw,0.7rem)] font-sans font-medium border bg-[#00f2fe]/5 border-[#00f2fe]/20 text-[#00f2fe]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f2fe]" />
                </span>

                <span>Actively Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
