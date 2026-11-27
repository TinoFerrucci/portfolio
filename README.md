# constantinoferrucci.com.ar

Personal portfolio of Constantino Ferrucci — Senior GenAI Engineer
(contractor via TCS, working with Apple). Static site on GitHub Pages,
with a Cloudflare Worker backing the in-page AI assistant.

Live: <https://constantinoferrucci.com.ar/>

## Structure

```
.
├── index.html                 Page markup (must stay at the repo root)
├── CNAME                      Custom domain for GitHub Pages
├── 404.html                   Standalone not-found page (inline styles only)
├── sitemap.xml / robots.txt   SEO: single URL + sitemap pointer
├── llms.txt                   Plain-text profile for LLM consumers
├── assets/
│   ├── css/styles.css         All styles: theme tokens, layout, components
│   ├── js/app.js              i18n (ES table), theme, chat client, animations
│   ├── img/profile.jpg        Portrait used in the hero
│   ├── fonts/                 Self-hosted variable fonts (latin subset)
│   ├── cv/                    Downloadable CV
│   └── og/                    Social preview image + the page that renders it
└── worker/worker.js           Cloudflare Worker: /models and /chat endpoints
```

`index.html` and `CNAME` live at the root because GitHub Pages serves the
site from there. `worker/` deploys separately to Cloudflare — do not touch
it for site-only changes.

## Design and content

The site uses the blueprint design: hairline strokes, mono figure labels and
schematic diagrams on a paper-like base, in both light and dark themes. The
hero carries the portrait, role and current facts next to FIG 01, a reference
agent architecture (LangGraph supervisor, retrieval/data/tool agents over A2A
and MCP, an AutoGen review loop, and an OpenTelemetry feedback loop).

Sections run in this order: hero (portrait, role, sentence, facts, CTAs,
FIG 01) → About + What I do (three pillars, each with Evidence links) →
Projects → Experience and education → Stack → Ask my assistant → Contact.
Projects are four schematics — SynergyX-AI, Datagentra,
fastapi-fastmcp-autogen and the dog breed recognition pipeline — followed by
an archive strip of other repositories.

All body copy is bilingual. English is in the HTML; every translatable node
carries a `data-i18n` key, and Spanish lives in the `ES` table in `app.js`,
applied at runtime by the EN/ES toggle. The in-page assistant talks to the
Cloudflare Worker (`/models` and `/chat`), streams responses, and falls back
to buffered JSON when streaming is unavailable.

## Local development

No build step and no dependencies — plain HTML, CSS and JS:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>. The page stays readable in English
with JavaScript disabled; Spanish strings apply at runtime from `app.js`.

## Conventions

- **Styles** live only in `assets/css/styles.css`. Light is the base layer;
  dark comes from `prefers-color-scheme` plus an explicit `[data-theme]`
  override, so both paths stay in sync. Tokens first (`--font-mono` for
  mono), no magic numbers, `prefers-reduced-motion` respected.
- **Scripts** live only in `assets/js/app.js`, loaded at the end of
  `<body>`. Chat markdown deps (marked + DOMPurify) load lazily on first
  chat intent via `ensureChatDeps()`; rendering falls back to escaped
  plain text until they arrive.
- **Copy honesty:** contractor wording everywhere ("contractor via TCS",
  never Apple FTE); project claims limited to what the repos show.
- **Fonts are self-hosted.** One variable `.woff2` per family, no
  `unicode-range` (single local file: it saves nothing). Max 3 preloads.

## Deployment

- **Site** — GitHub Pages publishes automatically on every push to `main`.
- **Worker** — deployed separately to Cloudflare; the frontend reaches it
  through `WORKER_URL` in `assets/js/app.js` and tolerates pre-streaming
  Workers by branching on the response `content-type`.
