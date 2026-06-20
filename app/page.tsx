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
    primary: "2001 W Trenton Rd, Spc 101 Unit 22",
    secondary: "Edinburg, TX 78539",
  },
  { Icon: Phone, label: "PHONE", primary: "+1 956 655 0055" },
  {
    Icon: EnvelopeSimple,
    label: "EMAIL",
    primary: "serenidripivhydration@gmail.com",
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
    name: "Raji Nair",
  },
  {
    quote:
      "The team talked through what I needed before we began. I walked out feeling calmer, lighter, and well cared for.",
    name: "Bob Cruz",
  },
  {
    quote:
      "A quiet, beautifully kept space. I came in worn out from travel and left feeling genuinely restored and clear-headed.",
    name: "Thomas Garcia",
  },
];

export default function HomePage() {
  const featuredFour = services.slice(0, 4);
  const featuredService = services.find((s) => s.slug === "myers-cocktail") ?? services[0];

  return (
    <main>
      <Nav />

      {/* HERO — bright split: text left, photo right */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="max-w-shell mx-auto grid lg:grid-cols-[1.05fr_1fr]">
          {/* TEXT */}
          <div className="order-2 lg:order-1 flex items-center px-5 sm:px-6 md:px-12 pt-9 pb-14 sm:py-20 lg:py-28">
            <div className="max-w-[560px]">
              <h1 className="font-display font-light text-[40px] sm:text-6xl md:text-7xl leading-[1] sm:leading-[0.98] tracking-[-0.02em] text-ink text-balance">
                A new <span className="italic text-sage pr-[0.06em]">you</span> awaits
              </h1>
              <p className="mt-5 sm:mt-6 max-w-[46ch] text-[15px] sm:text-lg leading-relaxed text-ink-muted text-pretty">
                Vitamins, fluids, and recovery blends delivered straight to your
                bloodstream — so you feel clearer, lighter, and more like
                yourself. Recharge, restore, revive.
              </p>

              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-7">
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-sage px-9 py-4 text-[11px] uppercase tracking-button text-bone-2 transition-colors hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
                >
                  Explore drips
                </Link>
              </div>

            </div>
          </div>

          {/* PHOTO */}
          <div className="order-1 lg:order-2 relative min-h-[42vh] sm:min-h-[52vh] lg:min-h-[88vh] overflow-hidden">
            <HeroZoom
              src="/Images/Alphonso.jpg"
              alt="Inside the SereniDrip IV hydration studio"
              priority
            />
            {/* desktop: fade into the left text panel */}
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-bone via-transparent to-transparent" />
            {/* mobile: soft fade into the bone panel below */}
            <div className="absolute inset-x-0 bottom-0 h-20 lg:hidden bg-gradient-to-b from-transparent to-bone" />
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="bg-bone">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
            <Reveal className="md:col-span-7">
              <h2 className="font-display font-light text-[32px] sm:text-4xl md:text-5xl text-ink leading-[1.05] tracking-[-0.015em] text-balance">
                A studio for steady restoration.
              </h2>
              <div className="mt-8 md:mt-10 max-w-[60ch] space-y-5 text-ink-muted text-base md:text-lg leading-relaxed">
                <p>
                  SereniDrip is an Edinburg IV hydration studio built around one idea — that feeling restored shouldn&rsquo;t be complicated. Our licensed team delivers vitamins, fluids, and recovery blends directly to your bloodstream, where they work immediately.
                </p>
                <p>
                  Every visit begins with a brief medical intake and ends with you feeling clearer, lighter, and more like yourself. By appointment, Monday through Saturday.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-5">
              <div className="rounded-2xl border border-ink/[0.08] bg-bone-2 shadow-soft p-6 sm:p-8 space-y-6">
                {contactItems.map(({ Icon, label, primary, secondary }) => (
                  <div key={label} className="flex gap-4">
                    <Icon
                      size={22}
                      weight="regular"
                      className="text-sage shrink-0 mt-[2px]"
                    />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-sage">
                        {label}
                      </p>
                      <p className="mt-1 text-ink text-base leading-[1.35]">
                        {primary}
                      </p>
                      {secondary ? (
                        <p className="text-ink-muted text-base leading-[1.35]">
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
      <section className="bg-bone-3">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
            <Reveal className="md:col-span-7">
              <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-ink leading-[1] tracking-[-0.02em]">
                Services at SereniDrip
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:text-right">
              <Link
                href="/services"
                className="inline-block text-[11px] uppercase tracking-[0.22em] text-sage hover:text-sage-hover transition-colors"
              >
                See all services →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-16">
            {featuredFour.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.05}
                className={i >= 2 ? "hidden sm:block" : undefined}
              >
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE */}
      <section className="bg-bone">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/myers2.png"
              alt="The Myers' Cocktail IV blend"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-14 md:py-20">
            <Reveal className="max-w-[520px]">
              <p className="text-[11px] uppercase tracking-eyebrow text-sage">
                Featured service
              </p>
              <h3 className="mt-4 md:mt-6 font-display font-light text-4xl sm:text-5xl md:text-6xl text-ink leading-[1] tracking-[-0.02em]">
                The Myers&rsquo; Cocktail
              </h3>
              <p className="mt-4 md:mt-6 text-[11px] uppercase tracking-[0.22em] text-sage">
                From $100
              </p>
              <p className="mt-6 md:mt-8 max-w-[40ch] text-base md:text-lg leading-relaxed text-ink-muted">
                A classic blend of magnesium, B-Complex, and Vitamin C — designed to support immune health, energy, and stress recovery. A 45-minute session.
              </p>
              <Link
                href={`/services/${featuredService.slug}`}
                className="mt-8 md:mt-10 inline-flex items-center justify-center rounded-full bg-sage px-9 py-4 text-[11px] uppercase tracking-button text-bone-2 transition-colors hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                Discover
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bone-3">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-ink leading-[1] tracking-[-0.02em] max-w-[20ch]">
              From those who return.
            </h2>
          </Reveal>

          {/* PLACEHOLDER testimonials — replace with real client reviews before publishing. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16 items-stretch">
            {testimonials.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="h-full"
              >
                <figure className="h-full flex flex-col rounded-2xl border border-ink/[0.08] bg-bone-2 shadow-soft px-6 py-6 md:px-7 md:py-7">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        size={13}
                        weight="fill"
                        className="text-sage"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display font-light text-lg md:text-xl text-ink leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-5">
                    <div className="h-px w-12 bg-sage/40" />
                    <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                      {t.name}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
