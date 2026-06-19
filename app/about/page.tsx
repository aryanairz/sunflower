import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamShowcase } from "@/components/TeamShowcase";

export const metadata: Metadata = {
  title: "About",
  description:
    "SereniDrip is a locally owned IV hydration studio in McAllen, Texas. Licensed, considered, and never rushed.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* SECTION 1 — COMPACT HERO */}
      <section className="bg-ink">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <Reveal className="text-center">
            <h1 className="font-display font-light text-5xl md:text-7xl text-cream leading-[0.95] tracking-[0.01em]">
              Recharge. Restore. Revive.
            </h1>
            <p className="mt-8 mx-auto max-w-[58ch] text-cream-muted text-lg leading-relaxed">
              SereniDrip is a locally owned IV hydration studio in McAllen,
              Texas. Every treatment is administered by licensed professionals,
              by appointment, Monday through Saturday.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — OUR TEAM */}
      <TeamShowcase description="Every treatment at SereniDrip is administered by licensed and experienced professionals." />

      {/* SECTION 3 — CLOSING CTA */}
      <section className="bg-ink">
        <div className="max-w-[600px] mx-auto px-6 md:px-12 py-24 text-center">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl text-cream leading-[0.95] tracking-[0.01em]">
              Come feel the difference.
            </h2>
            <p className="mt-4 text-cream-muted">
              1105 Tamarack Ave, McAllen. By appointment.
            </p>
            <Link
              href="tel:9566550055"
              className="mt-8 inline-block bg-gold text-ink uppercase tracking-[0.2em] text-[11px] px-10 py-4 hover:bg-gold-hover transition-colors"
            >
              CALL TO BOOK
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
