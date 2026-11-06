import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--display", display: "swap" });
const text = Inter({ subsets: ["latin"], variable: "--text", display: "swap" });
const footerFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-footer", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yugti.com";

export const viewport: Viewport = { themeColor: "#070b24", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "YUGTI: Connecting Intelligence, Technology & Opportunities", template: "%s | YUGTI" },
  description: "YUGTI brings AI, overseas education, online learning, recruitment, technology development and digital knowledge together in one ecosystem.",
  icons: { icon: "/yugti-logo.svg" },
  openGraph: { title: "YUGTI", description: "Connecting Intelligence, Technology & Opportunities.", type: "website", siteName: "YUGTI" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${text.variable} ${footerFont.variable}`}>
        <a className="skip" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
