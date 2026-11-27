# Blueprint port

Objective: rebuild the live site (`index.html`, `assets/css/styles.css`, `assets/js/app.js`) in the
owner-approved blueprint design from `.reviews/poc/poc-f-blueprint.html`, keeping every behavior.
Branch `feat/ui-declutter`. Delivery `ask-on-risk`. No test runner: checks are `node --check`,
rendered screenshots (1440 dark, 360/390 light) and the behavior list in `.reviews/R5-port-checklist.md`.

## Specs

- S1 Visual parity with the POC: tokens, both themes, hairline blueprint system, FIG 01 reference agent
  architecture, project schematics, subgrid stack, no text under 12px, no overflow at 360px.
- S2 Section order: Hero (portrait, role, sentence, facts, CTAs, FIG 01) → About + What I do (3 pillars
  with Evidence links) → Projects → Experience and education → Stack → Ask my assistant → Contact.
- S3 Behavior parity per `.reviews/R5-port-checklist.md` §1-§11: every id and selector `app.js` uses,
  EN/ES toggle with every key in both locales, theme persistence, chat (lazy models, streaming,
  buffered JSON fallback, suggestions, errors, clear), command palette, mobile drawer, reveal,
  progress bar, back-to-top, CV download.
- S4 Head: canonical, Open Graph, Twitter card, theme-color, JSON-LD Person, favicon, font preloads.
- S5 Copy: the POC's reviewed English copy; Spanish translations for every changed key; no claims
  without evidence (see `.reviews/R6c-content.md`, `.reviews/R7-*.md`).
- S6 New CV PDF published at the same URL.

## Tasks

| ID | Specs | Route | Status | Commit |
|----|-------|-------|--------|--------|
| T0 | S6 | inline | done | c34894a |
| T1 | S1 | Herdr agy1 (POC final fix pass F6) | done | n/a (POC is not tracked) |
| T2 | S1 S3 | Herdr cx1: tokens, shell, nav, drawer, footer | done | 4a31343 |
| T3 | S1 S2 S5 | Herdr cx1: hero + FIG 01, About + What I do | done | 4e95ca6 |
| T4 | S1 S2 S5 | Herdr cx1: projects, experience, stack, contact | done | cc36e42 |
| T5 | S1 S3 | Herdr cx1: chat + command palette restyle, polish | done | f44a55c |
| T6a | S5 | Herdr oc1: llms.txt, README | done | 32b1ed4 |
| T6b | S4 | Claude: meta descriptions, JSON-LD, ES figure labels | done | 1544898 |
| T6c | S4 | Herdr agy1: OG image redesign | done | 6b4596e |
| T7 | S1 S3 | Static checks and screenshots done (EN/ES, dark/light, 390px); interactive checks (drawer, palette, live chat) pending owner test on localhost | partial | |

Route note: the owner asked for Herdr agents; Claude reviews each diff, runs the checks and commits.

## Log

- L1 (2026-11-27) Owner: "Si, arranca con los arreglos y despues el port y subi el cv nuevo igual, ignora que diga rosario"
- L2 Owner chose design F (blueprint), approved the IA synthesis (R6a-c) and the agent-orchestration FIG 01
  ("Pasala a agentes con LangGraph, MCP y AutoGen, tambien si quieres A2A, no hay problema eso").
- L4 Each step verified by: Codex DOM + i18n audit script (all ids, keys in both locales, EN
  copy equals dictionary), `node --check`, Claude screenshots 1440 dark and 390 light with fresh
  Chrome profiles. Codex on Windows wrote CRLF into LF files; normalized with `sed 's/\r$//'`
  before each commit.
- L3 Commits before the port: ad32de2 (T1 of ui-declutter), d8d6fd2 (chat perf), 6c5fed8 (404), c34894a (CV).
