"use client";

import { LuChevronsRight } from "react-icons/lu";
import TechIcons from "./TechIcons";

export default function Button({
  text,
  text2,
  variant = "primary",
  icon: CustomIcon,
  marginClass = "",
  onClick,
  type = "button",
  href,
  disabled,
}) {
  const FileDownload = TechIcons["fileDownload"];
  const ExternalLinkIcon = TechIcons["externalLink"];

  /* ==========================================================================
     ULTIMATE FLUID RESPONSIVE CLAMP SYSTEM (Navbar Uniformity Context)
     ========================================================================== */
  const baseStyles = `
    font-button-u 
    flex items-center justify-center 
    rounded-[clamp(1.5rem,4vw,2.5rem)]
    py-[clamp(0.55rem,1.8vw,0.875rem)] 
    px-[clamp(1.15rem,3.5vw,2rem)] 
    gap-[clamp(0.4rem,1.5vw,1rem)]
    font-normal tracking-wide 
    transition-all duration-300 ease-in-out 
    hover:scale-105 active:scale-95 
    focus:outline-none 
    w-full min-[400px]:w-auto 
    group cursor-pointer
  `;

  /* ==========================================================================
     SYNCED DESIGN VARIANTS (Direct Navbar Visual Mapping)
     ========================================================================== */
  const variants = {
    primary:
      "bg-brand-cyan text-black hover:bg-bg-primary hover:text-brand-cyan",

    secondary:
      "bg-bg-nav text-text-dim border border-border-subtle/30 hover:bg-bg-hover-dim/80 hover:text-text-main shadow-[0_10px_40px_rgba(0,0,0,0.05)]",
  };

  const iconClasses =
    "w-[clamp(1rem,2.8vw,1.35rem)] h-[clamp(1rem,2.8vw,1.35rem)] transition-transform duration-300 transform group-hover:translate-x-[clamp(2px,0.5vw,5px)]";

  return (
    <a
      href={href}
      target={text === "All Projects" ? "" : "_blank"}
      rel="noreferrer"
      className="w-full btn-interactive flex justify-center items-center align-middle"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant] || variants.primary} ${marginClass} fade-down text-[clamp(0.9rem,2.2vw,1.25rem)]`}
      >
        <span className="whitespace-nowrap">{disabled ? text2 : text}</span>

        {/* Dynamic Synced Icon System */}
        {text === "Download CV" ? (
          <FileDownload />
        ) : text === "View Certificate PDF" ? (
          <ExternalLinkIcon />
        ) : CustomIcon ? (
          <CustomIcon className={iconClasses} />
        ) : (
          <LuChevronsRight className={iconClasses} />
        )}
      </button>
    </a>
  );
}
