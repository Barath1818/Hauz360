export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  // Wordmark inspired by the Hauz360 brand mark — thin geometric letterforms,
  // dark navy base with gold "U" and "O". No background plate.
  const base = light ? "text-white" : "text-[#1a2332]";
  return (
    <span
      className={`font-logo font-light tracking-[0.14em] text-2xl md:text-[28px] leading-none select-none whitespace-nowrap ${base} ${className}`}
      style={{ fontFamily: '"Jost", "Inter", sans-serif' }}
      aria-label="Hauz 360"
    >
      HA<span className="text-gold">U</span>Z<span className="ml-2">36</span><span className="text-gold">0</span>
    </span>
  );
}
