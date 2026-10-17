"use client";

import { useState } from "react";

/* Copies the address, for visitors whose mail link opens the wrong app. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <button type="button" className="btn btn-line" onClick={copy}>
      {copied ? "Copied" : "Copy address"}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
