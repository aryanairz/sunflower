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

      {/* HEADER PHOTO */}
      <section className="relative min-h-[22dvh] md:min-h-[30dvh] overflow-hidden">
        <HeroZoom
          src={s.detailImage ?? s.image}
          alt={s.title}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

        <div className="relative min-h-[22dvh] md:min-h-[30dvh] flex items-end">
          <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-8 md:pb-12">
            <div className="max-w-[800px]">
              <h1 className="font-display font-light text-[40px] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-[0.01em]">
                {s.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-8 md:pt-12 pb-16 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* LEFT */}
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-cream leading-[1] tracking-[0.01em] max-w-[20ch]">
                  {s.headline}
                </h2>
                <div className="mt-8 md:mt-10 max-w-[60ch] space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-cream-muted">
                  <p>{s.paragraphs[0]}</p>
                  <p>{s.paragraphs[1]}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-12 md:mt-16 text-[11px] uppercase tracking-[0.25em] text-gold">
                  What&rsquo;s included
                </p>
                <ul className="mt-6 max-w-[55ch]">
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
                <p className="mt-5 max-w-[55ch] text-xs text-cream-muted">
                  Every treatment includes a brief medical intake and is
                  administered by a licensed professional.
                </p>
              </Reveal>
            </div>

            {/* RIGHT booking panel */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-32 bg-ink-2 px-6 sm:px-8 md:px-10 py-8 md:py-9">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                  Book this service
                </p>
                <p className="mt-4 font-display font-normal text-4xl sm:text-5xl text-gold leading-none">
                  {s.priceMain}
                </p>

                <a
                  href="tel:9566550055"
                  className="mt-7 block bg-gold text-ink uppercase tracking-[0.2em] text-[10px] sm:text-[11px] py-4 text-center hover:bg-gold-hover transition-colors"
                >
                  CALL TO BOOK · 956 655 0055
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
