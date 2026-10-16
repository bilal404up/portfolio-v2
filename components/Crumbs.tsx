import Link from "next/link";

/* Breadcrumb trail at the top of inner pages. */
export function Crumbs({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs reveal">
      <Link href="/">Home</Link>
      {trail.map((t) => (
        <span key={t.label} style={{ display: "contents" }}>
          <span aria-hidden="true">/</span>
          {t.href ? <Link href={t.href}>{t.label}</Link> : <span aria-current="page" style={{ color: "var(--ink)" }}>{t.label}</span>}
        </span>
      ))}
    </nav>
  );
}
