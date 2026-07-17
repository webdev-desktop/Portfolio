"use client";
import Image from "next/image";
import Button from "@/components/UI/Button.jsx";
import CodeTags from "@/components/UI/CodeTags.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import profile from "../JSON/profile.json";

import { useEffect, useState } from "react";
import {
  fadeDownUp,
  fadeLeftRight,
  fadeRightLeft,
} from "@/components/UI/FadeEffects";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const AtIcon = TechIcons["at"];
  const MailIcon = TechIcons["mail"];
  const LocationIcon = TechIcons["location"];
  const MobileIcon = TechIcons["mobile"];
  const FileDownload = TechIcons["fileDownload"];
  const ExperienceIcon = TechIcons["seed"];

  const style = {
    li: "flex items-center gap-3 font-mono text-[clamp(0.72rem,1.2vw,0.85rem)] text-white group/item transition-all duration-500 ease-out",
    icon: "text-[#00f2fe] w-5 h-5 shrink-0",
    hover:
      "hover:text-[#00f2fe] transition-all duration-200 hover:scale-110 cursor-pointer",
  };

  return (
    <>
      <WaterMark text={profile?.developerType} />
      <section className="text-text-main pt-2 flex-1 flex max-lg:pt-3 flex-col items-center justify-center relative overflow-hidden px-[clamp(1rem,4.5vw,4rem)] min-[767px]:pl-[clamp(6rem,9vw,8rem)] max-[767px]:py-[clamp(4rem,10vw,7.5rem)]">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-[clamp(1rem,4.5vw,4rem)] z-10">
          {/* LEFT COLUMN PROFILE CARD ELEMENT */}
          <div
            className={`relative w-full max-w-80 bg-[#1e252b] p-8 flex flex-col items-center border border-white/10 shadow-2xl rounded-tl-[100px] rounded-br-[100px] mb-[clamp(1.5rem,4vw,0rem)] lg:mb-0 transform hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,242,254,0.15)] group/card transition-all duration-700 ease-in-out ${fadeLeftRight(isVisible)}`}
          >
            {/* Cyan Accent Border Line */}
            <div className="absolute inset-[0.1px] rounded-tl-[100px] rounded-br-[100px] border-t border-l border-[#00f2fe] pointer-events-none opacity-70 group-hover/card:opacity-100 transition-opacity duration-300" />

            {/* Avatar Container with Hover Scale */}
            <div className="relative size-24 rounded-full border-2 border-[#00f2fe] overflow-hidden mb-4 shadow-lg bg-[#283139] transform group-hover/card:scale-105 transition-transform duration-300">
              <img
                src={profile?.profile}
                alt={`${profile?.name} Profile`}
                className="object-cover h-full w-full transform group-hover/card:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Name and Designation (Using Stagger effect based on visibility) */}
            <h2
              className={`font-ubuntu font-normal text-[clamp(1.4rem,3vw,2rem)] tracking-wide text-white mb-1 text-center ${fadeDownUp(isVisible)} ${style.hover}`}
            >
              {profile?.name?.split(" ")[0]}
            </h2>

            <p
              className={`font-mono text-[clamp(0.7rem,1.4vw,0.9rem)] text-gray-400 mb-8 text-center font-light uppercase hover:tracking-wider ${fadeDownUp(isVisible)} ${style.hover}`}
            >
              {profile?.developerType} developer
            </p>

            {/* Info List */}
            <ul className="w-full flex flex-col gap-4 mb-6">
              <a href={`${profile?.socialLinks?.github}`} target="_blank">
                <li
                  className={`${style.li} ${style.hover} ${fadeDownUp(isVisible)}`}
                >
                  <AtIcon className={style.icon} />
                  <span>{profile?.name}</span>
                </li>
              </a>

              <a href={`tel:+91${profile?.mobile}`}>
                <li
                  className={`${style.li} ${style.hover} ${fadeDownUp(isVisible)}`}
                >
                  <MobileIcon className={style.icon} />
                  <span>
                    +91 {profile?.mobile?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </span>
                </li>
              </a>

              <a href={`mailto:${profile?.email}`}>
                <li
                  className={`${style.li} ${style.hover} ${fadeDownUp(isVisible)}`}
                >
                  <MailIcon className={style.icon} />
                  <span>{profile?.email}</span>
                </li>
              </a>

              <a
                href={`https://maps.google.com/?q=${profile?.location}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li
                  className={`${style.li} ${style.hover} ${fadeDownUp(isVisible)}`}
                >
                  <LocationIcon className={style.icon} />
                  <span>{profile?.location}</span>
                </li>
              </a>

              <li
                className={`${style.li} ${style.hover} ${fadeDownUp(isVisible)}`}
              >
                <ExperienceIcon className={style.icon} />
                <span>{profile?.experience}</span>
              </li>
            </ul>

            {/* Download CV Button */}
            <a
              href={profile?.resume}
              download={`${profile?.name}_Resume.pdf`}
              target="_blank"
              className={`w-full block btn-interactive ${fadeDownUp(isVisible)}`}
            >
              <Button text="Download CV" icon={FileDownload} />
            </a>
          </div>

          {/* RIGHT COLUMN MAIN TYPOGRAPHY HEADER TEXT BLOCK */}
          <div
            className={`flex-1 flex flex-col items-start w-full relative ${fadeRightLeft(isVisible)}`}
          >
            <div className={`relative w-full mb-2 ${fadeDownUp(isVisible)}`}>
              <CodeTags tag={"h1"} />
              <h1
                className={`font-ubuntu text-[clamp(1.9rem,6vw,5rem)] leading-[1.15] text-text-main pl-[clamp(0.4rem,1.8vw,1.5rem)]`}
              >
                Hey
                <br />
                I'm
                <span className="text-brand-cyan pl-2 font-semibold inline-block transition-all duration-300 ease-out hover:tracking-wider">
                  {profile?.name?.split(" ")[0]}
                </span>
                ,<br />
                {profile?.developerType} Developer
              </h1>
              <CodeTags tag={"/h1"} />
            </div>

            <div className={`relative w-full mb-1 ${fadeDownUp(isVisible)}`}>
              <CodeTags tag={"p"} />
              <p className="font-ubuntu font-light text-[clamp(0.85rem,1.8vw,1.1rem)] leading-relaxed text-text-dim max-w-2xl pl-[clamp(0.4rem,1.8vw,1.5rem)]">
                {profile?.bio}
              </p>
              <CodeTags tag={"/p"} />
            </div>

            {/* Let's Talk Link */}
            <div
              className={`pl-[clamp(0.4rem,1.8vw,1.5rem)] group transition-all duration-500 ease-out ${fadeDownUp(isVisible)}`}
            >
              <a
                href={`mailto:${profile?.email}`}
                className="flex items-center gap-[clamp(0.5rem,1.2vw,0.75rem)] font-ubuntu font-normal text-[clamp(1rem,2vw,1.5rem)] text-brand-cyan transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2"
              >
                <span>Let's Talk</span>
                <div className="transition-all duration-200 ease-out group-hover:rotate-18 group-hover:scale-120">
                  <MailIcon className="w-[clamp(1.15rem,2.8vw,1.65rem)] h-[clamp(1.15rem,2.8vw,1.65rem)]" />
                </div>
              </a>
            </div>

            {/* Floating Badge (Using custom floating class) */}
            <div
              className={`absolute right-0 top-0 hidden sm:flex flex-col items-center justify-center p-[clamp(1rem,2vw,1.25rem)] rounded-2xl border border-white/10  min-w-[clamp(160px,15vw,195px)] shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] group select-none transition-all duration-500 overflow-hidden hover:scale-105 animate-float `}
            >
              <div className="absolute inset-0 rounded-2xl bg-[#00f2fe]/5 backdrop-blur-xl pointer-events-none" />

              <div className="relative flex items-center gap-3 mb-2.5 opacity-80 group-hover:opacity-100">
                <div className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                  <TechIcons.nextjs size={16} />
                </div>
                {/* React spinning icon converted to native Tailwind infinite spin */}
                <div className="text-[#00f2fe] drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] animate-[spin_12s_linear_infinite]">
                  <TechIcons.react size={18} />
                </div>
              </div>

              <p className="relative font-mono text-[clamp(0.6rem,0.9vw,0.75rem)] tracking-widest text-center uppercase leading-relaxed">
                <span className="text-gray-400 font-medium block text-[clamp(0.55rem,0.8vw,0.7rem)] lowercase tracking-normal mb-0.5">
                  specialized in
                </span>

                <span className="text-text-main font-bold block tracking-wider mb-1">
                  {profile?.specializedTags?.join(" / ")}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 mt-1.5 px-3 py-1 rounded-full text-[clamp(0.55rem,0.8vw,0.7rem)] font-sans font-medium tracking-normal normal-case border transition-transform duration-200 ease-out hover:scale-105 ${
                    profile?.workType?.includes("Open to Work")
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-[#00f2fe]/5 border-[#00f2fe]/20 text-[#00f2fe]"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        profile?.workType?.includes("Open to Work")
                          ? "bg-emerald-400"
                          : "bg-[#00f2fe]"
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                        profile?.workType?.includes("Open to Work")
                          ? "bg-emerald-500"
                          : "bg-[#00f2fe]"
                      }`}
                    />
                  </span>

                  <span>
                    {profile?.workType?.includes("Open to Work")
                      ? "Open To Work"
                      : "Active Now"}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
