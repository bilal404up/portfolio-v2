/*
  Shared text for the site. Every claim here comes from the four builds or from how Bilal works.
  Do not add a result, a number or a client name unless it can be checked.
*/

export const EMAIL = "bilalup404@gmail.com";
export const GITHUB = "https://github.com/bilal404up";
export const SITE = "https://portfolio-v2-gilt-rho-53.vercel.app";

export const services: { title: string; body: string; seenIn: string[]; note?: string }[] = [
  {
    title: "Web apps and SaaS MVPs",
    body: "Login, a database, payments and an admin panel, built and checked one milestone at a time.",
    seenIn: ["docket", "gigboard", "chaser"],
  },
  {
    title: "AI chatbots",
    body: "Chatbots that answer from your own FAQ and documents, and say so when they don’t know.",
    seenIn: ["sidekick"],
  },
  {
    title: "OpenAI features",
    body: "An AI step added to an app you already have, such as answers from your own documents or reading incoming text, with the API key kept in your name.",
    seenIn: [],
    note: "The OpenAI step is written into the code of Docket and Sidekick. It is switched off in the live demos, which run without a paid key.",
  },
  {
    title: "Dashboards, client portals and internal tools",
    body: "Screens that show your data clearly and let the right people act on it.",
    seenIn: ["docket", "chaser", "gigboard"],
  },
  {
    title: "Fixes for apps built with Lovable, Bolt, Replit or Cursor",
    body: "Broken login, exposed keys, Stripe webhooks and failed deploys. Send the repo and a description of what is going wrong.",
    seenIn: [],
  },
];

export const steps = [
  { title: "You tell me what you need", body: "Plain words are fine. If anything is unclear, I ask before I guess." },
  { title: "You get a written plan", body: "Scope, milestones, price and timeline, in writing, before any work starts." },
  { title: "We start small", body: "The first milestone is small, so your risk is small too." },
  { title: "You see it as it grows", body: "A preview link at every milestone, so you check real work, not status updates." },
  { title: "It stays yours", body: "Code, hosting and API keys are set up in your name from the start." },
];

export const aboutParagraphs = [
  "I’m Bilal, a full-stack developer based in Lahore, Pakistan, working on UTC+5.",
  "Every project starts with a written plan: scope, milestones, price and timeline, all agreed before any work begins. You get a preview link at every milestone, so you check real work, not status updates. The code and hosting stay in your name from the start.",
  "The four builds on this site show how I work. Docket reads messy orders and flags anything doubtful for a person to check. Gigboard is a marketplace that holds payment until the buyer approves. Sidekick is a chatbot that answers only from a shop’s FAQ. Chaser is an invoice tracker. Each one has its code open on GitHub.",
];

export const tools = ["React", "Next.js", "Node.js", "TypeScript", "Supabase (PostgreSQL)", "OpenAI API", "Stripe", "REST APIs"];
