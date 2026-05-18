"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/experiences", label: "EXPERIENCES" },
  { href: "/about", label: "ABOUT" },
];

function isActive(pathname: string, href: string) {
  if (href === "/experiences") return pathname.startsWith("/experiences");
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-ink border-b border-gold/15">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 h-[72px] md:h-[84px] relative flex items-center justify-between gap-4 md:gap-8">
        {/* LEFT */}
        <Link href="/" aria-label="Escape Spa & Salon — home" className="block md:mt-2">
          <Image
            src="/Images/escape-logo.png"
            alt="Escape Spa & Salon"
            width={360}
            height={84}
            priority
            className="h-[48px] sm:h-[56px] md:h-[80px] w-auto object-contain"
          />
        </Link>

        {/* CENTER — absolutely centered in the row, independent of left/right widths */}
        <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-base md:text-lg uppercase tracking-[0.22em] transition-colors",
                  active
                    ? "text-gold underline underline-offset-[8px] decoration-gold/60"
                    : "text-cream-muted hover:text-gold",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:9562000860"
            className="border border-gold text-gold uppercase tracking-[0.2em] text-[11px] px-5 py-3 hover:bg-gold hover:text-ink transition-colors"
          >
            BOOK
          </a>
        </div>

        {/* MOBILE hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-gold p-2 -mr-2"
        >
          <List size={28} weight="thin" />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-ink"
          >
            <div className="h-[72px] px-4 sm:px-6 flex items-center justify-between border-b border-gold/15">
              <Link href="/" aria-label="Escape Spa & Salon" onClick={() => setOpen(false)}>
                <Image
                  src="/Images/escape-logo.png"
                  alt="Escape Spa & Salon"
                  width={280}
                  height={64}
                  className="h-[48px] sm:h-[56px] w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-gold p-2 -mr-2"
              >
                <X size={28} weight="thin" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="px-6 pt-12 flex flex-col gap-8"
            >
              {links.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={l.href}
                      className={[
                        "block font-display text-4xl tracking-tight",
                        active ? "text-gold" : "text-cream",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pt-12"
              >
                <a
                  href="tel:9562000860"
                  className="block border border-gold text-gold uppercase tracking-[0.2em] text-xs px-6 py-4 text-center hover:bg-gold hover:text-ink transition-colors"
                >
                  BOOK
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
