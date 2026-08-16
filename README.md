# Portfolio — Next.js migration (V1.5 + blog infrastructure)

Migrated from the Vite/CSR version to Next.js so the future blog can be
statically generated and properly SEO-indexed — see the reasoning in chat.

## What's different from the Vite version
- **Framework**: Next.js App Router instead of Vite CSR
- **Routing**: file-based (`src/app/`) instead of a single `App.tsx`
- **New**: `/blog` — MDX posts, statically generated, individually SEO-tagged
- **New**: `sitemap.xml` and `robots.txt`, generated automatically
- Design tokens, components, and content structure are otherwise the same —
  same paper/ink/signal palette, same boot-log hero, same case study cards

## Getting started
```bash
npm install
npm run dev       # localhost:3000
npm run build      # production build (also used by tests/CI)
npm start          # serve the production build locally
```

## Editing content
- **Portfolio**: `src/data/content.ts` — same as before (profile, case studies, skills)
- **Blog posts**: add a `.mdx` file to `content/blog/`, e.g. `content/blog/my-post.mdx`.
  Required frontmatter:
  ```
  ---
  title: "Post title"
  description: "One-line summary for SEO/previews"
  date: "2026-08-20"
  tags: ["qa", "playwright"]
  ---
  ```
  Then write normal Markdown below. It appears on `/blog` automatically —
  no registration step needed, the file system is the source of truth.
- Once you have a real domain, update `profile.siteUrl` in `content.ts` —
  it drives SEO metadata, Open Graph tags, and the sitemap.

## Testing
```bash
npx playwright install chromium   # first time only
npm run test:e2e
```
Covers homepage sections, mobile nav, and blog index/post rendering.
CI (`.github/workflows/ci.yml`) runs build + Playwright on every PR.

## Migrating your existing repo to this
1. In your existing `portfolio` repo:
   ```bash
   git checkout -b feature/nextjs-migration
   ```
2. Delete the old contents (keep `.git`), copy everything from this project in.
3. Bring over your personalized values in `content.ts` if you'd already edited them.
4. `git add . && git commit -m "Migrate to Next.js, add blog infrastructure"`
5. `git push -u origin feature/nextjs-migration`
6. Open the PR on GitHub — check the Vercel preview link and CI results
   before merging to `main`.

## Deploying
Same as before — Vercel auto-detects Next.js, zero config needed. Once merged
to `main`, your existing Vercel project will pick it up automatically.

## Roadmap
- **Niche decision**: pick a content direction (QA/SDET-focused recommended —
  see chat for reasoning), then write your first 5-10 real posts before
  applying for AdSense (approval generally needs real, original content
  and some organic traffic — this is a months-long build, not instant).
- **V3 — Interactive/AI layer**: embedded API-tester widget or "ask about my
  projects" chat.
- **V4 — Polish**: OG image generation per post, dark mode, Lighthouse CI gate.
