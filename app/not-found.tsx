import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | SereniDrip IV Hydration",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Nav />

      <section className="flex flex-1 items-center bg-bone">
        <div className="max-w-[640px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <h1 className="font-display font-light text-5xl md:text-7xl text-ink leading-[1] tracking-[-0.025em] text-balance">
            This page wandered off.
          </h1>
          <p className="mt-7 mx-auto max-w-[48ch] text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
            The page you are looking for may have moved or no longer exists. Let
            us point you back to somewhere restorative.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-sage px-9 py-4 text-[11px] uppercase tracking-button text-bone-2 transition-colors hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
            >
              Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-ink/15 px-9 py-4 text-[11px] uppercase tracking-button text-ink transition-colors hover:border-sage/40 hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
            >
              View our drips
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
