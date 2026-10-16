import Image from "next/image";

import Link from "next/link";
import { projects } from "@/lib/projects";

const EMAIL = "bilalup404@gmail.com";

const steps = [
  { title: "You tell me what you need", body: "Plain words are fine. If anything is unclear, I ask before I guess." },
  { title: "You get a written plan", body: "Scope, milestones, price and timeline, in writing, before any work starts." },
  { title: "We start small", body: "The first milestone is small, so your risk is small too." },
  { title: "You see it as it grows", body: "A preview link at every milestone, so you check real work, not status updates." },
  { title: "It stays yours", body: "Code, hosting and API keys are set up in your name from the start." },
];

export default function Home() {
  return (
    <main id="main">
      {/* Hero: one statement, no decoration */}
      <section className="wrap hero">
        <p className="eyebrow reveal">Full-stack developer, Lahore</p>
        <h1 className="display hero-title reveal">
          Web apps and AI chatbots, built in steps <em>you can check.</em>
        </h1>
        <div className="hero-foot reveal">
          <p className="lede">You get a written plan before any work starts, a preview link at every milestone, and code that stays in your name.</p>
          <div className="hero-actions">
            <Link href="#work" className="btn btn-ink">
              See the three builds
            </Link>
            <a href={`mailto:${EMAIL}`} className="btn btn-line">
              Email me
            </a>
          </div>
        </div>
      </section>

      {/* Work: one large case per build, each with its own screen */}
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

      {/* About */}
      <section id="about" className="wrap about">
        <div className="about-photo">
          <Image src="/about/bilal-headshot.png" alt="Bilal, full-stack developer, in a green park" width={1254} height={1254} sizes="(min-width: 900px) 30vw, 80vw" className="block h-auto w-full" />
        </div>
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h2 className="h-section about-title">Bilal, full-stack developer in Lahore.</h2>
          <div className="about-body">
            <p>I build web apps, SaaS MVPs and AI chatbots. I’m based in Lahore, Pakistan, on UTC+5.</p>
            <p>Every project starts with a written plan: scope, milestones, price and timeline, all agreed before any work begins. You get a preview link at every milestone, so you check real work, not status updates. The code and hosting stay in your name from the start.</p>
            <p>The three builds on this site show how I work. Gigboard is a marketplace that holds payment until the buyer approves. Sidekick is a chatbot that answers only from a shop’s FAQ. Chaser is an invoice tracker. Each one has its code open on GitHub.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="wrap section">
        <p className="eyebrow">How I work</p>
        <h2 className="h-section section-title">Five steps, each one checked.</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact: the one call to action, large */}
      <section id="contact" className="stage contact">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <a href={`mailto:${EMAIL}`} className="display contact-mail">
            {EMAIL}
          </a>
          <p className="lede contact-lede">Tell me what you are trying to build. A few lines is enough. I reply with questions, or with a short written plan.</p>
        </div>
      </section>
    </main>
  );
}
