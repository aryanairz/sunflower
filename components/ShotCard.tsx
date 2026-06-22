import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { Shot } from "@/lib/shots";

type Props = {
  shot: Shot;
};

export function ShotCard({ shot }: Props) {
  const { slug, name, tagline, price, image, imageClassName } = shot;
  return (
    <Link
      href={`/shots/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-bone-2 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bone-3">
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={`${name} booster shot, SereniDrip IV Hydration Edinburg TX`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out ${
              imageClassName ?? "group-hover:scale-[1.02]"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-sage-soft px-4 text-center">
            <span className="font-display font-light text-2xl text-sage leading-tight">
              {name}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 sm:px-6 pt-4 pb-5">
        <h3 className="font-display font-medium text-xl md:text-2xl text-ink leading-[1.1] tracking-[-0.01em]">
          {name}
        </h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2 max-w-[42ch]">
          {tagline}
        </p>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-ink/10" />
          <Plus
            size={18}
            weight="regular"
            className="text-sage shrink-0 transition-transform duration-300 group-hover:rotate-90"
          />
        </div>

        <div className="mt-4">
          <p className="font-display font-medium text-xl md:text-2xl text-sage leading-none">
            {price}
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.25em] text-ink-muted">
            Add-on shot
          </p>
        </div>
      </div>
    </Link>
  );
}
