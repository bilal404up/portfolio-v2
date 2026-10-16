import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <p className="eyebrow">Services</p>
        <h1 className="display page-title">What I can build for you.</h1>
        <p className="lede page-lede">Most projects are one of these. Where a build shows it, there is a link to see it working.</p>
      </section>
      <div className="list-rows">
        {services.map((s) => (
          <div key={s.title} className="svc-row">
            <h2 className="svc-title">{s.title}</h2>
            <div>
              <p className="svc-body">{s.body}</p>
              {s.seenIn.length ? (
                <div className="svc-seen">
                  <span className="small muted">See it in</span>
                  {s.seenIn.map((slug) => {
                    const p = getProject(slug);
                    return p ? (
                      <Link key={slug} href={`/work/${slug}`}>
                        {p.title}
                      </Link>
                    ) : null;
                  })}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
