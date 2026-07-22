import CodeTags from "@/components/UI/CodeTags.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import data from "@/JSON/profile.json";

export const metadata = {
  title: "About",
};

export default async function About() {
  return (
    <section className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center relative overflow-hidden pt-2 px-[clamp(1rem,4.5vw,4rem)] max-lg:pt-3 min-[767px]:pl-[clamp(6rem,9vw,8rem)] max-[769px]:py-[clamp(4rem,10vw,7.5rem)]">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-[clamp(2rem,6vw,5rem)] relative z-10">
        <WaterMark text={"About"} />

        {/* Left Side Content Column */}
        <div className="flex-1 flex flex-col items-start w-full relative fade-left">
          {/* 1. Header: About Me Box */}
          <div className="relative inline-block border-2 border-brand-cyan px-8 py-3 rounded-tl-3xl rounded-br-3xl hover:shadow-[0_0_35px_rgba(18,247,214,.35)] shadow-[0_0_15px_rgba(18,247,214,0.15)] bg-bg-primary mb-[clamp(1.5rem,4vw,3.5rem)] select-none transition-all hover:scale-105 duration-500">
            <h2 className="font-ubuntu font-normal text-[clamp(1.5rem,2.5vw,3rem)] tracking-wide text-white leading-none">
              About Me
            </h2>
          </div>

          {/* 2. Main Terminal Card Content */}
          <div className="w-full bg-[#1e252b]/90 border border-border-subtle/40 p-[clamp(1.25rem,3vw,2.5rem)] rounded-4xl shadow-2xl backdrop-blur-md group transition-all duration-500 ease-in-out hover:translate-y-1.5 hover:scale-[1.01]">
            <img
              src={data.aboutProfile}
              alt="Profile"
              className="hidden md:float-left md:inline w-[clamp(250px,20vw,400px)] mr-[clamp(1.25rem,3vw,2.5rem)] animate-float transition-all duration-400 ease-out hover:scale-105 hover:-rotate-2"
              style={{
                clipPath:
                  "polygon(0% 100%, 0% 60%, 15% 50%, 28% 45%,25% 40%,18% 30%, 17% 23%, 19% 15%, 20% 11%, 25% 0%, 50% 0%, 73% 0%, 75% 14%, 79% 35%, 74% 47%, 89% 50%, 100% 53%,100% 100%)",
                shapeOutside:
                  "polygon(0% 100%, 0% 60%, 15% 50%, 28% 45%,25% 40%,18% 30%, 17% 23%, 19% 15%, 20% 11%, 25% 0%, 50% 0%, 73% 0%, 75% 14%, 79% 35%, 74% 47%, 89% 50%, 100% 53%,100% 100%)",
              }}
            />

            <h3 className="font-h2-u text-brand-cyan font-bold tracking-wide group-hover:tracking-wider transition-all duration-500 text-[clamp(1.8rem,3vw,3.5rem)] fade-down">
              Hello!
            </h3>

            <p className="font-mono text-[clamp(.8rem,.8vw+0.5rem,1.3rem)] leading-[1.9] text-text-dim font-light fade-down">
              {/* Opening Tag */}
              <CodeTags tag="p" />

              {data.about}

              {/* Closing Tag */}
              <CodeTags tag="/p" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
