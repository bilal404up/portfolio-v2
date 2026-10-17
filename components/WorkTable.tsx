"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Mockup } from "@/components/Mockup";
import type { Project } from "@/lib/projects";

/* The project table. On devices with a pointer, a preview of the build follows the cursor over each row.
   All previews are rendered up front, so the first hover shows the image at once.
   On small screens each row carries its own mockup instead. */
export function WorkTable({ projects }: { projects: Project[] }) {
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [shown, setShown] = useState(projects[0]?.slug);

  function move(e: React.MouseEvent) {
    const el = preview.current;
    if (!el) return;
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
  }

  return (
    <div onMouseMove={move} onMouseLeave={() => setActive(null)}>
      <div className="table-head" aria-hidden="true">
        <span>Project</span>
        <span>Type</span>
        <span>Built with</span>
      </div>
      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="table-row reveal"
          style={{ ["--d" as string]: `${i * 80}ms` }}
          onMouseEnter={() => {
            setActive(p.slug);
            setShown(p.slug);
          }}
          onFocus={() => setActive(null)}
        >
          <Mockup p={p} sizes="90vw" className="table-thumb" />
          <span className="table-title">{p.title}</span>
          <span className="table-cell">{p.kind}</span>
          <span className="table-cell muted">{p.stack.join(", ")}</span>
          <span className="table-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
      <div ref={preview} className={`hover-preview ${active ? "is-on" : ""}`} aria-hidden="true">
        {projects.map((p) => (
          <Image key={p.slug} src={p.hero.src} alt="" fill sizes="340px" loading="eager" className={p.slug === shown ? "is-shown" : undefined} />
        ))}
      </div>
    </div>
  );
}
