export default function NoProject() {
  return (
    <div className="w-full flex flex-1 items-center justify-center  px-[clamp(1rem,4.5vw,4rem)]">
      {/* Main Max-Width Boundary Matrix Container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Actual Dynamic UI Element Card Frame */}
        <div className="relative w-full flex flex-col items-center justify-center text-center py-[clamp(4rem,10vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] bg-[#121519]/60 border border-white/5 rounded-[clamp(1.5rem,3.5vw,2.25rem)] backdrop-blur-md overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          {/* Cyber Glow Fluid Aura Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(18,247,214,0.04),transparent_65%)] pointer-events-none" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[clamp(15rem,35vw,24rem)] h-[clamp(6rem,15vw,10rem)] bg-brand-cyan/10 blur-[clamp(50px,8vw,90px)] rounded-full pointer-events-none" />

          {/* Fluid Cyberpunk Graphic Box */}
          <div className="relative w-[clamp(4.5rem,10vw,5.5rem)] h-[clamp(4.5rem,10vw,5.5rem)] rounded-[clamp(0.75rem,2vw,1.25rem)] bg-[#171c22] border border-white/5 flex items-center justify-center text-[clamp(1.5rem,3.5vw,2.25rem)] mb-[clamp(1.5rem,4vw,2.5rem)] shadow-2xl transition-all duration-500 group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_30px_rgba(18,247,214,0.15)] group-hover:-translate-y-1">
            <div className="absolute -top-1 -left-1 w-[clamp(0.5rem,1.5vw,0.85rem)] h-[clamp(0.5rem,1.5vw,0.85rem)] border-t-2 border-l-2 border-brand-cyan/30 group-hover:border-brand-cyan transition-colors" />
            <div className="absolute -bottom-1 -right-1 w-[clamp(0.5rem,1.5vw,0.85rem)] h-[clamp(0.5rem,1.5vw,0.85rem)] border-b-2 border-r-2 border-brand-cyan/30 group-hover:border-brand-cyan transition-colors" />

            <span className="animate-pulse select-none opacity-80 group-hover:opacity-100 transition-opacity">
              📁
            </span>
          </div>

          {/* Dynamic Typography Title */}
          <h3 className="font-ubuntu text-[clamp(1.6rem,3.8vw,2.5rem)] font-bold tracking-wide text-white mb-[clamp(0.75rem,2vw,1.25rem)] leading-tight">
            No Projects{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-cyan-light font-medium">
              Found
            </span>
          </h3>

          {/* Fluid Paragraph Context Description */}
          <p className="font-ubuntu font-light text-[clamp(13px,1.5vw,16px)] text-text-muted max-w-[clamp(20rem,50vw,34rem)] leading-relaxed mb-[clamp(1.75rem,4vw,2.75rem)] opacity-90">
            I am currently re-architecting my work profile and updating
            repositories with clean code architectures. The workbench will be
            live soon!
          </p>

          {/* Premium Call to Action Interaction Button */}
          <div className="flex items-center justify-center w-full z-10">
            <a
              href="/contact"
              className="group/cta flex items-center gap-[clamp(0.5rem,1.5vw,0.75rem)] font-ubuntu font-medium text-[clamp(12px,1.4vw,15px)] text-bg-primary bg-brand-cyan hover:bg-brand-hover px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.65rem,1.5vw,0.85rem)] rounded-full shadow-[0_4px_20px_rgba(18,247,214,0.15)] hover:shadow-[0_8px_30px_rgba(18,247,214,0.35)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Let's Discuss Your Idea</span>
              <span className="transform group-hover/cta:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
