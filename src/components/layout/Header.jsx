"use client";
import TechIcons from "@/components/UI/TechIcons.jsx";
import Tooltip from "../UI/Tooltip.jsx";
import data from "@/JSON/profile.json";

export default function Header() {
  return (
    <header className="w-full backdrop-blur text-text-main sticky top-0 z-50 py-[clamp(0.6rem,2vw,1rem)] px-[clamp(1rem,4vw,2rem)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo Text */}
        <a
          href="/"
          className="flex items-center tracking-tighter group select-none"
        >
          <span className="font-mono font-bold text-[clamp(1.1rem,3.2vw,1.35rem)] bg-linear-to-r from-brand-cyan via-brand-cyan-light to-brand-hover bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:tracking-widest group-hover:scale-105">
            &lt;{data.logoName}/&gt;
          </span>
        </a>

        {/* Icons Navigation Controls */}
        <nav className="hidden min-[451px]:block">
          <ul className="flex items-center gap-[clamp(0.3rem,1.5vw,0.6rem)]">
            {Object.entries(data?.socialLinks)?.map(([key, value], index) => {
              const IconComponent = TechIcons[key];

              return (
                <li key={index} className="list-none">
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "relative group flex items-center justify-center p-[clamp(0.4rem,1.5vw,0.5rem)] rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:text-brand-glow hover:bg-bg-hover-dim/40 "
                    }
                  >
                    {IconComponent && (
                      <IconComponent className="w-[clamp(1.2rem,3.5vw,1.5rem)] h-[clamp(1.2rem,3.5vw,1.5rem)]" />
                    )}

                    <Tooltip text={key} position="header" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Decorative Bottom Structural Line */}
      <hr className="h-[clamp(1.5px,0.2vw,3px)] mt-[clamp(0.4rem,1vw,0.6rem)]" />
    </header>
  );
}
