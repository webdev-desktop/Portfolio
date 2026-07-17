"use client";
import { fadeDownUp, fadeLeftRight } from "@/components/UI/FadeEffects";
import PageHeader from "@/components/UI/PageHeader.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import education from "@/JSON/education.json";
import { useEffect, useState } from "react";

export default function Education() {
  const DefaultIcon = TechIcons["education"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <WaterMark text={"Study"} />
      <section
        id="education"
        className={`w-full mx-auto flex-1 flex flex-col items-center justify-center text-text-main  relative pb-5 max-[769px]:pb-[clamp(4rem,6vw,6rem)] px-[clamp(1rem,4.5vw,4rem)] min-[767px]:pl-[clamp(6rem,9vw,8rem)] select-none overflow-hidden ${fadeLeftRight(isVisible)}`}
      >
        <PageHeader
          title="Education"
          subtitle="My academic qualifications matrix, continuous historical timelines, and certified technical training credentials"
        />

        {/* ==========================================================================
         PART 1: ACADEMIC EDUCATION VERTICAL TIMELINE TREE (CONTINUOUS AXIS ENGINE)
         ========================================================================== */}
        <div
          className={`max-w-4xl w-full mx-auto relative mt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(2rem,4vw,3rem)] px-4 ${fadeDownUp(isVisible)}`}
        >
          <div className="absolute top-0 bottom-0 left-9 md:left-1/2 transform md:-translate-x-1/2 w-0.5 border-l-2 border-dashed border-brand-cyan/30 z-0" />

          <div className="flex flex-col w-full relative z-10 gap-[clamp(2rem,4vw,3.5rem)]">
            {education.academicData.map((edu, index) => {
              const NodeIcon = TechIcons[edu.techKey] || DefaultIcon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block w-1/2" />

                  <div className="absolute left-0 top-1/2 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full border-2 border-brand-cyan bg-[#1e252b] flex items-center justify-center shadow-[0_0_15px_rgba(18,247,214,0.15)] z-10 shrink-0">
                    <div className="w-4 h-4 text-brand-cyan opacity-90">
                      {NodeIcon && <NodeIcon className="w-full h-full" />}
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-[44%] pl-14 md:pl-0 relative z-10 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                  >
                    <div className="bg-[#1e252b]/80 border border-border-subtle/30 p-[clamp(1.25rem,2.5vw,1.75rem)] rounded-3xl shadow-2xl backdrop-blur-md group hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300">
                      <div
                        className={`flex items-center gap-[clamp(0.5rem,1.5vw,1rem)] mb-2 flex-wrap ${isEven ? "md:justify-end justify-start" : "justify-start"}`}
                      >
                        <span className="font-mono text-[clamp(11px,1.3vw,13px)] text-brand-cyan font-medium uppercase tracking-wider">
                          {edu.duration}
                        </span>
                        <span className="font-mono text-[clamp(10px,1.2vw,12px)] bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-md text-brand-cyan-light font-semibold">
                          {edu.metrics}
                        </span>
                      </div>

                      <h3 className="font-ubuntu text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold tracking-wide text-white leading-snug mb-1 group-hover:text-brand-cyan transition-colors duration-300">
                        {edu.degree}
                      </h3>

                      <p className="font-mono text-[clamp(11px,1.2vw,12px)] text-text-dim/80 mb-3 uppercase tracking-wide">
                        {edu.institution}
                      </p>

                      <p
                        className={`font-ubuntu font-light text-[clamp(13px,1.5vw,14px)] text-text-muted/70 leading-relaxed ${isEven ? "md:text-right text-left" : "text-left"}`}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
         PART 2: SPECIALIZED COMPUTER TRAINING COURSES BRACKET
         ========================================================================== */}
        {education.coursesData && (
          <div
            className={`max-w-4xl w-full mx-auto mt-[clamp(2.5rem,5vw,4.5rem)] px-4 ${fadeDownUp(isVisible)}`}
          >
            <div className="flex flex-col items-start mb-[clamp(1.5rem,3vw,2rem)] border-b border-white/5 pb-3">
              <h3 className="font-ubuntu text-[clamp(1.2rem,2.5vw,1.5rem)] text-brand-cyan font-medium tracking-wide flex items-center gap-2.5">
                <span className="w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_8px_#12f7d6]" />
                Professional Training Courses
              </h3>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-[clamp(1.25rem,2.5vw,1.75rem)] w-full">
              {education.coursesData.map((course, index) => {
                const CourseIcon = TechIcons[course.techKey] || DefaultIcon;
                return (
                  <div
                    key={index}
                    className="w-[clamp(280px,100%,360px)] flex-1 min-w-2xs bg-[#1e252b]/80 border border-border-subtle/30 p-[clamp(1.25rem,2.5vw,1.75rem)] rounded-3xl flex flex-col justify-between shadow-2xl backdrop-blur-md group hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-white/5 bg-[#161a1e] flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform duration-300 shrink-0">
                          <div className="w-4 h-4 text-inherit">
                            {CourseIcon && (
                              <CourseIcon className="w-full h-full" />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                          <h4 className="font-ubuntu text-[clamp(14px,1.6vw,16px)] font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors w-full">
                            {course.title}
                          </h4>
                          <span className="font-mono text-[10px] text-text-dim/80 uppercase tracking-wider mt-0.5 w-full">
                            {course.institute} • {course.duration}
                          </span>
                        </div>
                      </div>

                      <div className="w-full mb-3 text-left">
                        <span className="font-mono text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md text-emerald-400 font-semibold uppercase tracking-wider">
                          {course.metrics}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2 border-t border-white/5 pt-3.5 w-full">
                        {course.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-text-muted/70 text-[clamp(12px,1.4vw,13px)] font-ubuntu font-light"
                          >
                            <span className="w-1 h-1 bg-brand-cyan rounded-full shrink-0" />
                            <span className="truncate w-full text-left">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
