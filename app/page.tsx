import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Mockup } from "@/components/Mockup";
import { EMAIL, GITHUB, services, tools } from "@/lib/content";
import { projects } from "@/lib/projects";

const LINES = ["Web apps and", "AI chatbots,", "built in steps", "you can check."];

/* Desktop screens of the four builds, split into two columns that scroll in opposite directions. */
const shots = projects.flatMap((p) => [p.hero, ...p.screens.filter((s) => s.w > s.h)]);
const REEL = [shots.filter((_, i) => i % 2 === 0), shots.filter((_, i) => i % 2 === 1)];

export default function Home() {
  return (
    <main id="main">
      {/* Hero: the real builds scroll behind the headline */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-reel" aria-hidden="true">
          {REEL.map((col, c) => (
            <div key={c} className="reel-col">
              {[...col, ...col].map((s, i) => (
                <div key={`${s.src}-${i}`} className="reel-shot">
                  <Image src={s.src} alt="" width={s.w} height={s.h} sizes="(min-width: 900px) 360px, 60vw" priority={i < 2} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hero-shade" aria-hidden="true" />
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
          <div className="hero-bottom hero-fade" style={{ ["--d" as string]: "600ms" }}>
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
              Four live builds you can try.
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
                <Mockup p={p} sizes="(min-width: 900px) 40vw, 90vw" />
                <span className="card-tag">{p.kind}</span>
                <span className="card-view" aria-hidden="true">
                  →
                </span>
              </div>
              <div className="card-meta">
                <h3 className="card-title">{p.title}</h3>
                <span className="small muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="card-line">{p.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Who you work with */}
      <section className="wrap section intro" style={{ paddingTop: 0 }}>
        <div className="intro-photo reveal-img">
          <Image src="/about/bilal-headshot.png" alt="Bilal, full-stack developer, in a green park" width={1254} height={1254} sizes="(min-width: 900px) 30vw, 90vw" />
        </div>
        <div>
          <p className="eyebrow reveal">Who you work with</p>
          <h2 className="h-section section-title reveal" style={{ ["--d" as string]: "80ms" }}>
            Hi, I’m Bilal.
          </h2>
          <p className="lede reveal" style={{ marginTop: "1.75rem", ["--d" as string]: "160ms" }}>
            I’m a full-stack developer in Lahore, Pakistan, on UTC+5. I build web apps, SaaS MVPs and AI chatbots, and every project starts with a written plan you agree to first.
          </p>
          <div className="cta-actions reveal" style={{ ["--d" as string]: "240ms" }}>
            <Link href="/about" className="btn btn-ink">
              More about me <span className="arrow">→</span>
            </Link>
            <a href={GITHUB} className="btn btn-line" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
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
              <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="svc-title">{s.title}</span>
              <span className="svc-body">{s.body}</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
