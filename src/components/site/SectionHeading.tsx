interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-4`}>
          <span className="h-px w-10 bg-gold" />
          <span className={`text-xs tracking-[0.25em] uppercase ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</span>
          <span className="h-px w-10 bg-gold" />
        </div>
      )}
      <h2 className={`font-display text-4xl md:text-5xl leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
