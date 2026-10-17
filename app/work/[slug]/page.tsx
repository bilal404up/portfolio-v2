import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs } from "@/components/Crumbs";
import { getProject, projects } from "@/lib/projects";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: p.title, description: p.line, openGraph: { title: `${p.title} | Bilal`, description: p.line, images: [{ url: p.hero.src, width: p.hero.w, height: p.hero.h, alt: p.hero.alt }] } };
}

export default function CasePage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main">
      <section className="wrap page-head">
        <Crumbs trail={[{ href: "/work", label: "Work" }, { label: p.title }]} />
        <p className="eyebrow reveal" style={{ marginTop: "2.5rem", ["--d" as string]: "60ms" }}>
          {p.kind} · Working demo, sample data
        </p>
        <h1 className="display page-title reveal" style={{ marginTop: "1rem", ["--d" as string]: "120ms" }}>
          {p.title}
        </h1>
        <p className="lede page-lede reveal" style={{ ["--d" as string]: "180ms" }}>
          {p.line}
        </p>
        <dl className="meta reveal" style={{ ["--d" as string]: "240ms" }}>
          <div>
            <dt>Built with</dt>
            <dd>{p.stack.join(", ")}</dd>
          </div>
          <div>
            <dt>Open it</dt>
            <dd>
              <a href={p.live} className="link-draw" target="_blank" rel="noopener noreferrer">
                Live demo ↗
              </a>
            </dd>
          </div>
          <div>
            <dt>Read it</dt>
            <dd>
              <a href={p.code} className="link-draw" target="_blank" rel="noopener noreferrer">
                Code on GitHub ↗
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <div className="wrap">
        {/* The shadow sits on the outer box, so the clip reveal on the inner one doesn't cut it off. */}
        <div className="frame-shadow reveal">
          <figure className="frame reveal-img">
            <Image src={p.hero.src} alt={p.hero.alt} width={p.hero.w} height={p.hero.h} priority sizes="(min-width: 1440px) 1300px, 100vw" className="block h-auto w-full" />
          </figure>
        </div>
      </div>

      <section className="wrap" style={{ marginTop: "6rem" }}>
        <div className="split">
          <p className="eyebrow reveal">The problem</p>
          <p className="prose-big reveal" style={{ ["--d" as string]: "80ms" }}>
            {p.problem}
          </p>
        </div>

        <div className="split">
          <p className="eyebrow reveal">Decisions</p>
          <ol className="decisions">
            {p.approach.map((a, n) => (
              <li key={a.title} className="reveal" style={{ ["--d" as string]: `${n * 100}ms` }}>
                <span className="decision-num">{String(n + 1).padStart(2, "0")}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="split">
          <p className="eyebrow reveal">Screens</p>
          <div className="screens">
            {p.screens.map((s) =>
              s.w < s.h ? (
                <figure key={s.src} className="screen-phone-row reveal">
                  <div className="frame frame-phone screen-phone">
                    <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="304px" className="block h-auto w-full" />
                  </div>
                  <figcaption className="caption caption-side">
                    <span className="eyebrow">Mobile</span>
                    {s.alt}
                  </figcaption>
                </figure>
              ) : (
                <figure key={s.src} className="reveal">
                  <div className="frame">
                    <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
                  </div>
                  <figcaption className="caption">{s.alt}</figcaption>
                </figure>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="dark cta-band" style={{ paddingBlock: "7rem" }}>
        <div className="grain" aria-hidden="true" />
        <div className="wrap hero-inner split" style={{ borderTop: 0, paddingBlock: 0 }}>
          <p className="eyebrow reveal">Try it</p>
          <div>
            <h2 className="h-section reveal">Three things to check</h2>
            <ol className="checks">
              {p.checks.map((c, n) => (
                <li key={c} className="reveal" style={{ ["--d" as string]: `${n * 90}ms` }}>
                  {c}
                </li>
              ))}
            </ol>
            <div className="cta-actions">
              <a href={p.live} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                Open the live demo <span className="arrow">↗</span>
              </a>
              <a href={p.code} className="btn btn-ghost-dark" target="_blank" rel="noopener noreferrer">
                Read the code ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Next build" className="wrap">
        <Link href={`/work/${next.slug}`} className="next-link" style={{ borderTop: 0 }}>
          <span className="eyebrow">Next build</span>
          <span className="display next-title">{next.title} →</span>
        </Link>
      </nav>
    </main>
  );
}
