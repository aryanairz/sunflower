import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamShowcase } from "@/components/TeamShowcase";

export const metadata: Metadata = {
  title: "About · SereniDrip · IV Hydration",
  description:
    "SereniDrip is a locally owned IV hydration studio in McAllen, Texas. Licensed, considered, and never rushed.",
};

const values: Array<{ numeral: string; title: string; body: string }> = [
  {
    numeral: "I",
    title: "Care, given fully.",
    body: "Every visit begins with a medical intake and a conversation. We take the time to match the right drip to how you actually feel that day.",
  },
  {
    numeral: "II",
    title: "Licensed, always.",
    body: "Every treatment is administered by licensed professionals using sterile, single-use equipment. No shortcuts on safety.",
  },
  {
    numeral: "III",
    title: "Local, by design.",
    body: "We're a locally owned McAllen studio. Our guests are our neighbors — and we treat them that way.",
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              About SereniDrip
            </p>
            <h1 className="mt-5 md:mt-6 font-display font-light text-[40px] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1] tracking-[0.01em] max-w-[18ch]">
              Recharge. Restore. Revive.
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
              src="/Images/Alphonso.jpg"
              alt="Inside the SereniDrip studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-16 md:py-32">
            <Reveal className="max-w-[60ch] space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-cream-muted">
              <p>
                SereniDrip was founded to bring honest, professional IV hydration to the Rio Grande Valley — no gimmicks, no pressure, just care.
              </p>
              <p>
                Our licensed team treats every guest individually, beginning with a brief medical intake and a conversation about how you&rsquo;re feeling and what your body needs. From there, the right blend of fluids, vitamins, or recovery support — delivered directly to your bloodstream for full absorption.
              </p>
              <p>
                We&rsquo;re a locally owned McAllen studio at 1105 Tamarack Ave, by appointment Monday through Saturday. We see our guests as neighbors, and we treat them that way.
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

      {/* TEAM */}
      <TeamShowcase />

      <Footer />
    </main>
  );
}
