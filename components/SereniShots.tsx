import { Reveal } from "@/components/Reveal";
import { ShotCard } from "@/components/ShotCard";
import { shots } from "@/lib/shots";

/**
 * SereniShots: booster shot add-ons shown below the main drip cards on the
 * services page. Each card links to its own detail page at /shots/[slug].
 */
export function SereniShots() {
  return (
    <section className="bg-bone">
      <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12">
        <div className="border-t border-ink/10 pt-12 md:pt-16 pb-16 md:pb-24">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl text-ink leading-[1.02] tracking-[-0.02em]">
              SereniShots
            </h2>
            <p className="mt-4 max-w-[62ch] text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
              Vitamin and wellness booster shots, available as an add-on to any
              visit.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-14">
            {shots.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <ShotCard shot={s} />
              </Reveal>
            ))}
          </div>

          <p className="mt-12 md:mt-16 max-w-[88ch] text-[11px] sm:text-xs leading-relaxed text-ink-muted/80 text-pretty">
            SereniShots are administered by licensed medical professionals. Some
            treatments, including Zofran (ondansetron), are provided only when
            clinically appropriate following a provider evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}
