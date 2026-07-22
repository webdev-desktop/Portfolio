"use client";
import Button from "@/components/UI/Button";
import NoProject from "@/components/UI/NoProject.jsx";
import PageHeader from "@/components/UI/PageHeader.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import projects from "@/JSON/projects.json";
import { useState } from "react";

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isProjectAnimating, setIsProjectAnimating] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const activeProject = featuredProjects[currentProjectIndex] || null;

  // Safe navigation controls for carousel
  const nextProject = () => {
    if (isProjectAnimating || featuredProjects.length <= 1) return;
    setIsProjectAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
      setIsProjectAnimating(false);
    }, 500);
  };

  const prevProject = () => {
    if (isProjectAnimating || featuredProjects.length <= 1) return;
    setIsProjectAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex(
        (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
      );
      setIsProjectAnimating(false);
    }, 500);
  };

  // console.log(projects);
  const LiveIcon = TechIcons["externalLink"];
  const GithubIcon = TechIcons["github"];
  const ArrowIcon = TechIcons["next"];

  if (!activeProject) return <NoProject />;

  return (
    <>
      <WaterMark text={"Projects"} />
      <section
        id="projects"
        className="w-full mx-auto flex-1 flex flex-col items-center justify-center text-text-main relative px-[clamp(1rem,4.5vw,4rem)] pb-7 md:pl-[clamp(6rem,9vw,8rem)] max-[769px]:pb-[clamp(5rem,12vw,8.5rem)] select-none overflow-hidden fade-left"
      >
        <PageHeader
          title="Projects"
          subtitle="I had the pleasure of working with these awesome projects"
        />

        {/* Main Animated Carousel Display Frame */}
        <div
          className={`max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-[clamp(2.5rem,6vw,5rem)] mt-[clamp(2rem,5vw,4rem)] relative ${isProjectAnimating ? "fade-project-down" : "fade-down"}`}
        >
          <div className="w-full lg:w-[50%] flex justify-center items-center h-[clamp(280px,40vw,400px)] relative group select-none fade-down">
            {/* Dynamic Source Code Snippet Board */}
            <div className="absolute w-[80%] h-[85%] bg-[#121519]/95 border border-white/5 rounded-2xl shadow-2xl p-4 font-mono text-[clamp(10px,1.2vw,12px)] text-brand-cyan/70 overflow-hidden transition-all duration-500 ease-out -rotate-6 -translate-x-8 -translate-y-4 group-hover:-rotate-3 group-hover:-translate-x-12 group-hover:-translate-y-6 opacity-40 group-hover:opacity-75 group-hover:shadow-[0_0_30px_rgba(18,247,214,0.05)]">
              <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors duration-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/70 transition-colors duration-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 group-hover:bg-green-500/70 transition-colors duration-300" />
              </div>
              <pre className="leading-relaxed whitespace-pre text-wrap opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {activeProject.codeSnippet}
              </pre>
            </div>

            {/* Foreground Live Website Image Window Frame */}
            <div className="absolute w-[85%] h-[85%] bg-[#1e252b] border border-border-subtle/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out rotate-2 translate-x-4 group-hover:rotate-0 group-hover:translate-x-6 group-hover:translate-y-2 ring-1 ring-white/10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group-hover:border-brand-cyan/30">
              <div className="w-full bg-[#15191d] px-4 py-2.5 flex items-center gap-3 border-b border-black/40">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="w-full bg-bg-primary/60 rounded-md text-[10px] text-text-dim/60 font-mono py-0.5 px-3 truncate text-center transition-colors group-hover:text-brand-cyan/80 group-hover:bg-bg-primary/90">
                  {activeProject.liveLink.replace("https://", "")}
                </div>
              </div>
              <div className="w-full h-full relative bg-[#1c2227] overflow-hidden">
                <img
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  className="w-full h-11/12 opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out object-top"
                />
                {/* Subtle gradient glare layer that sweeps on hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/3 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col justify-center items-start min-h-80 fade-down">
            {/* Category Subtitle */}
            <span className="font-mono text-[clamp(11px,1.4vw,13px)] text-brand-cyan tracking-widest uppercase mb-1">
              {activeProject.subtitle}
            </span>

            {/* Project Main Heading */}
            <h3 className="font-ubuntu text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-wide text-white leading-tight mb-4 transition-colors duration-300 hover:text-brand-cyan-light">
              {activeProject.title}
            </h3>

            {/* Description Text block */}
            <p className="font-ubuntu font-light text-[clamp(14px,1.6vw,16px)] text-text-muted leading-relaxed mb-6 max-w-lg">
              {activeProject.description}
            </p>

            {/* Tech Stack Horizontal Wrap Row */}
            <div className="flex flex-wrap gap-2.5 mb-8 w-full justify-start items-center">
              {activeProject.techStack.map((techKey, index) => {
                const TechIconComponent =
                  TechIcons[techKey === "emailjs" ? "mail" : techKey];
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

            {/* Main Bottom Buttons Interface Link row */}
            <div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)] w-full">
              <a
                href={activeProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="group/live flex items-center gap-2 font-ubuntu font-medium text-[clamp(14px,1.6vw,16px)] text-bg-primary bg-brand-cyan hover:bg-brand-hover px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(18,247,214,0.15)] hover:shadow-[0_6px_25px_rgba(18,247,214,0.35)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>View Website</span>
                {LiveIcon && (
                  <LiveIcon className="w-3.5 h-3.5 transform group-hover/live:translate-x-1 group-hover/live:-translate-y-0.5 transition-transform duration-300" />
                )}
              </a>

              <a
                href={activeProject.githubLink}
                target="_blank"
                rel="noreferrer"
                className="group/git flex items-center gap-2 font-ubuntu font-normal text-[clamp(14px,1.6vw,16px)] text-text-muted hover:text-brand-cyan transition-colors duration-300"
              >
                {GithubIcon && (
                  <GithubIcon className="w-4 h-4 transform group-hover/git:rotate-12 transition-transform duration-300" />
                )}
                <span className="border-b border-transparent group-hover/git:border-brand-cyan transition-colors duration-300">
                  Source Code
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Slider Carousel Navigation Bottom Controls System */}

        <div className="mt-5 w-full mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-baseline h-full gap-[clamp(0.75rem,2vw,1.25rem)]">
          {featuredProjects.length > 1 && (
            <div className="flex items-center justify-center gap-[clamp(0.75rem,2vw,1.25rem)] max-w-6xl mx-auto w-full">
              <button
                onClick={prevProject}
                disabled={isProjectAnimating}
                className="w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] rounded-full border border-border-subtle/50 bg-[#1e252b]/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-cyan hover:text-bg-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 shadow-xl cursor-pointer active:scale-90 z-20 group/prev"
              >
                {ArrowIcon && (
                  <ArrowIcon className="w-4 h-4 rotate-180 transform group-hover/prev:-translate-x-0.5 transition-transform" />
                )}
              </button>

              <div className="font-mono text-[clamp(13px,1.6vw,15px)] text-brand-cyan font-medium tracking-widest px-2 min-w-14 text-center select-none">
                <span
                  className={`text-white font-bold ${isProjectAnimating ? "fade-project-down" : "fade-down"} `}
                >
                  {currentProjectIndex + 1}
                </span>
                <span className="text-text-dim/30 mx-1.5">/</span>
                <span className="text-text-dim/70">
                  {featuredProjects.length}
                </span>
              </div>

              <button
                onClick={nextProject}
                disabled={isProjectAnimating}
                className="w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] rounded-full border border-border-subtle/50 bg-[#1e252b]/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-cyan hover:text-bg-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 shadow-xl cursor-pointer active:scale-90 z-20 group/next"
              >
                {ArrowIcon && (
                  <ArrowIcon className="w-4 h-4 transform group-hover/next:translate-x-0.5 transition-transform" />
                )}
              </button>
            </div>
          )}

          <Button text="All Projects" href="/projects/all-projects" />
        </div>
      </section>
    </>
  );
}
