import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Sunflower Ranch",
  description:
    "A family-owned outdoor event venue in Edinburg, Texas, serving the Rio Grande Valley. Pool, shaded palapa, and spacious grounds for celebrations across the RGV.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* HEADER */}
      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
          <Reveal className="max-w-md">
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-[-0.01em] text-ink">
              About Us
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-paper-2 border-y border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/sunflower.jpg"
                  alt="Sunflower Ranch in Edinburg, Texas"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:pl-4">
              <div className="space-y-6 text-ink-muted text-lg leading-[1.8]">
                <p>
                  Sunflower Ranch began with a simple love for bringing people
                  together. What started as a family&rsquo;s passion for hosting
                  grew, little by little, into one of Edinburg&rsquo;s favorite
                  places to celebrate the moments that matter most.
                </p>
                <p>
                  We are proud to be locally owned and family-run. To us, this is
                  more than a venue. Every event that happens here feels personal,
                  and we treat each one with the same care we would give our own
                  family&rsquo;s celebrations. When you book with us, you are not
                  just renting a space. You are trusting us with a memory, and
                  that is something we never take lightly.
                </p>
                <p>
                  From quinceañeras and weddings to birthdays, graduations, and
                  quiet family gatherings, our outdoor space sets the scene for it
                  all. With a sparkling pool, a shaded palapa, and room to gather
                  under the open sky, the day becomes yours to shape. We handle
                  the setting so you can focus on what really matters: the people
                  around you and the moments you are there to celebrate.
                </p>
                <p>
                  We would love to be part of your next celebration. Reach out,
                  tell us what you have in mind, and we will do everything we can
                  to help bring it to life.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WIDE IMAGE */}
      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 md:py-28">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/palapaimage.jpg"
                alt="The pool and covered palapa at Sunflower Ranch"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-2 border-t border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-24 md:py-28 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.12] tracking-[-0.01em] text-ink">
              Come see the grounds.
            </h2>
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
