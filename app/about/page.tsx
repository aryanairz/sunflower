import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamShowcase } from "@/components/TeamShowcase";

export const metadata: Metadata = {
  title: "About",
  description:
    "SereniDrip is a locally owned IV hydration studio in McAllen, Texas. Licensed, considered, and never rushed.",
};

const steps: Array<{ number: string; title: string; body: string }> = [
  {
    number: "01",
    title: "Consultation",
    body: "Your visit begins with a brief medical intake. A licensed professional reviews your health history and discusses your needs for that day.",
  },
  {
    number: "02",
    title: "Your blend",
    body: "Based on your consultation, we recommend the appropriate treatment, whether hydration, immune support, recovery, or a vitamin supplement.",
  },
  {
    number: "03",
    title: "The session",
    body: "Your drip is administered while you relax in a private treatment chair. Most sessions are completed within 30 to 60 minutes.",
  },
  {
    number: "04",
    title: "Afterward",
    body: "Nutrients are delivered directly to the bloodstream for complete absorption. Many guests notice the effects the same day.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[70dvh] overflow-hidden">
        {/* Replace with warm IV studio / lifestyle photo, not nature stock */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/serenidrip-about-hero/1800/1200"
          alt="SereniDrip studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-16">
            <Reveal className="max-w-[800px]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream">
                About SereniDrip
              </p>
              <h1 className="mt-4 font-display font-light text-6xl md:text-8xl text-cream leading-[0.95] tracking-[0.01em]">
                Recharge. Restore. Revive.
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="bg-ink">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[640px]">
            {/* Replace with warm IV studio interior photo, not nature stock */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/serenidrip-studio-interior/1000/1200"
              alt="Inside the SereniDrip studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-16 md:py-32">
            <Reveal className="max-w-[60ch] space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-cream-muted">
              <p>
                SereniDrip provides professional IV hydration therapy to the Rio Grande Valley. Our focus is straightforward: licensed care, quality ingredients, and treatments tailored to each guest.
              </p>
              <p>
                Every appointment begins with a medical intake conducted by a licensed professional. Based on your health history and how you are feeling that day, we recommend the appropriate blend of fluids, vitamins, or recovery support, administered intravenously for complete absorption.
              </p>
              <p>
                SereniDrip is locally owned and operated at 1105 Tamarack Ave in McAllen. We serve guests by appointment, Monday through Saturday.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW A VISIT WORKS */}
      <section className="bg-ink-2">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="font-display font-light text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
              How a visit works.
            </h2>
            <p className="mt-6 max-w-[50ch] mx-auto text-lg leading-relaxed text-cream-muted">
              Each step of your visit is conducted by licensed professionals.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14 md:mt-16">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <p className="font-display font-light text-4xl text-gold leading-none">
                  {step.number}
                </p>
                <div className="h-px w-10 bg-gold/30 mt-4 mb-5" />
                <h3 className="font-display font-normal text-xl text-cream leading-[1.1]">
                  {step.title}
                </h3>
                <p className="mt-3 text-cream-muted text-base leading-relaxed">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <TeamShowcase description="Every treatment at SereniDrip is administered by licensed & experienced professionals." />

      <Footer />
    </main>
  );
}
