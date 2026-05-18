import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ExperiencesShell } from "@/components/ExperiencesShell";
import { getExperience } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences — Escape Spa & Salon",
  description:
    "Every treatment at Escape — massage, cupping, skincare, waxing, and salon — in one place.",
};

export default function ExperiencesIndexPage() {
  const featured = getExperience("cupping-therapy")!;

  return (
    <main>
      <Nav />
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-28">
          <ExperiencesShell featured={featured} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
