import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { aboutParagraphs, GITHUB, tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Bilal is a full-stack developer in Lahore, Pakistan. Web apps, SaaS MVPs and AI chatbots, each started with a written plan.",
};

export default function About() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <Crumbs trail={[{ label: "About" }]} />
        <h1 className="display page-title reveal" style={{ ["--d" as string]: "80ms" }}>
          About
        </h1>
      </section>
      <section className="about" style={{ paddingBottom: "8rem" }}>
        <div className="about-photo reveal-img">
          <Image src="/about/bilal-headshot.png" alt="Bilal, full-stack developer, in a green park" width={1254} height={1254} priority sizes="(min-width: 900px) 40vw, 100vw" />
        </div>
        <div>
          <h2 className="h-section reveal">I build web apps, SaaS MVPs and AI chatbots.</h2>
          <div className="about-body" style={{ marginTop: "2rem" }}>
            {aboutParagraphs.map((p, i) => (
              <p key={p.slice(0, 40)} className="reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                {p}
              </p>
            ))}
          </div>
          <p className="eyebrow reveal" style={{ marginTop: "3rem" }}>
            Tools I work with
          </p>
          <div className="chips reveal">
            {tools.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="cta-actions reveal">
            <Link href="/contact" className="btn btn-ink">
              Tell me what you are building <span className="arrow">→</span>
            </Link>
            <a href={GITHUB} className="btn btn-line" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
