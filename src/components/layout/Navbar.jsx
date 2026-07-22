"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TechIcons from "@/components/UI/TechIcons.jsx";
import Tooltip from "../UI/Tooltip.jsx";

export default function Navbar() {
  const pathname = usePathname();

  // Nav Links
  const navLinks = [
    { iconKey: "profile", label: "Profile", path: "/" },
    { iconKey: "about", label: "About", path: "/about" },
    { iconKey: "skills", label: "Skills", path: "/skills" },
    { iconKey: "projects", label: "Projects", path: "/projects" },
    {
      iconKey: "education",
      label: "Education & Courses",
      path: "/education_and_courses",
    },
    { iconKey: "certificates", label: "Certificates", path: "/certificates" },
    { iconKey: "mail", label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed z-50 p-[clamp(0.4rem,1.5vw,0.6rem)] border border-border-subtle/50 backdrop-blur-3xl text-text-main rounded-full shadow-nav-glow transition-all duration-300 bottom-2 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:left-6 md:-translate-y-1/2 md:translate-x-0">
      <ul className="flex md:flex-col gap-[clamp(0.5rem,2vw,1rem)]">
        {navLinks.map((nav) => {
          const isActive =
            nav.path === "/" ? pathname === "/" : pathname.startsWith(nav.path);
          const IconComponent = TechIcons[nav.iconKey];

          return (
            <li key={nav.path} className="group relative list-none">
              <Link
                href={nav.path}
                prefetch={false}
                className={`flex h-[clamp(2.2rem,5vw,2.75rem)] w-[clamp(2.2rem,5vw,2.75rem)] items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:rotate-6 focus:outline-none ${
                  isActive
                    ? "bg-brand-cyan/20 text-brand-cyan-light"
                    : "hover:bg-bg-hover-dim/80 hover:text-text-main"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "text-brand-cyan-light" : "text-inherit"
                  }`}
                >
                  {IconComponent && (
                    <IconComponent className="w-[clamp(1.1rem,3vw,1.3rem)] h-[clamp(1.1rem,3vw,1.3rem)]" />
                  )}
                </div>

                {/* Mobile Dot Indicator */}
                <span
                  className={`absolute bottom-[clamp(0.2rem,0.8vw,0.35rem)] left-1/2 -translate-x-1/2 w-[clamp(3px,0.8vw,5px)] h-[clamp(3px,0.8vw,5px)] bg-brand-cyan-light rounded-full transition-all duration-700 ease-in-out ${isActive ? " opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                />
              </Link>

              <Tooltip text={nav.label} position="navbar" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
