import Image from "next/image";
import Link from "next/link";
import { EMAIL, services, tools } from "@/lib/content";
import { projects } from "@/lib/projects";

const LINES = ["Web apps and", "AI chatbots,", "built in steps", "you can check."];

export default function Home() {
  return (
    <main id="main">
      {/* Hero: our own animated field, drawn in CSS */}
      <section className="hero">
        <div className="hero-field" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow hero-eyebrow hero-fade" style={{ ["--d" as string]: "100ms" }}>
            Bilal · Full-stack developer · Lahore
          </p>
          <h1 className="display hero-title">
            {LINES.map((l, i) => (
              <span key={l} className="line">
                <span className={i === LINES.length - 1 ? "accent" : undefined} style={{ ["--i" as string]: i }}>
                  {l}
                </span>
              </span>
            ))}
          </h1>
          <div className="hero-bottom hero-fade" style={{ ["--d" as string]: "700ms" }}>
            <p className="lede">You get a written plan before any work starts, a preview link at every milestone, and code that stays in your name.</p>
            <div className="hero-actions">
              <Link href="/work" className="btn btn-accent">
                See the work <span className="arrow">→</span>
              </Link>
              <a href={`mailto:${EMAIL}`} className="btn btn-ghost-dark">
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools strip */}
      <div className="marquee" aria-label="Tools I work with">
        <div className="marquee-track">
          {[...tools, ...tools].map((t, i) => (
            <span key={`${t}-${i}`} className="marquee-item" aria-hidden={i >= tools.length}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Featured builds */}
      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">Selected work</p>
            <h2 className="h-section section-title reveal" style={{ ["--d" as string]: "80ms" }}>
              Four builds, code open.
            </h2>
          </div>
          <Link href="/work" className="link-draw reveal">
            All projects
          </Link>
        </div>
        <div className="cards">
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="card reveal" style={{ ["--d" as string]: `${(i % 2) * 120}ms` }}>
              <div className="card-media reveal-img">
                <Image src={p.hero.src} alt={p.hero.alt} width={p.hero.w} height={p.hero.h} sizes="(min-width: 900px) 45vw, 100vw" />
                <span className="card-tag">{p.kind}</span>
                <span className="card-view" aria-hidden="true">
                  →
                </span>
              </div>
              <div className="card-meta">
                <h3 className="card-title">{p.title}</h3>
                <span className="small muted">0{i + 1}</span>
              </div>
              <p className="card-line">{p.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">Services</p>
            <h2 className="h-section section-title reveal">What I build.</h2>
          </div>
          <Link href="/services" className="link-draw reveal">
            All services
          </Link>
        </div>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((s, i) => (
            <Link key={s.title} href="/services" className="svc-row reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
              <span className="svc-num">0{i + 1}</span>
              <span className="svc-title">{s.title}</span>
              <span className="svc-body">{s.body}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact band */}
      <section className="dark cta-band">
        <div className="hero-field" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
        </div>
        <div className="grain" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow reveal">Start with a written plan</p>
          <h2 className="display cta-title reveal" style={{ ["--d" as string]: "80ms" }}>
            Tell me what you are <span className="accent">building.</span>
          </h2>
          <div className="cta-actions reveal" style={{ ["--d" as string]: "160ms" }}>
            <Link href="/contact" className="btn btn-accent">
              Get in touch <span className="arrow">→</span>
            </Link>
            <Link href="/process" className="btn btn-ghost-dark">
              See how I work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
