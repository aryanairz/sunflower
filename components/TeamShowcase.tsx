import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { team as defaultMembers, type TeamMember } from "@/lib/team";

type Props = {
  title?: string;
  description?: string;
  members?: TeamMember[];
};

export function TeamShowcase({
  title = "Our Team",
  description = "Every treatment at SereniDrip is administered by licensed and experienced professionals.",
  members = defaultMembers,
}: Props) {
  return (
    <section className="bg-ink-2">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-24">
        <div className="max-w-[1300px] mx-auto">
          {/* HEADER */}
          <div className="max-w-[640px]">
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
              {title}
            </h2>
            <p className="mt-6 max-w-[52ch] text-base md:text-lg leading-relaxed text-cream-muted">
              {description}
            </p>
          </div>

          {/* TEAM GRID — clickable cards, hover reveals "About <name>" */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1150px] mx-auto">
            {members.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <Link href={`/team/${m.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/10 bg-ink-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={m.name}
                      style={{ objectPosition: m.objectPosition ?? "center" }}
                      className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-display font-light text-2xl md:text-3xl text-cream">
                        About {m.firstName}
                      </span>
                    </div>
                  </div>

                  {/* Name + role + credential */}
                  <div className="mt-5 text-center">
                    <h3 className="font-display font-normal text-2xl text-cream leading-tight transition-colors duration-300 group-hover:text-gold-hover">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold">
                      {m.role}
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-cream-muted">
                      {m.credential}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
