"use client";

export default function Tooltip({ text, position = "navbar" }) {
  return position === "header" ? (
    <span className="absolute pointer-events-none opacity-0 scale-90 transition-all duration-300 ease-out whitespace-nowrap bg-bg-tooltip text-brand-glow font-medium rounded-lg border border-border-subtle/50 shadow-xl text-[clamp(0.7rem,1.5vw,0.875rem)] py-[clamp(0.25rem,0.8vw,0.375rem)] px-[clamp(0.5rem,1.5vw,0.75rem)] left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:scale-100 z-50 top-full mt-[clamp(0.4rem,1.5vw,0.6rem)] capitalize">
      {text}
    </span>
  ) : (
    <span className="absolute pointer-events-none opacity-0 scale-90 transition-all duration-300 ease-out whitespace-nowrap bg-bg-tooltip text-brand-glow font-medium rounded-lg border border-border-subtle/50 shadow-xl text-[clamp(0.7rem,1.5vw,0.875rem)] py-[clamp(0.25rem,0.8vw,0.375rem)] px-[clamp(0.5rem,1.5vw,0.75rem)] group-hover:opacity-100 group-hover:scale-100 bottom-[clamp(3rem,8vw,3.5rem)] left-1/2 -translate-x-1/2 md:bottom-auto md:left-[clamp(3rem,8vw,3.5rem)] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 capitalize">
      {text}
    </span>
  );
}
