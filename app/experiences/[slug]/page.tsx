import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ExperienceCard } from "@/components/ExperienceCard";
import { HeroZoom } from "@/components/HeroZoom";
import { experiences, getExperience, getRelatedExperiences } from "@/lib/experiences";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return { title: "Experience — Escape Spa & Salon" };
  return {
    title: `${exp.title} — Escape Spa & Salon`,
    description: exp.cardDesc,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const related = getRelatedExperiences(slug, 3);

  return (
    <main>
      <Nav />

      {/* HEADER PHOTO */}
      <section className="relative min-h-[60dvh] overflow-hidden">
        <HeroZoom
          src={exp.detailImage ?? exp.image}
          alt={exp.title}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

        <div className="relative min-h-[60dvh] flex items-end">
          <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-10 md:pb-16">
            <div className="max-w-[800px]">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream">
                Experience  ·  {exp.category}
              </p>
              <h1 className="mt-4 sm:mt-6 font-display font-light text-[40px] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-[0.01em]">
                {exp.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* LEFT */}
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                  About this experience
                </p>
                <h2 className="mt-6 md:mt-8 font-display font-light text-3xl sm:text-4xl md:text-5xl text-cream leading-[1] tracking-[0.01em] max-w-[20ch]">
                  {exp.headline}
                </h2>
                <div className="mt-8 md:mt-10 max-w-[60ch] space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-cream-muted">
                  <p>{exp.paragraphs[0]}</p>
                  <p>{exp.paragraphs[1]}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-12 md:mt-16 text-[11px] uppercase tracking-[0.25em] text-gold">
                  What&rsquo;s included
                </p>
                <ul className="mt-6 max-w-[55ch]">
                  {exp.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="grid grid-cols-[24px_1fr] gap-4 items-center py-3 border-t border-gold/15"
                    >
                      <Check size={20} weight="thin" className="text-gold" />
                      <span className="text-cream text-base">{inc}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* RIGHT booking panel */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-32 bg-ink-2 px-6 sm:px-8 md:px-10 py-10 md:py-12">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                  Book this experience
                </p>
                <p className="mt-5 md:mt-6 font-display font-normal text-4xl sm:text-5xl text-gold leading-none">
                  {exp.priceMain}
                </p>
                <p className="mt-3 md:mt-4 text-[11px] uppercase tracking-[0.25em] text-cream-muted">
                  {exp.priceSub}
                </p>

                <div className="h-px bg-gold/20 my-8 md:my-10" />

                <div>
                  {(
                    [
                      ["DURATION", exp.duration],
                      ["LOCATION", "Pharr, TX"],
                      ["WALK-INS", "Welcome"],
                    ] as Array<[string, string]>
                  ).map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[88px_1fr] py-3 border-t border-gold/15 first:border-t-0 items-baseline gap-4 md:gap-6"
                    >
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
                        {label}
                      </span>
                      <span className="text-cream text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:9562000860"
                  className="mt-10 md:mt-12 block bg-gold text-ink uppercase tracking-[0.2em] text-[10px] sm:text-[11px] py-4 text-center hover:bg-gold-hover transition-colors"
                >
                  CALL TO BOOK · 956 200 0860
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-16 md:pb-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              Explore more
            </p>
            <h2 className="mt-5 md:mt-6 font-display font-light text-3xl sm:text-4xl md:text-5xl text-cream leading-[1] tracking-[0.01em] max-w-[20ch]">
              Other experiences you might enjoy.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 mt-10 md:mt-12">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <ExperienceCard experience={r} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              href="/experiences"
              className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-hover transition-colors"
            >
              SEE ALL EXPERIENCES →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
