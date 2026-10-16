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
};

export const projects: Project[] = [
  {
    slug: "gigboard",
    title: "Gigboard",
    kind: "Freelance marketplace",
    line: "Fixed-price gigs where the payment waits until the buyer approves the work.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe (test mode)"],
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
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI API (optional)"],
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
