import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Escape Spa & Salon",
  description:
    "Escape is a women-owned spa & salon in Pharr, Texas. Quiet, considered, and never rushed since 2014.",
};

const values: Array<{ numeral: string; title: string; body: string }> = [
  {
    numeral: "I",
    title: "Time, given fully.",
    body: "Every session runs its full scheduled length. Treatments are never shortened to fit additional clients into the day.",
  },
  {
    numeral: "II",
    title: "Hands, not products.",
    body: "Our practice is built around skilled bodywork. Product upselling and add-ons are not part of how our therapists are trained or compensated.",
  },
  {
    numeral: "III",
    title: "Open every day.",
    body: "We are open Sunday through Saturday, including holidays and evenings. Care should be available when it is needed.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16">
          <Reveal>
            <h1 className="font-display font-light text-[40px] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1] tracking-[0.01em] max-w-[18ch]">
              A neighborhood escape, since 2014.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="bg-ink">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[640px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/facepaintrelaxing.jpg"
              alt="Inside the Escape studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-16 md:py-32">
            <Reveal className="max-w-[60ch] space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-cream-muted">
              <p>
                Escape was founded in 2014 by a small group of women who wanted to build the kind of spa they themselves would want to visit — quiet, considered, and never rushed.
              </p>
              <p>
                Over the past decade, we&rsquo;ve grown from a single massage room into a full-service studio offering massage, cupping, skincare, waxing, and salon services. The team has expanded. The intent hasn&rsquo;t.
              </p>
              <p>
                We&rsquo;re still women-owned. We&rsquo;re still in the same building on Expressway 83. Most of our therapists have been with us for years. And we&rsquo;re still open every day of the week, because relaxation shouldn&rsquo;t keep business hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-28">
          <Reveal>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
              Three things we hold to.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10 md:mt-16">
            {values.map((v, i) => (
              <Reveal key={v.numeral} delay={i * 0.08}>
                <p className="font-display font-light text-5xl md:text-6xl text-gold leading-none">
                  {v.numeral}
                </p>
                <h3 className="mt-5 md:mt-6 font-display font-normal text-2xl text-cream leading-[1.1]">
                  {v.title}
                </h3>
                <p className="mt-4 text-cream-muted leading-relaxed max-w-[40ch]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
