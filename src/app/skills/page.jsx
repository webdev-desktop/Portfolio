import PageHeader from "@/components/UI/PageHeader.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import skills from "@/JSON/skills.json";

export const metadata = {
  title: "Skills",
};

export default async function Skills() {
  return (
    <>
      <WaterMark text={"Skill"} />
      <section
        id="skills"
        className="w-full mx-auto flex-1 flex flex-col items-center justify-center text-text-main relative pb-[clamp(5rem,6vw,6rem)] px-[clamp(1rem,4.5vw,4rem)] md:pl-[clamp(6rem,9vw,8rem)] fade-left"
      >
        <PageHeader
          title="Skills"
          subtitle="My technical stack, tools, and databases engine deployment ecosystem"
        />

        {/* Skills Layout Container */}
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-[clamp(2rem,4vw,3.5rem)] mt-[clamp(2rem,4vw,3.5rem)] fade-right">
          {/* Category 1: Front-end */}
          <Test
            title="Core Development & Architecture"
            skills={skills?.developmentSkills}
          />

          {/* Category 2: Backend */}
          <Test
            title="Backend & Databases Ecosystem"
            skills={skills?.backendDatabaseSkills}
          />

          {/* Category 3: Tools */}
          <Test
            title="Productivity, Design & Office Software"
            skills={skills?.genericToolsSkills}
          />
        </div>
      </section>
    </>
  );
}

const Test = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-ubuntu text-[clamp(1.1rem,2vw,1.35rem)] text-brand-cyan tracking-wide font-normal flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-[clamp(1rem,2vw,1.5rem)] w-full">
        {skills?.map((skill, index) => {
          const IconComponent = TechIcons[skill?.iconKey];

          return (
            <div
              key={index}
              className="w-[clamp(125px,14.5vw,165px)] bg-[#1e252b]/80 border border-border-subtle/30 p-[clamp(1.2rem,2.5vw,1.75rem)] rounded-3xl flex flex-col items-center text-center justify-center gap-2.5 shadow-xl group hover:border-brand-cyan/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shrink-0 hover:rotate-3"
            >
              <div
                className={`w-[clamp(2.2rem,4.5vw,3.2rem)] h-[clamp(2.2rem,4.5vw,3.2rem)] flex justify-center items-center hover:-rotate-8 hover:scale-105 opacity-80 group-hover:opacity-100 transition-all duration-500 animate-float ease-out ${skill?.color}`}
              >
                {(IconComponent && (
                  <IconComponent className="w-full h-full" />
                )) || (
                  <span className="text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold">
                    {skill?.name?.split("")[0]}
                  </span>
                )}
              </div>
              <span className="font-ubuntu text-[clamp(13px,1.5vw,15px)] font-medium text-white tracking-wide w-full">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
