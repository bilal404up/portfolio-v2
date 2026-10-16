# Portfolio v2, redesign plan (2026-10-16)

Goal: a portfolio that looks like a professional studio site, in the visual direction of colibrity.com
(white page, wide geometric type, dark floating header, dark full-screen hero, table-style work index,
motion on scroll), with our own content, assets and code. No copied logo, video, text or images.

## 1. What we have and what is wrong

- Paper-beige background and a soft serif read as "blog", not "studio". The user dislikes both.
- No motion at all apart from one fade on load. Studio sites feel alive: text that rises in, images
  that scale as they scroll in, hover previews, a moving strip.
- Work rows on dark bands are heavy and repetitive (four identical blocks).
- No breadcrumbs or page context on inner pages.

## 2. Visual system (tokens)

| Token | Value | Why |
|---|---|---|
| Page background | #FFFFFF | White page, like the reference |
| Ink | #202020 | Same near-black body colour family as the reference |
| Muted | #6B6B6B | Secondary text, passes contrast on white |
| Line | #E6E6E6 | Table rules |
| Dark surface | #111111 | Header bar, hero, contact band |
| Accent | #D6336C (magenta) | Active nav, hovers, highlights |
| Display font | Space Grotesk 500/700 (free, Google Fonts) | Wide geometric feel close to Neue Machina |
| Body font | Inter 400/500 | The reference also loads Inter |
| Radius | 18px header bar, 14px frames, 999px buttons | Rounded floating header like the reference |

Type scale: hero 64 to 140px uppercase, page titles 56 to 120px, row titles 32 to 48px, body 16 to 18px.

## 3. Motion (all off under prefers-reduced-motion)

1. Hero: title splits into lines that slide up and fade in one after another; sub text and buttons follow.
2. Hero background: our own animated field, slow drifting gradient blobs plus a fine grain, drawn in CSS,
   no video file. Optional mouse parallax on the blobs.
3. Scroll reveal: every section heading, row and image rises 24px and fades in when it enters the view
   (IntersectionObserver, one small client component).
4. Image reveal: case screenshots start slightly scaled (1.06) and clipped, and settle to 1.0 as they enter.
5. Work table hover: moving the pointer over a project row shows a floating preview of that build that
   follows the cursor; the row title slides right and turns magenta.
6. Marquee: an endless strip of the tools (Next.js, TypeScript, Supabase, OpenAI, Stripe...) under the hero.
7. Header: transparent over the hero, becomes the dark rounded bar once you scroll; hides on scroll down,
   shows on scroll up.
8. Buttons: arrow nudges on hover; underline links draw in from the left.
9. Page change: content fades up on each route.

## 4. Pages

- Home: dark full-screen hero (BILAL / FULL-STACK DEVELOPER), marquee, featured builds as large image
  cards with hover zoom, work table preview, services preview, dark contact band, footer.
- Work: breadcrumb, big title, table with columns Project / Type / Stack, hover preview.
- Case study: breadcrumb, title, meta row, hero screenshot with image reveal, problem, decisions,
  screens, three things to check, next build.
- Services, About, Process, Contact: breadcrumb, big title, content in the new style.
- Footer: dark, big wordmark, links, email.

## 5. Build order

1. Tokens, fonts, base styles (globals.css, layout.tsx).
2. Client motion pieces: Reveal, Header behaviour, WorkTable hover preview, Marquee.
3. Home page.
4. Work index and case study.
5. Services, About, Process, Contact.
6. Checks: build, every page at 390px and 1440px, no sideways scroll, no broken images,
   reduced-motion still readable, keyboard focus visible.
7. Commit as bilal404up, push, deploy, check live URLs.

## 6. Rules kept

- Facts only from the builds. No invented clients, numbers or results.
- No em dashes in content.
- Bilal's headshot only on About.
