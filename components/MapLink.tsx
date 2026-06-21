"use client";

import { useEffect, useState, type ReactNode } from "react";

const googleMaps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const appleMaps = (q: string) =>
  `https://maps.apple.com/?q=${encodeURIComponent(q)}`;

/**
 * Opens the address in the device's native maps app:
 * Apple Maps on iOS, Google Maps everywhere else (the default).
 *
 * Renders the Google Maps href on the server and first client render
 * (so there's no hydration mismatch), then swaps to Apple Maps on iOS
 * after mount.
 */
export function MapLink({
  query,
  className,
  children,
}: {
  query: string;
  className?: string;
  children: ReactNode;
}) {
  const [href, setHref] = useState(() => googleMaps(query));

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      // iPadOS 13+ identifies as a Mac; distinguish by touch support.
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (isIOS) setHref(appleMaps(query));
  }, [query]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
