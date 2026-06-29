import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_LINE,
  ADDRESS_CITY,
  SOCIAL,
} from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookLogo },
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: SOCIAL.tiktok, label: "TikTok", Icon: TiktokLogo },
];

export function Footer() {
  return (
    <footer className="bg-paper border-t border-line">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/Images/Sunflower12-trans.png"
              alt="Sunflower Ranch"
              width={420}
              height={140}
              className="h-14 w-auto object-contain"
            />
            <address className="mt-6 not-italic text-ink-muted leading-relaxed">
              {ADDRESS_LINE}
              <br />
              {ADDRESS_CITY}
            </address>
          </div>

          <nav className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-label text-accent">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-label text-accent">
              Contact
            </p>
            <div className="mt-5 space-y-3">
              <p>
                <a
                  href={PHONE_HREF}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {PHONE}
                </a>
              </p>
              <p>
                <a
                  href={EMAIL_HREF}
                  className="break-words text-ink-muted transition-colors hover:text-ink"
                >
                  {EMAIL}
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <Icon size={18} weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] uppercase tracking-label text-ink-soft">
          <p>© 2026 Sunflower Ranch</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
