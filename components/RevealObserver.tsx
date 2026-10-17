"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Adds "is-in" to every .reveal and .reveal-img element as it enters the view.
   Runs again on each page change. Without JavaScript nothing is hidden (see the .js rules in globals.css). */
export function RevealObserver() {
  const path = usePathname();

  useEffect(() => {
    // Tells the 4-second fail-safe in layout.tsx that reveals are running.
    (window as Window & { __reveal?: boolean }).__reveal = true;
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-img");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return null;
}
