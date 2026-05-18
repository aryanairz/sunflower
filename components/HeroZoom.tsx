"use client";

import { memo } from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

function HeroZoomBase({ src, alt, priority }: Props) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.15 }}
      transition={{
        duration: 14,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Plain img — keeps the motion wrapper as the single transformed element
          and avoids next/image's wrapper interfering with the scale transform. */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}

export const HeroZoom = memo(HeroZoomBase);
