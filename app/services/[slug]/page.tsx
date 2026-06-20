import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { HeroZoom } from "@/components/HeroZoom";
import { services, getService, getRelatedServices } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Services" };
  return {
    title: s.title,
    description: s.cardDesc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = getRelatedServices(slug, 3);

  return (
    <main>
      <Nav />

      {/* SLIM HERO BANNER — name only */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] sm:h-[220px]">
          <HeroZoom src={s.detailImage ?? s.image} alt={s.title} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6 md:px-12 pb-6 md:pb-8">
              <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
                {s.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INFO ROW — image left, details right */}
      <section className="bg-ink">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* LEFT — image, stays put on scroll */}
            <div className="md:col-span-6">
              <div className="md:sticky md:top-28">
                <Reveal>
                  <div className="max-w-[520px] aspect-square overflow-hidden rounded-2xl bg-ink-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT — tagline, price, description, included, BOOK */}
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="font-display font-light text-3xl sm:text-4xl text-cream leading-[1.05] tracking-[0.01em]">
                  {s.headline}
                </h2>
                <p className="mt-3 font-display font-normal text-2xl sm:text-3xl text-gold leading-none">
                  {s.priceMain}
                </p>

                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-cream-muted">
                  <p>{s.paragraphs[0]}</p>
                  <p>{s.paragraphs[1]}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-gold">
                  What&rsquo;s included
                </p>
                <ul className="mt-5">
                  {s.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="grid grid-cols-[24px_1fr] gap-4 items-center py-3 border-t border-gold/15"
                    >
                      <Check size={20} weight="thin" className="text-gold" />
                      <span className="text-cream text-base">{inc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-cream-muted">
                  Every treatment includes a brief medical intake and is
                  administered by a licensed professional.
                </p>

                <button
                  type="button"
                  className="mt-8 w-full bg-gold text-ink uppercase tracking-[0.2em] text-[11px] py-4 hover:bg-gold-hover transition-colors"
                >
                  BOOK NOW
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-16 md:pb-28">
          <Reveal>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-cream leading-[1] tracking-[0.01em] max-w-[20ch]">
              Explore more
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 mt-10 md:mt-12">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <ServiceCard service={r} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-hover transition-colors"
            >
              SEE ALL SERVICES →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
