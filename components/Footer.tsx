import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-7 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
        <Image
          src="/Images/SereniLogoNew.png"
          alt="SereniDrip · IV Hydration"
          width={300}
          height={68}
          className="logo-ink h-[40px] sm:h-[52px] md:h-[60px] w-auto object-contain"
        />

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <nav className="flex items-center gap-5 sm:gap-7">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] leading-none text-ink-muted transition-colors hover:text-sage"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:block h-4 w-px bg-ink/15" />

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] leading-none text-ink-muted text-center sm:text-right">
            © 2026 SereniDrip
          </p>
        </div>
      </div>
    </footer>
  );
}
