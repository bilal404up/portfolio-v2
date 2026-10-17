"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/content";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
];

/* Transparent over the dark home hero, a dark rounded bar everywhere else.
   Hides while scrolling down and comes back on scroll up.
   On small screens the links move into a full-screen menu. */
export function SiteHeader() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

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

  // Close the menu on every page change.
  useEffect(() => setOpen(false), [path]);

  // While the menu is open: no page scroll, the page behind can't be focused, Escape closes it.
  useEffect(() => {
    if (!open) return;
    const behind = [document.getElementById("main"), document.querySelector<HTMLElement>(".site-footer")];
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el && (el.inert = true));
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el && (el.inert = false));
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onLight = path !== "/";
  const cls = ["site-header", solid ? "is-solid" : "", onLight ? "on-light" : "", hidden && !open ? "is-hidden" : "", open ? "menu-open" : ""].join(" ");
  const current = (href: string) => (path.startsWith(href) ? "page" : undefined);

  return (
    <header className={cls}>
      <div className="header-bar">
        <Link href="/" className="wordmark" aria-label="Bilal, home">
          <span className="wordmark-dot" aria-hidden="true" />
          Bilal
        </Link>
        <nav aria-label="Main" className="nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" aria-current={current("/contact")}>
            Contact
          </Link>
          <button ref={button} type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="menu-lines" aria-hidden="true" />
          </button>
        </nav>
      </div>
      <div id="mobile-menu" className={`menu ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Menu" className="menu-inner wrap">
          {[...NAV, { href: "/contact", label: "Contact" }].map((n, i) => (
            <Link key={n.href} ref={i === 0 ? firstLink : undefined} href={n.href} className="menu-link" aria-current={current(n.href)} style={{ ["--i" as string]: i }}>
              <span className="menu-num">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </Link>
          ))}
          <a href={`mailto:${EMAIL}`} className="menu-mail">
            {EMAIL}
          </a>
        </nav>
      </div>
    </header>
  );
}
