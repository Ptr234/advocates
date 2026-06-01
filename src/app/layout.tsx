import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "H&G Advocates | Uganda's Leading Law Firm Since 1903",
  description: "120+ years of legal excellence in Uganda. Specializing in Corporate, Commercial, and Dispute Resolution.",
  authors: [{ name: "H&G Advocates" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
