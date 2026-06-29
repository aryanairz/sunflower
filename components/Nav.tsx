"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { PHONE_HREF } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40">
      {/* Bar — the blur lives here only, so it can't trap the fixed menu below. */}
      <div className="bg-paper/90 backdrop-blur-md border-b border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 h-[76px] md:h-[88px] flex items-center justify-between gap-4">
          <Link href="/" aria-label="Sunflower Ranch, home" className="shrink-0">
            <Image
              src="/Images/Sunflower12-trans.png"
              alt="Sunflower Ranch"
              width={420}
              height={140}
              priority
              className="h-[58px] sm:h-[66px] md:h-[74px] w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "text-[13px] uppercase tracking-label transition-colors",
                    active ? "text-ink" : "text-ink-muted hover:text-ink",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden -mr-2 p-2 text-ink"
          >
            <List size={28} weight="regular" />
          </button>
        </div>
      </div>

      {/* Mobile menu — sibling of the blurred bar, so `inset-0` maps to the viewport. */}
      <div
        className={[
          "fixed inset-0 z-50 bg-paper md:hidden transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="h-[76px] px-5 flex items-center justify-between border-b border-line">
          <Image
            src="/Images/Sunflower12-trans.png"
            alt="Sunflower Ranch"
            width={420}
            height={140}
            className="h-[50px] w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="-mr-2 p-2 text-ink"
          >
            <X size={28} weight="regular" />
          </button>
        </div>
        <nav className="flex flex-col px-6 pt-8">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "border-b border-line py-5 font-serif text-3xl",
                  active ? "text-accent" : "text-ink",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={PHONE_HREF}
            className="mt-8 text-[13px] uppercase tracking-label text-ink border border-ink/25 px-5 py-4 text-center transition-colors hover:bg-ink hover:text-paper active:scale-[0.98]"
          >
            Call to Book
          </a>
        </nav>
      </div>
    </header>
  );
}
