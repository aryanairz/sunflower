import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroZoom } from "@/components/HeroZoom";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

type ContactItem = {
  Icon: typeof MapPin;
  label: string;
  primary: string;
  secondary?: string;
};

const contactItems: ContactItem[] = [
  {
    Icon: MapPin,
    label: "LOCATION",
    primary: "1105 Tamarack Ave",
    secondary: "McAllen, TX 78501",
  },
  { Icon: Phone, label: "PHONE", primary: "+1 956 655 0055" },
  {
    Icon: EnvelopeSimple,
    label: "EMAIL",
    primary: "hello@serenidrip.com",
  },
  {
    Icon: Clock,
    label: "HOURS",
    primary: "Mon – Sat",
    secondary: "9 AM – 6 PM · By appointment",
  },
];

/* PLACEHOLDER testimonials — replace with real client reviews before publishing. */
const testimonials = [
  {
    quote:
      "Calm, clean, professional from the moment I walked in. I left feeling sharper and lighter than I have in months.",
    name: "[CLIENT NAME]",
  },
  {
    quote:
      "The team took the time to talk through what I needed before anything began. Easy to recommend.",
    name: "[CLIENT NAME]",
  },
  {
    quote:
      "Quiet, beautifully kept space. I came in tired from travel and walked out genuinely restored.",
    name: "[CLIENT NAME]",
  },
];

export default function HomePage() {
  const featuredFour = services.slice(0, 4);
  const featuredService = services.find((s) => s.slug === "myers-cocktail") ?? services[0];

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <HeroZoom
          src="/Images/Alphonso.jpg"
          alt="Inside SereniDrip · IV Hydration studio"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

        <div className="relative min-h-[100dvh] flex items-center">
          <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-[720px] mx-auto text-center">
              <h1 className="font-display font-light text-[44px] sm:text-6xl md:text-8xl leading-[0.95] tracking-[0.01em] text-cream">
                A NEW{" "}
                <span className="font-display italic font-light">
                  YOU
                </span>{" "}
                AWAITS
              </h1>
              <p className="mt-6 md:mt-8 max-w-[520px] mx-auto text-[11px] sm:text-[13px] md:text-sm uppercase tracking-[0.2em] text-cream-muted">
                Recharge · Restore · Revive
              </p>
              <Link
                href="/services"
                className="mt-8 md:mt-10 inline-block bg-gold text-ink uppercase tracking-[0.2em] text-[11px] px-10 sm:px-12 py-4 hover:bg-gold-hover transition-colors"
              >
                DISCOVER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-28">
          <Reveal>
            <h2 className="font-display font-light italic text-[32px] sm:text-4xl md:text-5xl text-gold leading-[1.05] tracking-[0.01em]">
              A studio for steady restoration.
            </h2>
          </Reveal>

          {/* BODY + CONTACT */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
            <Reveal delay={0.05} className="md:col-span-7">
              <div className="max-w-[60ch] space-y-5 text-cream-muted text-base md:text-lg leading-relaxed">
                <p>
                  SereniDrip is a McAllen IV hydration studio built around one idea — that feeling restored shouldn&rsquo;t be complicated. Our licensed team delivers vitamins, fluids, and recovery blends directly to your bloodstream, where they work immediately.
                </p>
                <p>
                  Every visit begins with a brief medical intake and ends with you feeling clearer, lighter, and more like yourself. By appointment, Monday through Saturday.
                </p>
              </div>

              <Link
                href="/services"
                className="mt-8 inline-block border border-gold text-gold uppercase tracking-[0.2em] text-[11px] px-10 py-4 hover:bg-gold hover:text-ink transition-colors"
              >
                SERVICES
              </Link>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-5">
              <div className="space-y-5">
                {contactItems.map(({ Icon, label, primary, secondary }) => (
                  <div key={label} className="flex gap-4">
                    <Icon
                      size={24}
                      weight="thin"
                      className="text-gold shrink-0 mt-[2px]"
                    />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                        {label}
                      </p>
                      <p className="mt-1 text-cream text-base leading-[1.35]">
                        {primary}
                      </p>
                      {secondary ? (
                        <p className="text-cream text-base leading-[1.35]">
                          {secondary}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
            <Reveal className="md:col-span-5">
              <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-gold leading-[0.95] tracking-[0.01em]">
                SERVICES{" "}
                <span className="italic font-light">at</span> SERENIDRIP
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:text-right">
              <Link
                href="/services"
                className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-hover transition-colors"
              >
                SEE ALL SERVICES →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-16">
            {featuredFour.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE */}
      <section className="bg-ink-2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/myers2.png"
              alt="The Myers' Cocktail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-12 md:py-16">
            <Reveal className="max-w-[520px]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                Featured Service
              </p>
              <h3 className="mt-4 md:mt-6 font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
                The Myers&rsquo; Cocktail
              </h3>
              <p className="mt-4 md:mt-6 text-[11px] uppercase tracking-[0.25em] text-gold">
                FROM $100
              </p>
              <p className="mt-6 md:mt-8 max-w-[40ch] text-base md:text-lg leading-relaxed text-cream-muted">
                A classic blend of magnesium, B-Complex, and Vitamin C — designed to support immune health, energy, and stress recovery. A 45-minute session.
              </p>
              <Link
                href={`/services/${featuredService.slug}`}
                className="mt-8 md:mt-10 inline-block bg-gold text-ink uppercase tracking-[0.2em] text-[11px] px-10 py-4 hover:bg-gold-hover transition-colors"
              >
                DISCOVER
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-10 md:pt-14 pb-12 md:pb-24">
          <Reveal>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em] max-w-[20ch]">
              From those who return.
            </h2>
          </Reveal>

          {/* PLACEHOLDER testimonials — replace with real client reviews before publishing. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10 md:mt-16 items-stretch">
            {testimonials.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="h-full flex flex-col"
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      size={12}
                      weight="fill"
                      className="text-gold"
                    />
                  ))}
                </div>
                <blockquote className="mt-6 font-display italic font-normal text-xl md:text-2xl text-cream leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto pt-8">
                  <div className="h-px w-12 bg-gold/40" />
                  <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-cream-muted">
                    {t.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
