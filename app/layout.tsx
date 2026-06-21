import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL, pageMetadata } from "@/lib/seo";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "SereniDrip IV Hydration | IV Therapy in Edinburg, TX",
    description:
      "IV hydration and vitamin therapy in Edinburg, TX, administered by licensed professionals. Book your drip today.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={display.variable}>
      <body className="min-h-[100dvh] bg-bone text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
