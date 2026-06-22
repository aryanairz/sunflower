import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ShotCard } from "@/components/ShotCard";
import { HeroZoom } from "@/components/HeroZoom";
import { JsonLd } from "@/components/JsonLd";
import { shots, getShot, getRelatedShots } from "@/lib/shots";
import { BOOKING_URL } from "@/lib/site";
import { pageMetadata, shotJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return shots.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getShot(slug);
  if (!s) return { title: "Shot Not Found" };
  return pageMetadata({
    title: `${s.name} Booster Shot | SereniDrip IV Hydration Edinburg, TX`,
    description: `${s.tagline}. ${s.name} booster shot at SereniDrip IV Hydration in Edinburg, TX, available as an add-on to any visit.`,
    path: `/shots/${s.slug}`,
    image: s.detailImage ?? s.image,
  });
}

export default async function ShotDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = getShot(slug);
  if (!s) notFound();

  const related = getRelatedShots(slug, 4);
  const heroSrc = s.detailImage ?? s.image;

  return (
    <main>
      <JsonLd data={shotJsonLd(s)} />
      <Nav />

      {/* SLIM HERO BANNER — name only */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] sm:h-[220px]">
          {heroSrc ? (
            <HeroZoom
              src={heroSrc}
              alt={`${s.name} booster shot at SereniDrip IV Hydration, Edinburg TX`}
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-sage to-sage-hover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/15" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-6 md:pb-8">
              <p className="text-[11px] uppercase tracking-eyebrow text-bone-2/80">
                SereniShots
              </p>
              <h1 className="mt-2 font-display font-light text-4xl sm:text-5xl md:text-6xl text-bone-2 leading-[1] tracking-[-0.01em]">
                {s.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INFO ROW — image left, details right */}
      <section className="bg-bone">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* LEFT — image (hidden below md) */}
            <div className="hidden md:block md:col-span-5">
              <div className="md:sticky md:top-28">
                <Reveal>
                  <div className="w-full max-w-[560px] aspect-square overflow-hidden rounded-2xl bg-bone-3 shadow-soft">
                    {s.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={s.image}
                        alt={`${s.name} booster shot, SereniDrip IV Hydration Edinburg TX`}
                        loading="eager"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-sage-soft px-6 text-center">
                        <span className="font-display font-light text-4xl text-sage leading-tight">
                          {s.name}
                        </span>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT — tagline, price, description, add-on note, BOOK */}
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-display font-light text-3xl sm:text-4xl text-ink leading-[1.05] tracking-[-0.015em]">
                  {s.tagline}
                </h2>
                <p className="mt-3 font-display font-medium text-2xl sm:text-3xl text-sage leading-none">
                  {s.price}
                </p>

                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-ink-muted">
                  <p>{s.description}</p>
                </div>
              </Reveal>

              {s.benefits && s.benefits.length > 0 && (
                <Reveal delay={0.1}>
                  <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-sage">
                    Benefits may include:
                  </p>
                  <ul className="mt-5">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="grid grid-cols-[24px_1fr] gap-4 items-center py-3 border-t border-ink/10"
                      >
                        <Check size={20} weight="regular" className="text-sage" />
                        <span className="text-ink text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal delay={0.15}>
                <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-sage">
                  Add-on shot
                </p>
                <p className="mt-3 text-base text-ink-muted leading-relaxed">
                  SereniShots are an add-on to any visit, not booked separately.
                  Book a visit and let our team know you would like to add this
                  shot. All shots are administered by licensed medical
                  professionals.
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-sage text-bone-2 uppercase tracking-button text-[11px] py-4 transition-colors hover:bg-sage-hover active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
                >
                  Book a visit
                </a>

                <p className="mt-6 text-xs text-ink-muted/80 leading-relaxed">
                  Some treatments, including Zofran (ondansetron), are provided
                  only when clinically appropriate following a provider
                  evaluation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-bone-3">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-ink leading-[1] tracking-[-0.02em] max-w-[20ch]">
              More SereniShots
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12 mt-10 md:mt-12">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <ShotCard shot={r} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block text-[11px] uppercase tracking-[0.22em] text-sage hover:text-sage-hover transition-colors"
            >
              See all services →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
