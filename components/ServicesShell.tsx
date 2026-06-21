import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, type Service } from "@/lib/services";

type Props = {
  featured: Service;
};

export function ServicesShell({ featured }: Props) {
  return (
    <div>
      {/* FEATURED BANNER — full-width */}
      <Reveal>
        <Link
          href={`/services/${featured.slug}`}
          className="group block relative overflow-hidden rounded-3xl bg-bone-3 shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
        >
          <div className="relative aspect-[3/2] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.detailImage ?? featured.image}
              alt={`${featured.title} IV drip, SereniDrip IV Hydration Edinburg TX`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/45 to-ink/85" />

            <div className="absolute inset-0 flex items-center justify-end px-5 sm:px-8 md:px-16">
              <div className="max-w-[260px] sm:max-w-[320px] md:max-w-[360px] text-left">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-bone-2/90">
                  Featured service
                </p>
                <h2 className="mt-3 sm:mt-4 font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bone-2 leading-[0.98] tracking-[-0.01em]">
                  <span className="italic">Myers&rsquo;</span>
                  <br />
                  Cocktail
                </h2>
                <p className="mt-4 sm:mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-bone-2/80">
                  From $169
                </p>
                <span className="mt-5 sm:mt-8 inline-flex items-center justify-center rounded-full bg-bone-2 text-ink uppercase tracking-button text-[10px] sm:text-[11px] px-7 sm:px-9 py-3 sm:py-4 transition-colors group-hover:bg-sage group-hover:text-bone-2">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Reveal>

      {/* FULL-WIDTH GRID — smaller cards, more per row */}
      <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-14">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 0.05}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
