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
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/lib/experiences";

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
    primary: "216 E. Expressway 83, Suite H",
    secondary: "Pharr, TX 78577",
  },
  { Icon: Phone, label: "PHONE", primary: "+1 956 200 0860" },
  {
    Icon: EnvelopeSimple,
    label: "EMAIL",
    primary: "escapespasalon08@gmail.com",
  },
  {
    Icon: Clock,
    label: "HOURS",
    primary: "Open daily",
    secondary: "8 AM – 9 PM",
  },
];

const testimonials = [
  {
    quote:
      "I had an amazing full-body massage with cupping and it was one of the best experiences I've ever had. The atmosphere was incredibly relaxing, calm, and welcoming from start to finish. I left feeling refreshed, loosened up, and completely rejuvenated.",
    name: "MATT HOCK",
  },
  {
    quote:
      "Came in for a couples massage and Nelly and Gloria took care of us. They took their time and did a great job. I was having lots of pain and now I'm feeling much better. A very wonderful massage — thank you Nelly and Gloria.",
    name: "TOMAS HERNANDEZ",
  },
  {
    quote:
      "This was my first visit, and I was really impressed with the professional and clean environment. The staff was courteous and answered all of my questions. My therapist gave me exactly what I needed with the sports massage. I'll definitely be coming back.",
    name: "EDWARDO DELGADO",
  },
];

export default function HomePage() {
  const featuredFour = experiences.slice(0, 4);

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <HeroZoom
          src="/Images/Alphonso.jpg"
          alt="Inside Escape Spa & Salon"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

        <div className="relative min-h-[100dvh] flex items-center">
          <div className="w-full max-w-shell mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-[720px] mx-auto text-center">
              <h1 className="font-display font-light text-[44px] xs:text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-[0.01em] text-cream">
                THE PLEASURE{" "}
                <span className="font-display italic font-light text-[36px] xs:text-4xl sm:text-5xl md:text-7xl">
                  of
                </span>{" "}
                [ESCAPE]
              </h1>
              <p className="mt-6 md:mt-8 max-w-[520px] mx-auto text-[11px] sm:text-[13px] md:text-sm uppercase tracking-[0.2em] text-cream-muted">
                Enjoy a deeply restorative experience
              </p>
              <Link
                href="/experiences"
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
              A studio for slow hours.
            </h2>
          </Reveal>

          {/* BODY + CONTACT */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
            <Reveal delay={0.05} className="md:col-span-7">
              <div className="max-w-[60ch] space-y-5 text-cream-muted text-base md:text-lg leading-relaxed">
                <p>
                  Set inside a quiet studio off Expressway 83, Escape has welcomed clients from across the Rio Grande Valley for over a decade. Therapists work in candlelit rooms with warm towels, organic oils, and a deep respect for the body&rsquo;s request to slow down.
                </p>
                <p>
                  Founded by women, run by women. Open every day from 8am to 9pm. Walk-ins welcome, appointments encouraged.
                </p>
              </div>

              <Link
                href="/experiences"
                className="mt-8 inline-block border border-gold text-gold uppercase tracking-[0.2em] text-[11px] px-10 py-4 hover:bg-gold hover:text-ink transition-colors"
              >
                EXPERIENCES
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

      {/* EXPERIENCES PREVIEW */}
      <section className="bg-ink">
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
            <Reveal className="md:col-span-5">
              <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-gold leading-[0.95] tracking-[0.01em]">
                EXPERIENCES{" "}
                <span className="italic font-light">at</span> ESCAPE
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:text-right">
              <Link
                href="/experiences"
                className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-hover transition-colors"
              >
                SEE ALL EXPERIENCES →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-16">
            {featuredFour.map((exp, i) => (
              <Reveal key={exp.slug} delay={i * 0.05}>
                <ExperienceCard experience={exp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RITUAL */}
      <section className="bg-ink-2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[640px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/CUPPING1.png"
              alt="The Cupping Ritual"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 sm:px-8 md:px-20 py-16 md:py-32">
            <Reveal className="max-w-[520px]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                New Experience
              </p>
              <h3 className="mt-4 md:mt-6 font-display font-light text-4xl sm:text-5xl md:text-6xl text-cream leading-[0.95] tracking-[0.01em]">
                The Cupping Ritual
              </h3>
              <p className="mt-4 md:mt-6 text-[11px] uppercase tracking-[0.25em] text-gold">
                FROM $80
              </p>
              <p className="mt-6 md:mt-8 max-w-[40ch] text-base md:text-lg leading-relaxed text-cream-muted">
                Free for new clients on their first visit. Combine with a Relaxing Package to feel the full effect — heat, pressure, release, and rest.
              </p>
              <Link
                href="/experiences/cupping-therapy"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10 md:mt-16 items-stretch">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
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
