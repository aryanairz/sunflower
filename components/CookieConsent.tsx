"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "serenidrip-cookie-consent";

/**
 * Cookie consent banner. Appears on first visit until the visitor accepts or
 * declines; the choice is stored in localStorage so it does not reappear.
 * Renders nothing on the server / first client render to avoid a hydration
 * mismatch, then shows only if no choice has been recorded.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. private mode) — don't block the page.
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore write failures
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 sm:pb-5"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-2xl border border-ink/10 bg-bone-2 shadow-lift px-5 py-2.5 sm:px-6">
        <p className="flex-1 text-[13px] sm:text-sm leading-snug text-ink-muted">
          We use cookies to improve your experience. See our{" "}
          <Link
            href="/privacy"
            className="whitespace-nowrap text-sage underline underline-offset-4 hover:text-sage-hover"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-sage px-6 py-2.5 text-[11px] uppercase tracking-button text-bone-2 transition-colors hover:bg-sage-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
