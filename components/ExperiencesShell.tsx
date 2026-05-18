"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ExperienceCard } from "@/components/ExperienceCard";
import {
  FILTER_LABELS,
  filterByLabel,
  type Experience,
  type FilterLabel,
} from "@/lib/experiences";

type Props = {
  featured: Experience;
};

export function ExperiencesShell({ featured }: Props) {
  const [active, setActive] = useState<FilterLabel>("See all");
  const filtered = filterByLabel(active);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,360px)_1fr] gap-10 md:gap-20 lg:gap-28 items-start">
      {/* LEFT — sticky title + category filters */}
      <aside className="md:sticky md:top-[120px]">
        <Reveal>
          <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl text-cream leading-[0.95] tracking-[0.01em]">
            EXPERIENCES
          </h1>
        </Reveal>

        <div className="mt-6 md:mt-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-cream-muted pb-3 md:pb-4">
            See products  ∨
          </p>
          <ul>
            {FILTER_LABELS.map((cat) => {
              const isActive = cat === active;
              return (
                <li
                  key={cat}
                  className="border-t border-gold/15 first:border-t-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(cat)}
                    className={[
                      "block w-full text-left py-3.5 md:py-4 text-sm md:text-base tracking-wide transition-colors",
                      isActive
                        ? "text-gold"
                        : "text-cream-muted hover:text-gold",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
            <li className="border-t border-gold/15" />
          </ul>
        </div>
      </aside>

      {/* RIGHT — featured + filtered grid */}
      <div>
        <Reveal>
          <Link
            href={`/experiences/${featured.slug}`}
            className="group block relative overflow-hidden bg-ink-2"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/50 to-ink/80" />

              <div className="absolute inset-0 flex items-center justify-end px-5 sm:px-8 md:px-16">
                <div className="max-w-[260px] sm:max-w-[320px] md:max-w-[360px] text-right">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream">
                    New Experience
                  </p>
                  <h2 className="mt-3 sm:mt-4 font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
                    <span className="italic">Cupping</span>
                    <br />
                    RITUAL
                  </h2>
                  <p className="mt-4 sm:mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-muted">
                    FROM $40
                  </p>
                  <span className="mt-5 sm:mt-8 inline-block bg-gold text-ink uppercase tracking-[0.2em] text-[10px] sm:text-[11px] px-6 sm:px-10 py-3 sm:py-4 group-hover:bg-gold-hover transition-colors">
                    DISCOVER
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 md:mt-16 min-h-[400px]">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-muted">
                No experiences in this category yet
              </p>
              <button
                type="button"
                onClick={() => setActive("See all")}
                className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-hover transition-colors"
              >
                SEE ALL EXPERIENCES →
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((exp) => (
                  <motion.div
                    key={exp.slug}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ExperienceCard experience={exp} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
