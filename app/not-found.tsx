import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Sunflower Ranch",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Nav />
      <section className="flex flex-1 items-center bg-paper">
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-[-0.01em] text-ink">
            This page could not be found.
          </h1>
          <p className="mt-6 text-ink-muted text-lg leading-relaxed">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex items-center justify-center bg-ink text-paper text-[12px] uppercase tracking-label px-9 py-4 rounded-[4px] transition-transform transition-colors hover:bg-ink/85 active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
