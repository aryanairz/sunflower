import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BOOKING_WIDGET_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book your IV hydration appointment at SereniDrip in Edinburg, Texas. Choose a time that suits you and reserve in minutes.",
};

export default function BookPage() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="bg-bone">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-12 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-eyebrow text-sage">Book an appointment</p>
            <h1 className="mt-5 font-display font-light text-5xl md:text-7xl text-ink leading-[1] tracking-[-0.025em] text-balance">
              Reserve your drip.
            </h1>
            <p className="mt-8 mx-auto max-w-[54ch] text-ink-muted text-lg leading-relaxed text-pretty">
              Pick a treatment and a time that suits you. Every appointment
              includes a brief medical intake and is administered by a licensed
              professional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WIDGET */}
      <section className="bg-bone">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12 pb-20 md:pb-28">
          <iframe
            src={BOOKING_WIDGET_URL}
            title="SereniDrip booking"
            className="w-full rounded-2xl border border-ink/10 bg-white min-h-[1200px]"
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
