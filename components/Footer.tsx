import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12">
        <div className="py-3 md:py-4 flex flex-row items-center justify-between gap-3">
          <Image
            src="/Images/SereniLogoNew.png"
            alt="SereniDrip · IV Hydration"
            width={300}
            height={68}
            className="logo-ink h-[30px] sm:h-[36px] md:h-[40px] w-auto object-contain"
          />

          <div className="flex flex-row items-center gap-3 sm:gap-5">
            <nav className="flex items-center gap-4 sm:gap-6">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] leading-none text-ink-muted transition-colors hover:text-sage"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="h-3.5 w-px bg-ink/15" />

            <p className="whitespace-nowrap text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] leading-none text-ink-muted">
              © 2026 SereniDrip
            </p>
          </div>
        </div>

        <div className="border-t border-ink/10 py-2.5">
          <p className="mx-auto max-w-[110ch] text-center text-[10px] leading-snug text-ink-muted/80 text-pretty">
            Individual results may vary. This treatment is not intended to
            diagnose, treat, cure, or prevent any disease. All treatments are
            administered under medical supervision and may require a consultation
            to determine appropriateness.
          </p>
        </div>
      </div>
    </footer>
  );
}
