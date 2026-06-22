import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamShowcase } from "@/components/TeamShowcase";
import { BOOKING_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About SereniDrip | Licensed IV Hydration in Edinburg, TX",
  description:
    "SereniDrip is a locally owned IV hydration studio in Edinburg, TX, serving the Rio Grande Valley. Licensed nurses, considered care, never rushed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* SECTION 1 — COMPACT HERO */}
      <section className="bg-bone">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-14 md:py-20">
          <Reveal className="text-center">
            <h1 className="font-display font-light text-4xl md:text-6xl text-ink leading-[1] tracking-[-0.025em] text-balance">
              Recharge. Restore. Revive.
            </h1>
            <div className="mt-8 md:mt-10 mx-auto max-w-[760px] space-y-5 text-center text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
              <p>
                Welcome to SereniDrip IV Hydration, where wellness meets
                convenience. Whether you&rsquo;re looking to boost energy, recover
                faster, improve hydration, support immunity, or simply feel your
                best, our customized IV hydration therapies are designed with your
                health and wellness goals in mind.
              </p>
              <p>
                Our team of experienced medical professionals provides safe,
                personalized treatments in a relaxing environment, bringing
                premium hydration and wellness solutions directly to you.
              </p>
              <p>
                At SereniDrip, we believe feeling your best shouldn&rsquo;t be
                complicated. Let us help you restore balance, replenish essential
                nutrients, and leave feeling refreshed, energized, and ready for
                whatever comes next.
              </p>
              <p>
                Your journey to better wellness starts with a drip. Book your
                appointment today and experience the SereniDrip difference.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — OUR TEAM */}
      <TeamShowcase description="SereniDrip IV Hydration operates under the medical supervision of our Medical Director, Dr. Emily Farias, MD (Texas Medical License W1781), in accordance with Texas Medical Board regulations. Every treatment at SereniDrip is administered by licensed and experienced professionals." />

      {/* SECTION 3 — CLOSING CTA */}
      <section className="bg-bone">
        <div className="max-w-[600px] mx-auto px-6 md:px-12 py-14 md:py-16 text-center">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl text-ink leading-[1] tracking-[-0.02em]">
              Come feel the difference.
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sage text-bone-2 uppercase tracking-button text-[11px] px-10 py-4 transition-colors hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
            >
              Book now
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
