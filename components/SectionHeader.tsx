import { Reveal } from "@/components/Reveal";

// Centered editorial section header: a short accent rule, an optional small
// label, a serif heading (with an optional accent second line), and intro copy.
export function SectionHeader({
  label,
  title,
  accentTitle,
  intro,
  align = "center",
  className = "",
}: {
  label?: string;
  title: string;
  accentTitle?: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      <span
        className={`block h-px w-12 bg-accent ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {label && (
        <p className="mt-6 text-[12px] uppercase tracking-label text-ink-soft">
          {label}
        </p>
      )}
      <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.12] tracking-[-0.01em] text-ink">
        {title}
        {accentTitle && (
          <span className="block text-accent">{accentTitle}</span>
        )}
      </h2>
      {intro && (
        <p
          className={`mt-6 ${centered ? "mx-auto" : ""} max-w-[58ch] text-ink-muted text-lg leading-[1.8]`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
