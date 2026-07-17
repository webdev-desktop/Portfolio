export default function Loader({
  title = "Loading Portfolio...",
  subtitle = "Preparing awesome things..",
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0b1014] text-brand-cyan select-none">
      {/* Background Glow */}
      <div className="absolute w-xl h-96 rounded-full bg-brand-cyan/10 blur-[180px]" />

      {/* Floating Code Cards */}
      <div className="absolute top-[18%] left-[10%] lg:block rotate-12 opacity-20">
        <div className="rounded-2xl border border-white/10 bg-[#121519]/90 p-4 font-mono text-xs text-brand-cyan">
          {title}
        </div>
      </div>

      <div className="absolute bottom-[18%] right-[10%] lg:block rotate-12 opacity-20">
        <div className="rounded-2xl border border-white/10 bg-[#121519]/90 p-4 font-mono text-xs text-brand-cyan">
          {subtitle}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Scanner Ring */}
        <div className="relative flex items-center justify-center w-[clamp(7rem,16vw,10rem)] h-[clamp(7rem,16vw,10rem)]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-brand-cyan/20" />

          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-cyan border-r-brand-cyan animate-spin" />

          {/* Middle Ring */}
          <div className="absolute inset-[18%] rounded-full border border-brand-cyan/30 animate-pulse" />

          {/* Center Glow */}
          <div className="absolute w-[35%] h-[35%] rounded-full bg-brand-cyan/20 blur-xl animate-pulse" />

          {/* Center Dot */}
          <div className="absolute w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(18,247,214,0.8)]" />
        </div>

        {/* Title */}
        <h2 className="mt-10 font-ubuntu font-bold text-[clamp(1.4rem,3vw,2rem)] text-white tracking-wide">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[clamp(0.8rem,1.4vw,0.95rem)] text-text-muted text-center">
          {subtitle}
        </p>

        {/* Loading Dots */}
        <div className="flex items-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-bounce" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:150ms]" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:300ms]" />
        </div>

        {/* Bottom Text */}
        <span className="mt-8 font-mono text-[11px] tracking-[0.25em] uppercase text-brand-cyan/50">
          Please wait...
        </span>
      </div>
    </div>
  );
}
