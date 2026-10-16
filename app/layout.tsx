import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz", "SOFT"] });

const description = "Bilal is a full-stack developer in Lahore. Web apps, SaaS MVPs and AI chatbots, shown through four builds with their code open.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v2-gilt-rho-53.vercel.app"),
  title: { default: "Bilal, full-stack developer", template: "%s | Bilal" },
  description,
  openGraph: {
    title: "Bilal, full-stack developer",
    description,
    type: "website",
    images: [{ url: "/work/docket-home.png", width: 1440, height: 900, alt: "Docket, one of the four builds" }],
  },
  twitter: { card: "summary_large_image", title: "Bilal, full-stack developer", description, images: ["/work/docket-home.png"] },
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
            <div>
              <p className="footer-big">Bilal, Lahore</p>
              <p className="muted small" style={{ marginTop: "1rem" }}>
                The four builds on this site are demos made for this portfolio, with invented data. UTC+5.
              </p>
            </div>
            <nav aria-label="Footer" className="footer-links">
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
              <a href="mailto:bilalup404@gmail.com">bilalup404@gmail.com</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
