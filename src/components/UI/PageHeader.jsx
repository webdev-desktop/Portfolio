export default function PageHeader({
  title = "Title",
  subtitle = "I had the pleasure of working with these awesome projects",
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center select-none">
      {/* 1. Mouse Scroll Icon Animation & Line Container */}
      <div className="flex flex-col items-center gap-[clamp(0.5rem,1.2vw,0.75rem)] mb-[clamp(1rem,2vw,1.5rem)]">
        {/* Animated Mouse Indicator Shape */}
        <div className="w-6 h-9 border-2 border-brand-cyan rounded-full flex justify-center p-1.5 shadow-[0_0_10px_rgba(18,247,214,0.1)]">
          <div className="w-1 h-2 bg-brand-cyan rounded-full animate-bounce duration-1000" />
        </div>

        {/* Custom Connector Line with dynamic clamp height metric scaling */}
        <div className="relative flex flex-col items-center h-[clamp(2.5rem,5vw,4rem)] w-2">
          {/* Dashed Vertical Line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-white/40 h-full" />
          {/* Bottom Diamond Bullet Terminal Node */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border border-bg-primary" />
        </div>
      </div>

      {/* 2. Dynamic Component Heading Content Grid Area */}
      <div className="flex flex-col items-center max-w-xl px-[clamp(1rem,3vw,2rem)]">
        {/* Main Title Heading Element */}
        <h2 className="font-ubuntu font-medium text-[clamp(1.85rem,4.5vw,2.75rem)] text-brand-cyan tracking-wide mb-[clamp(0.5rem,1.2vw,0.75rem)] relative pb-[clamp(0.85rem,1.5vw,1.25rem)] uppercase">
          {title}

          {/* Cyan Node Custom Underline Bar Layer with responsive width scaling */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[clamp(6rem,14vw,8rem)] h-0.5 bg-brand-cyan">
            {/* Left Terminal Pin Joint Node */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-cyan rounded-full ring-4 ring-brand-cyan/20" />
            {/* Right Terminal Pin Joint Node */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-cyan rounded-full ring-4 ring-brand-cyan/20" />
          </div>
        </h2>

        {/* Technical IBM Subtitle Paragraph Block */}
        <p className="font-mono text-[clamp(11px,1.4vw,14px)] text-text-muted/80 tracking-normal mt-[clamp(0.5rem,1.2vw,1rem)] opacity-90 leading-relaxed capitalize">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
