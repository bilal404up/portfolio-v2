import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { EMAIL, GITHUB } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email Bilal about a web app, SaaS MVP or AI chatbot. A few lines is enough; the reply is questions or a short written plan.",
};

const include = ["What it should do", "Who will use it", "Any deadline or budget", "Links to anything that already exists"];

export default function Contact() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <Crumbs trail={[{ label: "Contact" }]} />
        <h1 className="display page-title reveal" style={{ ["--d" as string]: "80ms" }}>
          Let&apos;s talk.
        </h1>
        <p className="lede page-lede reveal" style={{ ["--d" as string]: "160ms" }}>
          Tell me what you are trying to build. A few lines is enough. I reply with questions, or with a short written plan.
        </p>
        <a href={`mailto:${EMAIL}`} className="contact-big reveal" style={{ ["--d" as string]: "240ms" }}>
          {EMAIL}
        </a>
      </section>
      <section className="split" style={{ paddingBottom: "8rem" }}>
        <p className="eyebrow reveal">Helpful to include</p>
        <div>
          <ul className="bullets">
            {include.map((t, i) => (
              <li key={t} className="reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
                {t}
              </li>
            ))}
          </ul>
          <p className="small muted reveal" style={{ marginTop: "3rem" }}>
            I’m in Lahore, Pakistan, on UTC+5. Work and payment go through Upwork, with milestones.
          </p>
          <p className="small reveal" style={{ marginTop: "1rem" }}>
            <a href={GITHUB} className="link-draw" target="_blank" rel="noopener noreferrer">
              See my code on GitHub ↗
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
