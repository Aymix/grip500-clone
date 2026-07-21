import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Grip500 body font is Roboto; display/nav is Saira Semi Condensed (self-hosted).
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRIP500 — Header (partial clone)",
  description: "Section-by-section partial clone test: Grip500 header / nav only.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${roboto.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
