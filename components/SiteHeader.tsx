"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
];

/* Transparent over the dark home hero, a dark rounded bar everywhere else.
   Hides while scrolling down and comes back on scroll up. */
export function SiteHeader() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = path !== "/";
  const cls = ["site-header", solid ? "is-solid" : "", onLight ? "on-light" : "", hidden ? "is-hidden" : ""].join(" ");

  return (
    <header className={cls}>
      <div className="header-bar">
        <Link href="/" className="wordmark" aria-label="Bilal, home">
          <span className="wordmark-dot" aria-hidden="true" />
          Bilal
        </Link>
        <nav aria-label="Main" className="nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
