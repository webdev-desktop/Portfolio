export default function FloatingInput({
  label,
  name,
  type = "text",
  placeholder = " ",
  value,
  onChange,
  rows = 4,
  ...props
}) {
  const isTextarea = type === "textarea";

  return (
    <div className="relative w-full pt-5 group">
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          {...props}
          className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-text-main font-mono text-[clamp(13px,1.5vw,15px)] focus:outline-none focus:border-brand-cyan   resize-none transition-all duration-300 dynamic-scrollbar"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
          className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-text-main font-mono text-[clamp(13px,1.5vw,15px)] focus:outline-none focus:border-brand-cyan shadow-[0_1px_0_rgba(25,25,25,0)] transition-all duration-300"
        />
      )}

      {/* Dynamic Floating Label - Smooth Glass Integration */}
      <label
        className="absolute left-0 top-7 font-mono text-[clamp(13px,1.5vw,15px)] text-text-muted/40 tracking-wide pointer-events-none transition-all duration-300 ease-out 
        group-hover:text-[rgba(18,247,214,0.8)] 
        /* When Input/Textarea is focused */
        peer-focus:top-0 
        peer-focus:text-[clamp(11px,1.3vw,13px)] 
        peer-focus:text-brand-cyan 
        peer-focus:font-normal        
        /* When Input/Textarea has value inside (Fix) */
        peer-not-placeholder-shown:top-0 
        peer-not-placeholder-shown:text-[clamp(11px,1.3vw,13px)] 
        peer-not-placeholder-shown:text-brand-cyan
        peer-not-placeholder-shown:font-bold"
      >
        {label}
      </label>
    </div>
  );
}
