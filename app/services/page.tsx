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
          <ServicesShell featured={featured} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
