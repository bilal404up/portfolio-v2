"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export type WorkRow = { slug: string; title: string; kind: string; stack: string; image: string };

/* The project table. On devices with a pointer, a preview of the build follows the cursor over each row. */
export function WorkTable({ rows }: { rows: WorkRow[] }) {
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  function move(e: React.MouseEvent) {
    const el = preview.current;
    if (!el) return;
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
  }

  const current = rows.find((r) => r.slug === active);

  return (
    <div onMouseMove={move} onMouseLeave={() => setActive(null)}>
      <div className="table-head" aria-hidden="true">
        <span>Project</span>
        <span>Type</span>
        <span>Built with</span>
      </div>
      {rows.map((r, i) => (
        <Link
          key={r.slug}
          href={`/work/${r.slug}`}
          className="table-row reveal"
          style={{ ["--d" as string]: `${i * 80}ms` }}
          onMouseEnter={() => setActive(r.slug)}
          onFocus={() => setActive(null)}
        >
          <span className="table-title">{r.title}</span>
          <span className="table-cell">{r.kind}</span>
          <span className="table-cell muted">{r.stack}</span>
        </Link>
      ))}
      <div ref={preview} className={`hover-preview ${current ? "is-on" : ""}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {current ? <img src={current.image} alt="" /> : null}
      </div>
    </div>
  );
}
