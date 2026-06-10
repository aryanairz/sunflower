import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServicesShell } from "@/components/ServicesShell";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — SereniDrip · IV Hydration",
  description:
    "Every IV drip and wellness shot at SereniDrip — hydration, immunity, recovery, beauty, and more — in one place.",
};

export default function ServicesIndexPage() {
  const featured = getService("myers-cocktail")!;

  return (
    <main>
      <Nav />
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-28">
          <ServicesShell featured={featured} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
