import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

type Props = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

/**
 * Shared layout for legal pages (privacy, terms). Pass the page title and the
 * body content as children. Body paragraphs/headings inherit a readable prose
 * style from the container below.
 */
export function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Nav />

      <section className="flex-1 bg-bone">
        <div className="max-w-[760px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <Reveal>
            <h1 className="font-display font-light text-4xl md:text-6xl text-ink leading-[1.02] tracking-[-0.025em] text-balance">
              {title}
            </h1>
            {lastUpdated ? (
              <p className="mt-5 text-[11px] uppercase tracking-eyebrow text-sage">
                Last updated {lastUpdated}
              </p>
            ) : null}
          </Reveal>

          {/* Body. Paste content as <h2>/<h3>/<p>/<ul> inside the page. */}
          <div className="mt-10 md:mt-12 space-y-5 text-ink-muted text-base md:text-lg leading-relaxed text-pretty [&_h2]:font-display [&_h2]:font-light [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-ink [&_h2]:tracking-[-0.01em] [&_h2]:pt-6 [&_h3]:font-display [&_h3]:font-medium [&_h3]:text-xl [&_h3]:text-ink [&_h3]:pt-4 [&_a]:text-sage [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-ink [&_strong]:font-medium">
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
