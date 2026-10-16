import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="wrap">
      <section className="page-head" style={{ paddingBottom: "8rem" }}>
        <p className="eyebrow">Error 404</p>
        <h1 className="display page-title">This page isn&apos;t here.</h1>
        <p className="lede page-lede">The link may be old. The work and the contact details are one click away.</p>
        <div className="cta-actions">
          <Link href="/work" className="btn btn-ink">
            See the work <span className="arrow">→</span>
          </Link>
          <Link href="/" className="btn btn-line">
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
