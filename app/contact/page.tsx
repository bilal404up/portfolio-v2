import type { Metadata } from "next";
import { EMAIL } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

const include = ["What it should do", "Who will use it", "Any deadline or budget", "Links to anything that already exists"];

export default function Contact() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <p className="eyebrow">Contact</p>
        <h1 className="display page-title">Tell me what you are trying to build.</h1>
        <p className="lede page-lede">A few lines is enough. I reply with questions, or with a short written plan.</p>
        <a href={`mailto:${EMAIL}`} className="contact-big">
          {EMAIL}
        </a>
      </section>
      <section className="section-split rule">
        <div>
          <p className="eyebrow">Helpful to include</p>
        </div>
        <ul className="contact-list">
          {include.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <p className="small muted">I’m in Lahore, Pakistan, on UTC+5. Work and payment go through Upwork, with milestones.</p>
    </main>
  );
}
