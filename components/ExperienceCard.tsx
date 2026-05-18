import Link from "next/link";
import Image from "next/image";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { Experience } from "@/lib/experiences";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  const { slug, title, cardDesc, priceMain, priceSub, image } = experience;
  return (
    <Link
      href={`/experiences/${slug}`}
      className="group block focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-ink-2">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="pt-6 pb-10">
        <h3 className="font-display font-normal text-2xl md:text-3xl text-cream leading-[1.1]">
          {title}
        </h3>
        <p className="mt-5 text-sm text-cream-muted leading-relaxed line-clamp-2 max-w-[42ch]">
          {cardDesc}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gold/30" />
          <Plus
            size={20}
            weight="thin"
            className="text-gold shrink-0 transition-transform duration-300 group-hover:rotate-90"
          />
        </div>

        <div className="mt-6">
          <p className="font-display font-normal text-3xl md:text-4xl text-gold leading-none">
            {priceMain}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-cream-muted">
            {priceSub}
          </p>
        </div>
      </div>
    </Link>
  );
}
