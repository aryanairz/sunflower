"use client";

import { motion } from "framer-motion";

export type TeamMember = {
  name: string;
  role?: string;
  imageSrc: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  members?: TeamMember[];
};

// Real staff portraits in /public/Images. Roles intentionally omitted for now
// — add a `role` to any member and the gold label renders automatically.
const defaultMembers: TeamMember[] = [
  {
    name: "Kat Into",
    imageSrc: "/Images/kat.jpeg",
  },
  {
    name: "Oralia Diaz",
    imageSrc: "/Images/oralia.jpeg",
  },
  {
    name: "Cori Tobias",
    imageSrc: "/Images/cori.jpeg",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export function TeamShowcase({
  eyebrow,
  title = "Our Team",
  description = "Licensed professionals who treat every guest like a neighbor — because here, you are one.",
  members = defaultMembers,
}: Props) {
  return (
    <section className="bg-ink-2">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-24">
        {/* HEADER */}
        <div className="max-w-[640px]">
          {eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`${
              eyebrow ? "mt-5 " : ""
            }font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]`}
          >
            {title}
          </h2>
          <p className="mt-6 max-w-[52ch] text-base md:text-lg leading-relaxed text-cream-muted">
            {description}
          </p>
        </div>

        {/* TEAM GRID — arch-top cards */}
        <motion.div
          className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {members.map((m) => (
            <motion.div
              key={m.name}
              variants={card}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-[300px] md:h-[380px] overflow-hidden rounded-t-[120px] border border-gold/15 bg-ink-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.imageSrc}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <h3 className="font-display font-normal text-xl md:text-2xl text-cream leading-tight">
                    {m.name}
                  </h3>
                  {m.role ? (
                    <p className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gold">
                      {m.role}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
