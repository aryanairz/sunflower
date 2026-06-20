"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
];

function isActive(pathname: string, href: string) {
  if (href === "/services") return pathname.startsWith("/services");
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
    <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 h-[72px] md:h-[84px] relative flex items-center justify-between gap-4 md:gap-8">
        {/* LEFT */}
        <Link href="/" aria-label="SereniDrip · IV Hydration — home" className="block md:mt-2">
          <Image
            src="/Images/SereniLogoNew.png"
            alt="SereniDrip · IV Hydration"
            width={360}
            height={84}
            priority
            className="logo-ink h-[48px] sm:h-[56px] md:h-[80px] w-auto object-contain"
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
                    ? "text-sage underline underline-offset-[8px] decoration-sage/50"
                    : "text-ink-muted hover:text-sage",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-ink p-2 -mr-2 transition-colors hover:text-sage"
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
            className="fixed inset-0 z-50 bg-bone"
          >
            <div className="h-[72px] px-4 sm:px-6 flex items-center justify-between border-b border-ink/10">
              <Link href="/" aria-label="SereniDrip" onClick={() => setOpen(false)}>
                <Image
                  src="/Images/SereniLogoNew.png"
                  alt="SereniDrip"
                  width={280}
                  height={64}
                  className="logo-ink h-[48px] sm:h-[56px] w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-ink p-2 -mr-2 transition-colors hover:text-sage"
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
                        active ? "text-sage" : "text-ink",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}

            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
