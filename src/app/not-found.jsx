import Link from "next/link";
import WaterMark from "@/components/UI/WaterMark";

export default function NotFound() {
  return (
    <>
      <WaterMark text="404" />

      <section className="w-full h-fit flex flex-1 items-center justify-center overflow-hidden relative max-[769px]:py-[clamp(4rem,10vw,7.5rem)] px-[clamp(1rem,5vw,4rem)] fade-left">
        {/* Background Glow */}
        <div className="absolute w-xl h-96 bg-brand-cyan/10 rounded-full blur-[180px]" />

        {/* Floating Code Boxes */}
        <div className="absolute top-[15%] left-[10%] hidden lg:block rotate-[-10deg] opacity-20">
          <div className="bg-[#121519]/90 border border-white/10 rounded-2xl p-4 font-mono text-brand-cyan text-xs">
            {"<Route path='/unknown' />"}
          </div>
        </div>

        <div className="absolute bottom-[20%] right-[10%] hidden lg:block rotate-10 opacity-20">
          <div className="bg-[#121519]/90 border border-white/10 rounded-2xl p-4 font-mono text-brand-cyan text-xs">
            {"Error: Page does not exist"}
          </div>
        </div>

        <div className="max-w-3xl text-center z-10 fade-down">
          {/* 404 */}
          <h1 className="font-ubuntu font-bold leading-none text-[clamp(6rem,20vw,12rem)] transition-all animate-float ease-out text-brand-cyan drop-shadow-[0_0_40px_rgba(18,247,214,0.25)]">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 font-ubuntu font-bold text-[clamp(1.75rem,4vw,3rem)] text-white">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-5 text-text-muted text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed max-w-2xl mx-auto">
            The page you're looking for might have been moved, deleted, or
            perhaps it never existed in the first place.
          </p>

          {/* Buttons */}
          <div className="mt-[clamp(2rem,5vw,3rem)] flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1vw,0.9rem)] rounded-full bg-brand-cyan text-bg-primary font-medium shadow-[0_6px_25px_rgba(18,247,214,0.25)] hover:scale-105 transition-all duration-300"
            >
              Go Home
            </Link>

            <Link
              href="/projects/all-projects"
              className="px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1vw,0.9rem)] rounded-full border border-white/15 bg-white/5 text-white hover:border-brand-cyan hover:text-brand-cyan transition-all duration-300"
            >
              Explore Projects
            </Link>
          </div>

          {/* Tiny Footer */}
          <p className="mt-10 text-text-dim text-xs font-mono tracking-wider">
            ERROR_CODE: PAGE_NOT_FOUND
          </p>
        </div>
      </section>
    </>
  );
}
