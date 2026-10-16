import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutParagraphs, tools } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <main id="main" className="wrap">
      <section className="about about-page">
        <div className="about-photo">
          <Image src="/about/bilal-headshot.png" alt="Bilal, full-stack developer, in a green park" width={1254} height={1254} priority sizes="(min-width: 900px) 30vw, 80vw" className="block h-auto w-full" />
        </div>
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h1 className="display page-title about-title">Bilal, full-stack developer.</h1>
          <div className="about-body">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <h2 className="eyebrow about-sub">Tools I work with</h2>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="about-next">
            <Link href="/contact" className="text-link">
              Tell me what you are building
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
