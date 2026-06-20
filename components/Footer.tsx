import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone py-2 md:py-3">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-6">
        <Image
          src="/Images/SereniLogoNew.png"
          alt="SereniDrip · IV Hydration"
          width={300}
          height={68}
          className="logo-ink h-[40px] sm:h-[56px] md:h-[64px] w-auto object-contain"
        />
        <div className="hidden sm:block h-8 w-px bg-ink/15" />
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-ink-muted text-right">
          © 2026 SereniDrip · IV Hydration
        </p>
      </div>
    </footer>
  );
}
