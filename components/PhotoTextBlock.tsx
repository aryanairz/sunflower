import { Reveal } from "@/components/Reveal";
import type { PhotoBlock } from "@/lib/venue";

// Large photo + text, alternating sides down the page.
export function PhotoTextBlock({
  block,
  reverse = false,
}: {
  block: PhotoBlock;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
      <Reveal className={reverse ? "md:order-2" : "md:order-1"}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.image}
            alt={block.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className={reverse ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6"}
      >
        <h2 className="font-serif text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] text-ink">
          {block.title}
        </h2>
        <p className="mt-5 max-w-[46ch] text-ink-muted leading-[1.75]">
          {block.body}
        </p>
      </Reveal>
    </div>
  );
}
