import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

// Shared shell for plain-text legal pages (Privacy, Terms). Matches the site's
// editorial styling; child <h2>/<p>/<a> are styled via the prose wrapper below.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Nav />

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-10 md:pb-14">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-[-0.01em] text-ink">
              {title}
            </h1>
            <p className="mt-5 text-[12px] uppercase tracking-label text-ink-soft">
              Last updated {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 border-t border-line">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <Reveal>
            <div className="space-y-10 text-ink-muted leading-[1.8] [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:text-ink [&_p+p]:mt-4 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent">
              {children}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
