import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoTextBlock } from "@/components/PhotoTextBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { JsonLd } from "@/components/JsonLd";
import { photoBlocks, amenities, eventTypes } from "@/lib/venue";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <Nav />

      {/* HERO */}
      <section className="relative isolate min-h-[100dvh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/Images/hero1.jpg"
          alt="Sunflower Ranch outdoor event venue in Edinburg, Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-ink/55" />

        <div className="relative z-10 max-w-3xl px-6 py-28">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium text-paper leading-[1.04] tracking-[-0.01em]">
            Sunflower Ranch
          </h1>
          <p className="mt-6 mx-auto max-w-[42ch] text-paper/90 text-base sm:text-lg leading-relaxed">
            A private outdoor venue set around a pool and shaded palapa, for the
            celebrations worth gathering for.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-9 inline-flex items-center justify-center border border-paper/70 text-paper text-[12px] uppercase tracking-label px-9 py-4 transition-colors hover:bg-paper hover:text-ink"
          >
            Call to Book
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-32">
          <SectionHeader
            title="Sunflower Ranch"
            intro="A family-owned outdoor venue in Edinburg, Texas. The grounds are built around a sparkling pool and a large covered palapa, with room for guests, music, and the moments worth gathering for. Bring your people. We will set the scene."
          />
        </div>
      </section>

      {/* ALTERNATING PHOTO + TEXT */}
      <section className="bg-paper-2 border-y border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-32">
          <SectionHeader
            title="A Closer Look"
            intro="Three spaces that set the tone for the day, from the shaded palapa to the pool and the open lawn."
          />
          <div className="mt-16 md:mt-24 space-y-24 md:space-y-32">
            {photoBlocks.map((block, i) => (
              <PhotoTextBlock
                key={block.title}
                block={block}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-32">
          <SectionHeader
            title="Amenities"
            intro="Everything you need on site, so you can focus on the celebration and not the logistics."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.08} className="text-center">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ink leading-snug">
                  {a.title}
                </h3>
                <p className="mt-3 mx-auto max-w-[32ch] text-[15px] text-ink-muted leading-relaxed">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS WE HOST */}
      <section className="bg-paper-2 border-y border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-32">
          <SectionHeader
            title="Events We Host"
            intro="From milestone parties to quiet family gatherings, the grounds adapt to the day you have in mind."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {eventTypes.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.08}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-serif text-2xl text-ink leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-ink-muted leading-relaxed">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.12] tracking-[-0.01em] text-ink">
              Plan your celebration at Sunflower Ranch.
            </h2>
            <p className="mt-6 text-ink-muted text-lg leading-relaxed">
              Booking is handled by phone. Call us to check your date and walk
              through the details.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:justify-center items-center gap-5">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-ink text-paper text-[12px] uppercase tracking-label px-10 py-4 rounded-[4px] transition-transform transition-colors hover:bg-ink/85 active:scale-[0.98]"
              >
                Call to Book
              </a>
              <a
                href={PHONE_HREF}
                className="font-serif text-2xl md:text-3xl text-ink transition-colors hover:text-accent"
              >
                {PHONE}
              </a>
            </div>
            <p className="mt-8 text-[13px] uppercase tracking-label text-ink-soft">
              Prefer to write?{" "}
              <Link href="/contact" className="text-ink border-b border-ink/40 pb-0.5 hover:border-ink">
                Send a message
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
