/*
  Every word a visitor reads about the builds lives here. Facts come only from the builds
  themselves. Add a number or a result only when it can be checked in the project.
*/

export type Shot = { src: string; alt: string; w: number; h: number };

export type Project = {
  slug: string;
  title: string;
  kind: string;
  line: string;
  stack: string[];
  live: string;
  code: string;
  hero: Shot;
  screens: Shot[];
  problem: string;
  approach: { title: string; body: string }[];
  checks: string[];
  /** Soft background behind the mockup, taken from the build's own colours. */
  tint: string;
};

/** The phone screenshot of a build, used in the mockups. */
export function phoneShot(p: Project) {
  return p.screens.find((s) => s.w < s.h);
}

export const projects: Project[] = [
  {
    slug: "docket",
    title: "Docket",
    kind: "Order intake",
    line: "Messy orders in, checked data out. It reads order PDFs, emails and spreadsheet exports, matches every line to a catalog, and flags anything doubtful for a person to approve.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI API (optional, off in the demo)"],
    tint: "#F3E5D8",
    live: "https://docket-alpha-three.vercel.app",
    code: "https://github.com/bilal404up/docket",
    hero: { src: "/work/docket-home.png", alt: "Docket home page: a messy order on the left, and how each line was matched and flagged on the right.", w: 1440, h: 900 },
    screens: [
      { src: "/work/docket-review.png", alt: "The review screen: the original order beside the matched lines, with a possible duplicate flagged in plain words.", w: 1440, h: 900 },
      { src: "/work/docket-mobile.png", alt: "Docket home page on a phone.", w: 780, h: 1688 },
    ],
    problem:
      "Cafés send wholesale orders as PDFs, emails, phone photos and spreadsheet exports, each in their own words. Someone has to type every one into the system, and a misread quantity means the wrong bake. Docket reads each typed order, matches it to the catalog and shows a person exactly what to check.",
    approach: [
      { title: "Rules decide, nothing is guessed", body: "A rules reader turns each line into a product, a quantity and a unit. Matching, dates, cut-offs and duplicates are plain rules, so every decision has a reason you can read. An AI reader for photographed orders is in the code, switched off in the demo." },
      { title: "Nothing is guessed silently", body: "Each doubtful line is flagged with the words it came from, highlighted on the original document. A person confirms it, and Docket remembers that café’s wording next time." },
      { title: "Every visitor gets a private sandbox", body: "Each demo visitor gets their own made-up bakery that clears after a day. Row-level security keeps one sandbox from seeing another, and tests check it." },
    ],
    checks: ["Add an order from the tray and watch each step of the reading", "Open a flagged order and confirm the suggested match", "Approve an order and see it land on the bake sheet"],
  },
  {
    slug: "gigboard",
    title: "Gigboard",
    kind: "Freelance marketplace",
    line: "Fixed-price gigs where the payment waits until the buyer approves the work.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe (test mode)"],
    tint: "#DDE3EE",
    live: "https://gigboard-cyan.vercel.app",
    code: "https://github.com/bilal404up/gigboard",
    hero: { src: "/work/gigboard-home.png", alt: "Gigboard home page: a split-flap board listing gigs with seller, delivery time, price and rating.", w: 1440, h: 900 },
    screens: [
      { src: "/work/gigboard-gig.png", alt: "A gig page with three packages, a price breakdown and a note that payment is held until the buyer approves.", w: 1440, h: 900 },
      { src: "/work/gigboard-mobile.png", alt: "Gigboard home page on a phone.", w: 390, h: 844 },
    ],
    problem:
      "Buyers worry about paying for work they haven’t seen. Sellers worry about doing work that never gets paid. Gigboard holds the payment in the middle until the buyer approves.",
    approach: [
      { title: "Money in the middle", body: "When a buyer pays, the order shows the payment as held. It goes to the seller only when the buyer approves the work." },
      { title: "Numbers from the database", body: "Job counts and ratings on the board are read from orders and reviews, not typed in by hand." },
      { title: "Three sides, one codebase", body: "Buyers, sellers and an admin each get their own screens. The demo lets you switch between them from the menu." },
    ],
    checks: ["Pay for a gig, then see the payment shown as held", "Approve the work and see it released to the seller", "Switch between buyer, seller and admin"],
  },
  {
    slug: "sidekick",
    title: "Sidekick",
    kind: "Support chatbot",
    line: "A support assistant that answers only from a shop’s own FAQ, and asks the owner when it doesn’t know.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI API (optional, off in the demo)"],
    tint: "#DFEBE1",
    live: "https://sidekick-livid.vercel.app",
    code: "https://github.com/bilal404up/sidekick",
    hero: { src: "/work/sidekick-home.png", alt: "Sidekick: a live chat, the FAQ it answers from and the owner’s inbox, side by side.", w: 1280, h: 720 },
    screens: [
      { src: "/work/sidekick-admin.png", alt: "The owner inbox, where questions the FAQ didn’t cover wait for an answer.", w: 1280, h: 720 },
      { src: "/work/sidekick-mobile.png", alt: "Sidekick on a phone, answering a question about shipping.", w: 390, h: 844 },
    ],
    problem:
      "Most chatbots guess when they don’t know, and a wrong answer about refunds or shipping costs a shop money. Sidekick answers only from the shop’s FAQ, shows where each answer came from, and hands anything else to the owner.",
    approach: [
      { title: "It would rather say no", body: "If no FAQ entry matches closely enough, it says it doesn’t know and sends the question to the owner, instead of guessing." },
      { title: "Every answer can be checked", body: "Each reply shows the FAQ entry it came from and how closely the question matched it." },
      { title: "Private by default", body: "Email addresses and phone numbers are stripped out before a conversation is saved." },
    ],
    checks: ["Ask a question the FAQ covers and see the entry it came from", "Ask something it doesn’t know and see it land in the owner’s inbox", "Write an answer in the inbox and see the bot use it next time"],
  },
  {
    slug: "chaser",
    title: "Chaser",
    kind: "Invoice reminder tool",
    line: "An invoice tracker that counts the days overdue and writes reminders that get firmer the longer an invoice is late.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe (test mode)"],
    tint: "#EFE6CC",
    live: "https://chaser-taupe.vercel.app",
    code: "https://github.com/bilal404up/chaser",
    hero: { src: "/work/chaser-home.png", alt: "Late invoices shown as paper slips, with the days overdue in large type.", w: 1280, h: 960 },
    screens: [
      { src: "/work/chaser-invoices.png", alt: "The invoice list, with overdue invoices sorted oldest first and a form to add a new one.", w: 1280, h: 960 },
      { src: "/work/chaser-mobile.png", alt: "Chaser home page on a phone.", w: 780, h: 1688 },
    ],
    problem:
      "Chasing late invoices is awkward, so it gets put off, and the longer it waits the harder it gets. Chaser keeps the count and writes the reminder, so the freelancer only has to send it.",
    approach: [
      { title: "The oldest is always on top", body: "Overdue invoices are sorted by days late, so the one that needs chasing most is the first thing you see." },
      { title: "The tone does the work", body: "Reminders get firmer as an invoice ages, so you don’t have to find the words for an awkward email." },
      { title: "Plans and limits", body: "The free plan has a limit on open invoices. Upgrading goes through Stripe checkout in test mode." },
    ],
    checks: ["Add an invoice and see it counted from its due date", "Open an older invoice and compare the reminder with a newer one", "Hit the free plan limit and see the upgrade step"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
