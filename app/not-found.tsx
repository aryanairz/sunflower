import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Nav />
      <section className="flex flex-1 items-center justify-center bg-paper">
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="font-serif text-7xl md:text-8xl leading-none text-ink">
            404
          </p>
          <h1 className="mt-6 font-serif text-2xl md:text-3xl text-ink">
            This page could not be found.
          </h1>
          <p className="mt-4 text-ink-muted leading-relaxed">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center bg-ink text-paper text-[12px] uppercase tracking-label px-9 py-3 rounded-[4px] transition-transform transition-colors hover:bg-ink/85 active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <footer className="bg-paper border-t border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] uppercase tracking-label text-ink-soft">
          <p>© 2026 Sunflower Ranch</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
