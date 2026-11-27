# UI declutter

## Objective

Make the portfolio lighter and remove the visual patterns that read as a generated
template (violet gradients, particle canvas, floating cards, typing effect).

## Scope

`index.html`, `assets/css/styles.css`, `assets/js/app.js`. Local only: no push, no deploy.
`404.html` and `assets/og/*` still carry the old indigo and are out of scope so far.

## Constraints

- Static site on GitHub Pages; no build step, no new dependencies.
- `.reveal` keeps its IntersectionObserver.
- No runnable test suite: checks are `node --check` plus rendered screenshots
  (dark desktop 1440, light mobile 390).

## Tasks

- [x] T1 Single accent, warm neutrals, static hero, canvas removed (inline; one writer already held the full context)
  - Accent: vermilion (`240,106,60` dark / `196,68,20` light); `--purple`, `--pink`, accent shadows removed.
  - Background: `#0e0e0c` dark, `#f6f5f1` light; grays tinted warm.
  - Hero: left-aligned, solid name, static role line, facts row replaces floating cards and tag.
  - Evidence: `node --check` passes, no horizontal overflow at 390px, only console error is the
    Worker CORS rejection of the localhost origin.
- [ ] T2 Section consistency: left-align all section headers, lighter skills pills, project link icon alignment, nav active state on "What I do"
- [ ] T3 Scales and weight: radius and font-size tokens, replace `transition: all`, trim `backdrop-filter`, portrait as AVIF/WebP
- [ ] T4 Typography: replace Inter + Space Grotesk (needs new self-hosted font files)
- [ ] T5 Align `404.html` and the OG image with the new palette

## Delivery

Forecast above 400 changed lines across T1-T5; strategy `ask-on-risk`, to be decided before any PR.

## Next step

User reviews T1 locally at `http://127.0.0.1:4173`, then T2.
