import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServicesShell } from "@/components/ServicesShell";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IV Drips & Vitamin Therapy | SereniDrip Edinburg, TX",
  description:
    "Explore IV drips, vitamin therapy, and wellness shots at SereniDrip in Edinburg, TX. Hydration, immunity, recovery, beauty, and energy blends by appointment.",
  path: "/services",
});

export default function ServicesIndexPage() {
  const featured = getService("myers-cocktail")!;

  return (
    <main>
      <Nav />
      <section className="bg-bone">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-14">
          <div className="mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-eyebrow text-sage">
              IV drips and vitamin therapy
            </p>
            <h1 className="mt-4 font-display font-light text-4xl md:text-6xl text-ink leading-[1] tracking-[-0.02em] text-balance">
              Our drip menu
            </h1>
            <p className="mt-6 max-w-[62ch] text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
              From hydration and immunity to recovery and beauty, every IV
              therapy blend at SereniDrip is administered by licensed nurses in
              Edinburg, TX, and across the Rio Grande Valley.
            </p>
          </div>
          <ServicesShell featured={featured} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
