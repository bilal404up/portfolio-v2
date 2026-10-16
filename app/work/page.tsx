import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkIndex() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <p className="eyebrow">Work</p>
        <h1 className="display page-title">Three builds, with the code open.</h1>
        <p className="lede page-lede">Each build is a demo with invented data. Every one has a live link, its code on GitHub, and a case study that explains the decisions behind it.</p>
      </section>
      <div className="list-rows">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="list-row">
            <span className="case-num">0{i + 1}</span>
            <span className="list-row-title">{p.title}</span>
            <span className="muted">{p.kind}. {p.line}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
