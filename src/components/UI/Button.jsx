"use client";

import React from "react";
import { LuChevronsRight } from "react-icons/lu";

export default function Button({
  text,
  variant = "primary",
  icon: CustomIcon,
  marginClass = "",
  onClick,
  type = "button",
}) {
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
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${marginClass} text-[clamp(0.9rem,2.2vw,1.25rem)]`}
    >
      <span className="whitespace-nowrap">{text}</span>

      {/* Dynamic Synced Icon System */}
      {CustomIcon ? (
        <span className={iconClasses}>
          <CustomIcon className="w-full h-full" />
        </span>
      ) : (
        <LuChevronsRight className={iconClasses} />
      )}
    </button>
  );
}
