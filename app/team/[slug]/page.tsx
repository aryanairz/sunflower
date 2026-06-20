import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { team, getTeamMember } from "@/lib/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.id }));
}

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) return { title: "Our Team" };
  return {
    title: `${m.name} · ${m.credential}`,
    description: `${m.name}, ${m.role} at SereniDrip. ${m.bio[0]}`,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) notFound();

  return (
    <main className="flex flex-col" style={{ minHeight: "100dvh" }}>
      <Nav />

      {/* BODY — photo + name + bio */}
      <section className="bg-bone" style={{ flex: "1 1 auto" }}>
        <div className="max-w-shell mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-16 md:items-start">
            {/* PHOTO */}
            <div className="w-full max-w-[340px] mx-auto md:mx-0 md:w-[340px] md:shrink-0">
              <Reveal>
                <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-bone-3 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ objectPosition: m.objectPosition ?? "center" }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* NAME + BIO */}
            <div className="flex-1 min-w-0">
              <Reveal>
                <h1 className="font-display font-light text-4xl sm:text-5xl text-ink leading-[1.05] tracking-[-0.015em]">
                  {m.name}
                  <span className="text-sage text-[0.5em] tracking-[0.08em] align-middle">
                    {" "}
                    - {m.credential}
                  </span>
                </h1>
                <p className="mt-2 md:mt-3 font-sans text-lg md:text-xl text-ink-muted">
                  {m.role}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 md:mt-10 max-w-[68ch] space-y-6 text-base md:text-lg leading-relaxed text-ink-muted">
                  {m.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/about"
                    className="text-[11px] uppercase tracking-[0.22em] text-sage hover:text-sage-hover transition-colors"
                  >
                    ← Back to team
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
