import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { CtaBand } from "@/components/CtaBand";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description: "How a project with Bilal runs: a written plan first, a small first milestone, a preview link at every step, and code in your name.",
};

export default function Process() {
  return (
    <main id="main">
      <div className="wrap">
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
      <p className="small muted reveal" style={{ paddingBlock: "2rem 7rem" }}>
        Work and payment stay on Upwork, with a milestone for each step.
      </p>
      </div>
      <CtaBand eyebrow="Step one is a message" secondary={{ href: "/work", label: "See the work" }} />
    </main>
  );
}
