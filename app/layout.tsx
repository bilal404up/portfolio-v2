import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz", "SOFT"] });

export const metadata: Metadata = {
  title: { default: "Bilal, full-stack developer", template: "%s | Bilal" },
  description: "Bilal is a full-stack developer in Lahore. Web apps, SaaS MVPs and AI chatbots, shown through three builds with their code open.",
};

export const viewport: Viewport = { themeColor: "#F4F0E8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <header className="site-header">
          <div className="wrap header-row">
            <Link href="/" className="wordmark">
              Bilal
            </Link>
            <nav aria-label="Main" className="nav">
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
              <Link href="/contact" className="nav-cta">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="wrap footer-row">
            <p className="footer-big">Bilal, Lahore</p>
            <p className="muted small">The three builds on this site are demos made for this portfolio, with invented data. UTC+5.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
