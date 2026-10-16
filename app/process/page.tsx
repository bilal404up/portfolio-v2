import type { Metadata } from "next";
import { steps } from "@/lib/content";

export const metadata: Metadata = { title: "Process" };

export default function Process() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <p className="eyebrow">How I work</p>
        <h1 className="display page-title">Five steps, each one checked.</h1>
        <p className="lede page-lede">Nothing starts until the plan is written and agreed. You see real work at every milestone.</p>
      </section>
      <ol className="steps process-steps">
        {steps.map((s, i) => (
          <li key={s.title} className="step">
            <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="step-title">{s.title}</h2>
            <p className="muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="small muted process-note">Work and payment stay on Upwork, with a milestone for each step.</p>
    </main>
  );
}
