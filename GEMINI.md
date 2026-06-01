# CLAUDE.md — H&G Advocates Website

## Project overview
Next.js 14+ website for H&G Advocates, Uganda's oldest law firm (est. 1903).
Design reference: mckinsey.com — editorial minimalism, premium typography,
subtle transitions. No flashy animations. Restraint is the point.

## Stack
- Next.js 14+ App Router (TypeScript)
- Tailwind CSS (custom tokens defined in tailwind.config.ts)
- Framer Motion (scroll reveals and nav scroll state only)
- next/font/google (Playfair Display + DM Sans)
- Formspree (contact form, no backend)

## Commands
- `npm run dev` — start dev server on localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint check
- `npm run typecheck` — tsc --noEmit

## Architecture rules
- App Router only. Never use pages/. Never use getServerSideProps or getStaticProps.
- Every component is a Server Component by default.
- Add "use client" only when the component needs useState, useEffect,
  useScroll, or event handlers. Keep client components as leaf nodes.
- Data (practice areas, insights, team members) lives in lib/data/*.ts
  as plain typed arrays — no database, no API calls, no fetch on the frontend.
- No third-party UI libraries (no shadcn, no MUI, no Radix).
  Build every component from scratch with Tailwind.

## Folder structure
app/
  layout.tsx          ← fonts, metadata, global styles
  page.tsx            ← composes all homepage sections
  globals.css         ← CSS variables, ticker keyframe, base resets
components/
  Nav.tsx             ← "use client" (scroll state)
  Hero.tsx            ← server
  Ticker.tsx          ← server (CSS animation only)
  PracticeAreas.tsx   ← server
  About.tsx           ← server
  Recognition.tsx     ← server
  Insights.tsx        ← server
  CTABand.tsx         ← server
  Footer.tsx          ← server
  RevealWrapper.tsx   ← "use client" (Framer Motion whileInView)
lib/
  data/
    practices.ts
    insights.ts
    team.ts
public/
  images/
    team/             ← partner headshots (jpg/webp)
    logo.svg          ← official H&G logo when provided

## Design tokens (tailwind.config.ts)
colors:
  ink:        #0e1117   ← primary text, dark backgrounds
  ink-light:  #3a3d45   ← secondary text
  ink-muted:  #7a7d85   ← captions, labels
  gold:       #b8955a   ← accent, hover states, eyebrows
  gold-light: #d4b07a   ← gold hover variant
  cream:      #f8f6f1   ← section backgrounds, card hovers
  rule:       rgba(14,17,23,0.12)  ← borders and dividers

fonts:
  serif: var(--font-serif)   ← Playfair Display — headings only
  sans:  var(--font-sans)    ← DM Sans — all body text

## Styling rules
- Borders are always 0.5px, never 1px. Use border-[0.5px].
- No drop shadows. No gradients. No blur on content (backdrop-blur
  on nav only).
- Border radius: rounded-none for cards and buttons.
  Law firms are not rounded.
- Spacing scale: use Tailwind defaults. Don't invent arbitrary values
  unless px-[48px] for section padding is unavoidable.
- Section padding: px-12 py-24 on desktop, px-6 py-16 on mobile.
- Max content width: max-w-[1200px] mx-auto inside each section.
- Headings: font-serif font-medium — never font-bold in serif.
- Body text: font-sans font-light (300) for paragraphs,
  font-normal (400) for UI labels, font-medium (500) for CTAs.
- ALL CAPS labels: text-[10px] tracking-[0.14em] uppercase text-gold
- Never use Inter, Roboto, Arial, or system-ui as a font choice.

## Transitions & animations
- Nav underline: scaleX 0→1, origin-left, duration-[280ms] ease-out
- Card bottom border sweep: scaleX on ::after pseudo, origin-left,
  duration-300 ease-out. Use group/group-hover pattern.
- Arrow nudge on hover: translateX(4px), duration-200
- Card background on hover: transition-colors to cream, duration-200
- Scroll reveal (RevealWrapper.tsx):
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
- Stagger children with delayChildren: 0.1, staggerChildren: 0.1
- NO spring physics. NO bounce. NO scale transforms on cards.
- NO entrance animations in the ticker — CSS only.

## Component conventions
- Props interfaces named [ComponentName]Props, defined in same file.
- No default exports from lib/data files — use named exports.
- Images: always next/image with explicit width/height or fill + sizes.
- Links: always next/link for internal, <a target="_blank" rel="noopener">
  for external.
- Icons: inline SVG only — no icon library dependencies.
- Never hardcode contact details in components.
  Import from lib/data/contact.ts.

## Content that still needs the client
- [ ] Partner headshots → public/images/team/
- [ ] Official logo SVG → public/images/logo.svg
- [ ] Real insight articles → lib/data/insights.ts
- [ ] Formspree endpoint URL → .env.local as NEXT_PUBLIC_FORMSPREE_ID
- [ ] Confirmation on which subpages are in scope (phase 2)

## Environment variables
NEXT_PUBLIC_FORMSPREE_ID=        ← contact form endpoint

## Do not
- Do not use the pages/ directory
- Do not add "use client" to layout.tsx or page.tsx
- Do not install shadcn, Radix, Headless UI, or any component library
- Do not use CSS modules — Tailwind only
- Do not use any colour not defined in the token list above
- Do not add rounded corners to buttons or cards
- Do not use font-bold on serif headings
- Do not add box shadows to cards
- Do not fetch data at runtime — all content is static in lib/data/
