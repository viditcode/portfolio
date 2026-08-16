# Portfolio — V1

React + TypeScript + Tailwind v4, tested with Playwright, CI on GitHub Actions.

## Design direction
- **Signature**: hero opens with a boot-log that "tests" the page as it loads, then resolves into your name — a literal nod to what you do.
- **Palette**: paper `#F7F6F2`, ink `#14181C`, signal-green `#1F6F5C` (pass), amber `#A66A1E` (in progress).
- **Type**: JetBrains Mono (display/data) + Inter (body).
- Tokens live in `src/index.css` under `@theme`.

## Getting started
```bash
npm install
npm run dev        # local dev server
npm run build       # production build (type-checks first)
npm run preview     # serve the production build locally
```

## Editing your content
Everything you need to personalize is in **`src/data/content.ts`**:
- `profile` — name, tagline, email, GitHub/LinkedIn, resume path
- `caseStudies` — your project write-ups (currently placeholder/public-demo framing per your NDA constraints — swap in real generalized details as you go)
- `skillGroups` — skills grid
- `bootLines` — the hero terminal animation text

Drop your resume PDF into `public/resume.pdf` (matches `profile.resumeUrl`).

## Testing
```bash
npx playwright install chromium   # first time only
npm run test:e2e                  # headless run
npm run test:e2e:ui               # interactive Playwright UI mode
```
Tests live in `tests/e2e/home.spec.ts` — covers navigation, section rendering,
responsiveness, and basic landmark/a11y checks. Add a new `.spec.ts` file per
feature as you build V2/V3.

CI (`.github/workflows/ci.yml`) runs lint → type-check/build → Playwright on
every push/PR to `main`, and uploads the HTML report as an artifact if a test
fails.

## Deploying
**Vercel** (recommended, zero-config):
1. Push this repo to GitHub.
2. Import it at vercel.com → it auto-detects Vite.
3. Every PR gets a preview URL for free — good for the "here's what changed" habit.

Netlify and GitHub Pages both work too; Vite's default build output is
`dist/`, which is all either needs.

## Roadmap
- **V2 — Blog**: MDX-based write-ups (security testing walkthroughs, API
  testing notes). Suggest `@mdx-js/rollup` + a `/blog` route via `react-router`.
- **V3 — Interactive/AI layer**: embedded mini API-tester widget, or an
  "ask about my projects" chat backed by a small serverless function.
- **V4 — Polish**: dark mode, Lighthouse CI gate, public Playwright report
  page ("how this site is tested").
