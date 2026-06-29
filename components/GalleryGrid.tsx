"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { GalleryPhoto } from "@/lib/venue";

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  // Lightbox is desktop-only; phones just show the static grid.
  const [canOpen, setCanOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setCanOpen(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  const active = index === null ? null : photos[index];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {photos.map((photo, i) => {
          const tileClass =
            "group relative aspect-[4/3] overflow-hidden bg-paper-3";
          // eslint-disable-next-line @next/next/no-img-element
          const img = (
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
            />
          );
          return canOpen ? (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label="View photo"
              className={`${tileClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40`}
            >
              {img}
            </button>
          ) : (
            <div key={photo.src} className={tileClass}>
              {img}
            </div>
          );
        })}
      </div>

      {mounted &&
        active &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper"
            >
              <X size={26} />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper"
            >
              <CaretLeft size={26} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[86vh] max-w-[92vw] object-contain"
            />
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper"
            >
              <CaretRight size={26} />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
