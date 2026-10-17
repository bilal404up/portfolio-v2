import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { services } from "@/lib/content";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Services",
  description: "Web apps and SaaS MVPs, AI chatbots, OpenAI features, dashboards and fixes for apps built with AI tools. Each service links to a build that shows it.",
};

export default function Services() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <Crumbs trail={[{ label: "Services" }]} />
        <h1 className="display page-title reveal" style={{ ["--d" as string]: "80ms" }}>
          Services
        </h1>
        <p className="lede page-lede reveal" style={{ ["--d" as string]: "160ms" }}>
          Most projects are one of these. Where a build shows it, there is a link to see it working.
        </p>
      </section>
      <section style={{ borderTop: "1px solid var(--line)", paddingBottom: "8rem" }}>
        {services.map((s, i) => (
          <div key={s.title} className="svc-row reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
            <span className="svc-num">0{i + 1}</span>
            <h2 className="svc-title">{s.title}</h2>
            <div>
              <p className="svc-body">{s.body}</p>
              {s.seenIn.length ? (
                <div className="chips">
                  <span className="small muted">See it in</span>
                  {s.seenIn.map((slug) => {
                    const p = getProject(slug);
                    return p ? (
                      <Link key={slug} href={`/work/${slug}`} className="chip">
                        {p.title}
                      </Link>
                    ) : null;
                  })}
                </div>
              ) : null}
              {s.note ? <p className="small muted" style={{ marginTop: "1rem" }}>{s.note}</p> : null}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
