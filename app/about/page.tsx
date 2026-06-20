import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamShowcase } from "@/components/TeamShowcase";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SereniDrip is a locally owned IV hydration studio in Edinburg, Texas. Licensed, considered, and never rushed.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* SECTION 1 — COMPACT HERO */}
      <section className="bg-bone">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <Reveal className="text-center">
            <p className="text-[11px] uppercase tracking-eyebrow text-sage">About SereniDrip</p>
            <h1 className="mt-5 font-display font-light text-5xl md:text-7xl text-ink leading-[1] tracking-[-0.025em] text-balance">
              Recharge. Restore. Revive.
            </h1>
            <p className="mt-8 mx-auto max-w-[58ch] text-ink-muted text-lg leading-relaxed text-pretty">
              SereniDrip is a locally owned IV hydration studio in Edinburg,
              Texas. Every treatment is administered by licensed professionals,
              by appointment, Monday through Saturday.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — OUR TEAM */}
      <TeamShowcase description="Every treatment at SereniDrip is administered by licensed and experienced professionals." />

      {/* SECTION 3 — CLOSING CTA */}
      <section className="bg-bone">
        <div className="max-w-[600px] mx-auto px-6 md:px-12 py-14 md:py-16 text-center">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl text-ink leading-[1] tracking-[-0.02em]">
              Come feel the difference.
            </h2>
            <Link
              href={BOOKING_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sage text-bone-2 uppercase tracking-button text-[11px] px-10 py-4 transition-colors hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
            >
              Book now
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
