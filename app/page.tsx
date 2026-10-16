import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "@/lib/content";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main id="main">
      <section className="wrap hero">
        <p className="eyebrow reveal">Full-stack developer, Lahore</p>
        <h1 className="display hero-title reveal">
          Web apps and AI chatbots, built in steps <em>you can check.</em>
        </h1>
        <div className="hero-foot reveal">
          <p className="lede">You get a written plan before any work starts, a preview link at every milestone, and code that stays in your name.</p>
          <div className="hero-actions">
            <Link href="/work" className="btn btn-ink">
              See the work
            </Link>
            <a href={`mailto:${EMAIL}`} className="btn btn-line">
              Email me
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="work-list">
        {projects.map((p, i) => (
          <article key={p.slug} className="stage case-row" aria-labelledby={`${p.slug}-title`}>
            <div className="wrap case-grid">
              <div className="case-text">
                <p className="case-num">0{i + 1}</p>
                <p className="eyebrow case-kind">{p.kind}</p>
                <h2 id={`${p.slug}-title`} className="display case-title">
                  {p.title}
                </h2>
                <p className="lede case-line">{p.line}</p>
                <p className="small muted case-stack">{p.stack.join(" · ")}</p>
                <div className="case-actions">
                  <Link href={`/work/${p.slug}`} className="btn btn-paper">
                    Read the case study
                  </Link>
                  <a href={p.live} className="case-link">
                    Open the live demo
                  </a>
                </div>
              </div>
              <Link href={`/work/${p.slug}`} tabIndex={-1} aria-hidden="true" className="case-shot">
                <div className="frame">
                  <div className="frame-chrome">
                    <span />
                    <span />
                    <span />
                  </div>
                  <Image src={p.hero.src} alt="" width={p.hero.w} height={p.hero.h} sizes="(min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap home-teaser">
        <div>
          <p className="eyebrow">Working with me</p>
          <p className="h-section teaser-title">Five steps, each one checked.</p>
        </div>
        <div className="teaser-links">
          <Link href="/services" className="text-link">
            Services
          </Link>{" "}
          <Link href="/about" className="text-link">
            About
          </Link>{" "}
          <Link href="/process" className="text-link">
            Process
          </Link>{" "}
          <Link href="/contact" className="text-link">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
