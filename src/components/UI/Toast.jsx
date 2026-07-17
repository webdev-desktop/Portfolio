"use client";

import { useEffect } from "react";
import TechIcons from "./TechIcons";

const icons = {
  success: TechIcons.checkCircle,
  error: TechIcons.xCircle,
  warning: TechIcons.alertTriangle,
  info: TechIcons.about,
};

const styles = {
  success: {
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_35px_rgba(16,185,129,0.18)]",
    icon: "text-emerald-400",
    bar: "bg-emerald-400",
  },
  error: {
    border: "border-red-500/30",
    glow: "shadow-[0_0_35px_rgba(239,68,68,0.18)]",
    icon: "text-red-400",
    bar: "bg-red-400",
  },
  warning: {
    border: "border-amber-500/30",
    glow: "shadow-[0_0_35px_rgba(245,158,11,0.18)]",
    icon: "text-amber-400",
    bar: "bg-amber-400",
  },
  info: {
    border: "border-brand-cyan/30",
    glow: "shadow-[0_0_35px_rgba(18,247,214,0.18)]",
    icon: "text-brand-cyan",
    bar: "bg-brand-cyan",
  },
};

export default function Toast({
  id,
  title,
  message,
  type = "info",
  duration = 4000,
  onClose,
}) {
  const Icon = icons[type];
  const style = styles[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      className={`
        relative overflow-hidden
        w-[min(92vw,380px)]
        rounded-2xl
        border ${style.border}
        bg-[#1b2229]/85
        backdrop-blur-xl
        p-4
        ${style.glow}
        animate-[toastIn_0.35s_ease]
      `}
    >
      <div className="flex gap-3 items-start">
        <div className={`${style.icon} mt-0.5`}>
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h4 className="text-white font-semibold font-ubuntu">{title}</h4>

          <p className="text-text-dim text-sm mt-1 leading-relaxed">
            {message}
          </p>
        </div>

        <button
          onClick={() => onClose(id)}
          className="text-text-dim hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white/5">
        <div
          className={`h-full ${style.bar}`}
          style={{
            animation: `toastProgress ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
}
