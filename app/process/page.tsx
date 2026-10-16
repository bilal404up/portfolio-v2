import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { steps } from "@/lib/content";

export const metadata: Metadata = { title: "Process" };

export default function Process() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <Crumbs trail={[{ label: "Process" }]} />
        <h1 className="display page-title reveal" style={{ ["--d" as string]: "80ms" }}>
          Process
        </h1>
        <p className="lede page-lede reveal" style={{ ["--d" as string]: "160ms" }}>
          Nothing starts until the plan is written and agreed. You see real work at every milestone.
        </p>
      </section>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title} className="step reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
            <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="step-title">{s.title}</h2>
            <p className="step-body">{s.body}</p>
          </li>
        ))}
      </ol>
      <div style={{ paddingBlock: "3rem 8rem" }}>
        <p className="small muted reveal">Work and payment stay on Upwork, with a milestone for each step.</p>
        <div className="cta-actions reveal">
          <Link href="/contact" className="btn btn-ink">
            Start with step one <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
