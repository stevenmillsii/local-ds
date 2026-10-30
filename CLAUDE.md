# Design System — Claude Code Guide

## What this is

A learning-project design system for a headless design system, being rebuilt step by
step (the previous system is archived at git tag `v0-archive`). The owner is a
Staff Product Designer — strong on token taxonomy, naming, and governance,
newer to code. The goal is to learn the code side by building it, and to make
the system agent-friendly: AI can generate and audit within enforced rules.

## How we work (teaching mode)

- One roadmap step at a time. Don't build ahead of the current approved step.
- ✍️ steps: the owner types the code. Explain, don't hand over finished files.
- 🤖 steps: Claude may generate, then explains what it made for review.
- Design decisions (naming, token structure, component API, spec schema) are
  the owner's call — ask first, then give feedback and trade-offs.
- Define jargon on first use; flag convention vs. hard requirement.

## Target architecture (being built — not all of this exists yet)

```
packages/tokens  →  packages/components  →  Storybook
```

| Concern | Choice |
|---|---|
| Token format | DTCG JSON |
| Token build | Style Dictionary → CSS custom properties + Tailwind v4 theme |
| Token tiers | primitive → semantic (required); responsive as modes; component tokens only where a component needs them |
| Components | React + Base UI (headless), styled with semantic tokens only |
| Docs | Storybook + a machine-readable spec per component |
| Enforcement | Validator script (naming, tier references, no hardcoded values) in CI on every PR |
| Assistance | Claude skills (token generation, naming audit, a11y, governance) |
| Versioning | Changesets |
| Later | Figma sync (tokens → Variables, Code Connect / Figma MCP) |

## Decisions

Structural decisions are recorded as ADRs in [docs/decisions/](docs/decisions/),
one decision per record, written when the decision is made. Read them before
proposing structural changes. Template: `docs/decisions/TEMPLATE.md`.

## Running commands

pnpm is served via corepack shims and may not be on PATH in the tool
environment. If a pnpm command fails with "command not found":

```bash
export PATH="/usr/local/lib/node_modules/corepack/shims:$PATH"
```

Once packages exist, `pnpm run verify` (build, typecheck, lint, test) must pass
before a task is reported done.
