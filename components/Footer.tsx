import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink py-2 md:py-3">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-6">
        <Image
          src="/Images/escape-logo.png"
          alt="Escape Spa & Salon"
          width={300}
          height={68}
          className="h-[40px] sm:h-[56px] md:h-[64px] w-auto object-contain"
        />
        <div className="hidden sm:block h-8 w-px bg-gold/30" />
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-cream-muted text-right">
          © 2026 Escape Spa & Salon
        </p>
      </div>
    </footer>
  );
}
