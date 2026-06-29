import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { MapLink } from "@/components/MapLink";
import { JsonLd } from "@/components/JsonLd";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_LINE,
  ADDRESS_CITY,
  ADDRESS_FULL,
  SOCIAL,
} from "@/lib/site";
import { pageMetadata, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Booking",
  description:
    "Call (956) 331-4450 or send an inquiry to book your event at Sunflower Ranch, an outdoor venue in Edinburg, TX serving the entire Rio Grande Valley.",
  path: "/contact",
});

const socials = [
  { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookLogo },
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: SOCIAL.tiktok, label: "TikTok", Icon: TiktokLogo },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <Nav />

      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-10 md:pb-14">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-[-0.01em] text-ink">
              Contact Us
            </h1>
            <p className="mt-6 max-w-[54ch] text-ink-muted text-lg leading-relaxed">
              Booking is handled by phone. Call (956) 331-4450 to check your
              date, or send a message below and we will be in touch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 border-t border-line">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5 lg:pl-6">
              <div className="space-y-9">
                <div className="flex gap-4">
                  <MapPin size={22} weight="regular" className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] uppercase tracking-label text-ink-muted">
                      Address
                    </p>
                    <MapLink query={ADDRESS_FULL} className="group mt-2 block">
                      <span className="block text-ink leading-[1.5] transition-colors group-hover:text-accent">
                        {ADDRESS_LINE}
                      </span>
                      <span className="block text-ink leading-[1.5] transition-colors group-hover:text-accent">
                        {ADDRESS_CITY}
                      </span>
                    </MapLink>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={22} weight="regular" className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] uppercase tracking-label text-ink-muted">
                      Phone
                    </p>
                    <a href={PHONE_HREF} className="mt-2 block font-serif text-2xl text-ink transition-colors hover:text-accent">
                      {PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <EnvelopeSimple size={22} weight="regular" className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] uppercase tracking-label text-ink-muted">
                      Email
                    </p>
                    <a href={EMAIL_HREF} className="mt-2 block break-words text-ink transition-colors hover:text-accent">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-line">
                  <p className="pt-7 text-[12px] uppercase tracking-label text-ink-muted">
                    Follow
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    {socials.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        <Icon size={18} weight="fill" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
