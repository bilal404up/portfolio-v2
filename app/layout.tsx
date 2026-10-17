import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/SiteHeader";
import { EMAIL, GITHUB } from "@/lib/content";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-display", display: "swap" });

const description = "Bilal is a full-stack developer in Lahore. Web apps, SaaS MVPs and AI chatbots, shown through four builds with their code open.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v2-gilt-rho-53.vercel.app"),
  title: { default: "Bilal, full-stack developer", template: "%s | Bilal" },
  description,
  openGraph: { title: "Bilal, full-stack developer", description, type: "website", siteName: "Bilal" },
  twitter: { card: "summary_large_image", title: "Bilal, full-stack developer", description },
};

/* Marks that JavaScript runs, so scroll-reveal content is only hidden when it can be revealed.
   If the reveal script hasn't started after 4 seconds, the class is removed and everything shows. */
const jsFlag = "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__reveal)document.documentElement.classList.remove('js')},4000)";

export const viewport: Viewport = { themeColor: "#111111" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <RevealObserver />
        <footer className="site-footer">
          <div className="wrap">
            <p className="footer-word" aria-hidden="true">
              Bilal
            </p>
            <div className="footer-row">
              <p className="small" style={{ color: "var(--on-dark-muted)" }}>
                Full-stack developer in Lahore, UTC+5. The four builds are working demos with sample data, and their code is on GitHub.
              </p>
              <nav aria-label="Footer" className="footer-links">
                <Link href="/work">Work</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/process">Process</Link>
                <Link href="/contact">Contact</Link>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
