import Link from "next/link";

/* The dark closing band: one clear next step at the end of a page. */
export function CtaBand({ eyebrow = "Start with a written plan", secondary = { href: "/process", label: "See how I work" } }: { eyebrow?: string; secondary?: { href: string; label: string } | null }) {
  return (
    <section className="dark cta-band">
      <div className="hero-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="wrap hero-inner">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h2 className="display cta-title reveal" style={{ ["--d" as string]: "80ms" }}>
          Tell me what you are <span className="accent">building.</span>
        </h2>
        <div className="cta-actions reveal" style={{ ["--d" as string]: "160ms" }}>
          <Link href="/contact" className="btn btn-accent">
            Get in touch <span className="arrow">→</span>
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn-ghost-dark">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
