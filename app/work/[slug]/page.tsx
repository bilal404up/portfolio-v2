import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: p.title, description: p.line };
}

export default function CasePage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main">
      <section className="wrap case-head">
        <Link href="/work" className="back">
          ← All builds
        </Link>
        <p className="eyebrow reveal">
          {p.kind} · Demo, invented data
        </p>
        <h1 className="display case-h1 reveal">{p.title}</h1>
        <p className="lede reveal case-h1-lede">{p.line}</p>
        <dl className="meta reveal">
          <div>
            <dt>Built with</dt>
            <dd>{p.stack.join(", ")}</dd>
          </div>
          <div>
            <dt>Open it</dt>
            <dd>
              <a href={p.live} className="meta-link">
                Live demo
              </a>
            </dd>
          </div>
          <div>
            <dt>Read it</dt>
            <dd>
              <a href={p.code} className="meta-link">
                Code on GitHub
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <div className="wrap">
        <figure className="frame case-hero reveal">
          <div className="frame-chrome">
            <span />
            <span />
            <span />
          </div>
          <Image src={p.hero.src} alt={p.hero.alt} width={p.hero.w} height={p.hero.h} priority sizes="(min-width: 1152px) 1088px, 100vw" className="block h-auto w-full" />
        </figure>
      </div>

      <section className="wrap section-split">
        <div>
          <p className="eyebrow">The problem</p>
        </div>
        <p className="prose">{p.problem}</p>
      </section>

      <section className="wrap section-split rule">
        <div>
          <p className="eyebrow">Decisions</p>
        </div>
        <ol className="decisions">
          {p.approach.map((a, n) => (
            <li key={a.title}>
              <span className="decision-num">{String(n + 1).padStart(2, "0")}</span>
              <h3>{a.title}</h3>
              <p className="muted">{a.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section-split rule">
        <div>
          <p className="eyebrow">Screens</p>
        </div>
        <div className="screens">
          {p.screens.map((s) => (
            <figure key={s.src} className={s.w < s.h ? "screen-phone" : "screen-wide"}>
              <div className={s.w < s.h ? "frame frame-phone" : "frame"}>
                <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
              </div>
              <figcaption className="small muted caption">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stage checks-band">
        <div className="wrap section-split">
          <div>
            <p className="eyebrow">Try it</p>
          </div>
          <div>
            <h2 className="h-section">Three things to check</h2>
            <ol className="checks">
              {p.checks.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
            <a href={p.live} className="btn btn-paper checks-cta">
              Open the live demo
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Next build" className="wrap next-nav">
        <Link href={`/work/${next.slug}`} className="next-link">
          <span className="eyebrow">Next build</span>
          <span className="display next-title">{next.title}</span>
        </Link>
      </nav>
    </main>
  );
}
