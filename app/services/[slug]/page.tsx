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
import { BOOKING_URL } from "@/lib/site";

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
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/15" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-6 md:pb-8">
              <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-bone-2 leading-[1] tracking-[-0.01em]">
                {s.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INFO ROW — image left, details right */}
      <section className="bg-bone">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* LEFT — image, stays put on scroll (hidden below md) */}
            <div className="hidden md:block md:col-span-5">
              <div className="md:sticky md:top-28">
                <Reveal>
                  <div className="w-full max-w-[560px] aspect-square overflow-hidden rounded-2xl bg-bone-3 shadow-soft">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="eager"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT — tagline, price, description, included, BOOK */}
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-display font-light text-3xl sm:text-4xl text-ink leading-[1.05] tracking-[-0.015em]">
                  {s.headline}
                </h2>
                <p className="mt-3 font-display font-medium text-2xl sm:text-3xl text-sage leading-none">
                  {s.priceMain}
                </p>

                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-ink-muted">
                  <p>{s.paragraphs[0]}</p>
                  <p>{s.paragraphs[1]}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-sage">
                  Benefits may include:
                </p>
                <ul className="mt-5">
                  {s.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="grid grid-cols-[24px_1fr] gap-4 items-center py-3 border-t border-ink/10"
                    >
                      <Check size={20} weight="regular" className="text-sage" />
                      <span className="text-ink text-base">{inc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink-muted">
                  Every treatment includes a brief medical intake and is
                  administered by a licensed professional.
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-sage text-bone-2 uppercase tracking-button text-[11px] py-4 transition-colors hover:bg-sage-hover active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
                >
                  Book now
                </a>
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
