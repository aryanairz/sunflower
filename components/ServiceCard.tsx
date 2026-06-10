import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  const { slug, title, cardDesc, priceMain, priceSub, image } = service;
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex h-full flex-col overflow-hidden border border-cream/[0.07] bg-ink-2/40 transition-colors duration-300 hover:border-gold/30 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-ink-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 sm:px-6 pt-5 pb-7">
        <h3 className="font-display font-normal text-xl md:text-2xl text-cream leading-[1.1]">
          {title}
        </h3>
        <p className="mt-4 text-sm text-cream-muted leading-relaxed line-clamp-2 max-w-[42ch]">
          {cardDesc}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex-1 h-px bg-gold/30" />
          <Plus
            size={18}
            weight="thin"
            className="text-gold shrink-0 transition-transform duration-300 group-hover:rotate-90"
          />
        </div>

        <div className="mt-5">
          <p className="font-display font-normal text-2xl md:text-3xl text-gold leading-none">
            {priceMain}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-cream-muted">
            {priceSub}
          </p>
        </div>
      </div>
    </Link>
  );
}
