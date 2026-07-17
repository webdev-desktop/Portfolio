export default function CodeTags({ tag }) {
  return (
    <span
      className={`font-mono text-[clamp(0.72rem,1.5vw,0.85rem)] text-brand-cyan block font-normal select-none ${tag.includes("/") ? "mt-[clamp(0.3rem,0.8vw,0.5rem)]" : "mb-[clamp(0.3rem,0.8vw,0.5rem)]"} `}
    >
      &lt;{tag}&gt;
    </span>
  );
}
