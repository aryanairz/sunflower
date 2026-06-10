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
  title: "SereniDrip",
  description:
    "Licensed IV hydration in McAllen, Texas. Recharge. Restore. Revive. By appointment, Monday through Saturday.",
  metadataBase: new URL("https://serenidrip.com"),
  openGraph: {
    title: "SereniDrip · IV Hydration",
    description:
      "Editorial IV hydration studio in McAllen, Texas. Vitamin blends, recovery drips, and wellness shots by appointment.",
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
