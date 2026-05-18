import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Escape Spa & Salon",
  description:
    "Massage, cupping, and skincare in the Rio Grande Valley. Women-owned since 2014. Open daily 8 AM – 9 PM.",
  metadataBase: new URL("https://escapespasalon.com"),
  openGraph: {
    title: "Escape Spa & Salon",
    description:
      "Editorial spa & salon in Pharr, Texas. Massage, cupping, skincare, salon — every day, 8 AM to 9 PM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="min-h-[100dvh] bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
