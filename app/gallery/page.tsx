import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryPhotos } from "@/lib/venue";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos of Sunflower Ranch — our pool, palapa, and past celebrations in Edinburg and the Rio Grande Valley (RGV).",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main>
      <Nav />

      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
          <SectionHeader
            title="Gallery"
            intro="A look at the pool, the palapa, and celebrations the grounds have held. Select any photo to view it larger."
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-shell mx-auto px-5 sm:px-8 pb-24 md:pb-32">
          <GalleryGrid photos={galleryPhotos} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
