import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | SereniDrip IV Hydration Edinburg, TX",
  description:
    "Answers to common questions about IV hydration therapy at SereniDrip in Edinburg, TX: location, pricing, appointments, and who administers treatments.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd()} />
      <Nav />

      {/* HERO */}
      <section className="bg-bone">
        <div className="max-w-[820px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-eyebrow text-sage">
              Frequently asked questions
            </p>
            <h1 className="mt-5 font-display font-light text-5xl md:text-7xl text-ink leading-[1] tracking-[-0.025em] text-balance">
              Good to know.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="bg-bone">
        <div className="max-w-[820px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <dl className="divide-y divide-ink/10">
            {FAQ_ITEMS.map((item, i) => (
              <Reveal key={item.question} delay={(i % 3) * 0.06}>
                <div className="py-7 md:py-9">
                  <dt className="font-display font-medium text-xl md:text-2xl text-ink leading-snug tracking-[-0.01em]">
                    {item.question}
                  </dt>
                  <dd className="mt-3 max-w-[64ch] text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
                    {item.answer}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <Footer />
    </main>
  );
}
