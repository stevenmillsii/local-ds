# Design System — Claude Code Guide

## SETUP: Replace @YOUR_ORG

`@YOUR_ORG` is a placeholder for your GitHub org/username. Replace it everywhere before publishing:
- All `packages/*/package.json` → `"name"` field
- All `packages/*/package.json` → workspace dependency refs
- `apps/docs/package.json` → dependency refs
- `.npmrc` → registry scope line
- `.changeset/config.json` → `"ignore"` list
- `apps/docs/app/globals.css` → token CSS import

## Running Commands in Claude Code

pnpm is served via corepack shims and may not be on PATH in the tool environment. If any pnpm command fails with "command not found", prefix with:

```bash
export PATH="/usr/local/lib/node_modules/corepack/shims:$PATH"
```

Or use this one-liner form for any command: `PATH="/usr/local/lib/node_modules/corepack/shims:$PATH" pnpm run verify`

The root `package.json` sets `"packageManager": "pnpm@9.0.0"` — update this to match your actual installed version (run `pnpm --version`).

## Architecture

```
packages/tokens  →  packages/primitives  →  packages/components  →  apps/docs
```

### Package Boundaries (strictly enforced)

| Package | What it does | What it may import |
|---|---|---|
| `packages/tokens` | Raw token values + generated CSS custom properties | Nothing (zero runtime deps) |
| `packages/primitives` | Re-exports from Base UI; our import surface | `@base-ui-components/react` only — never `tokens` or `components` |
| `packages/components` | Styled components: primitives + tokens + Tailwind | `tokens`, `primitives`, `class-variance-authority`, `tailwind-merge` |
| `apps/docs` | Next.js playground; consumes all packages | Anything — but is never imported by packages |

**Boundary violation rule**: If you see `primitives` importing from `tokens` or `components`, or `tokens` importing anything runtime, stop and fix before proceeding.

## Verification (run after every change)

```bash
pnpm run verify
```

This runs `turbo run build typecheck lint test` across all packages in dependency order.

**A failure is blocking.** Do not report a task as done if `pnpm run verify` fails. Fix the failure first.

Individual commands:
```bash
pnpm build       # Build all packages (tokens → primitives → components → docs)
pnpm typecheck   # Type-check all packages
pnpm lint        # Lint all packages (stub — add ESLint or Biome when ready)
pnpm test        # Run all tests
```

## Changeset Workflow

**Any change to a published package is not done until it has a changeset.**

Published packages: `@YOUR_ORG/tokens`, `@YOUR_ORG/primitives`, `@YOUR_ORG/components`  
Not published: `@YOUR_ORG/docs`

```bash
# After editing any published package:
pnpm changeset
# → Interactive: pick affected packages, choose bump type (patch/minor/major), write summary

# When ready to release:
pnpm version              # Applies changesets, bumps package.json versions, updates CHANGELOGs
pnpm publish:packages     # Builds everything then runs changeset publish
```

Requires `GITHUB_TOKEN` env var with `write:packages` scope for publishing.

## Adding a New Component

Follow this exact sequence — verify at step 6 before moving on:

1. **Primitives layer** — Create `packages/primitives/src/{Name}/index.ts`  
   Re-export the relevant Base UI primitive. No styling, no logic.

2. **Primitives barrel** — Add export to `packages/primitives/src/index.ts`

3. **Components layer** — Create `packages/components/src/{Name}/`:
   - `{Name}.tsx` — styled component using primitives + Tailwind classes + CSS vars
   - `{Name}.test.tsx` — vitest + @testing-library/react tests
   - `index.ts` — barrel: `export { Name } from './{Name}'`

4. **Components barrel** — Add export to `packages/components/src/index.ts`

5. **Docs** — Add a demo section to `apps/docs/app/page.tsx` or a new route

6. **Verify** — `pnpm run verify` must pass

7. **Changeset** — `pnpm changeset` → select at minimum `@YOUR_ORG/components`

## File/Naming Conventions

- Components: PascalCase (`Button`, `Dialog`, `TextField`)
- Files match component name: `Button.tsx`, `Button.test.tsx`, `index.ts`
- CSS var naming: `--{brand}-{category}-{path}` for tokens (e.g. `--hfd-color-primary-base`)
- Tailwind theme vars (in `globals.css @theme` block): `--color-{name}`, `--radius-{name}`
- Tailwind utilities derived from theme: `bg-primary`, `text-foreground`, `rounded-base`, etc.

## Token Workflow

Token values are in `packages/tokens/src/brands/{brand}/`:
- Fill in the `TODO:` placeholders with real CSS color values (hex, oklch, etc.)
- Run `pnpm build --filter=@YOUR_ORG/tokens` to regenerate CSS files in `dist/themes/`
- Token CSS maps primitive vars → semantic vars; `apps/docs/globals.css` maps semantic → Tailwind theme

## Tech Stack Reference

| Concern | Tool |
|---|---|
| Build orchestration | Turborepo v2 |
| Package builds | tsup (ESM + CJS + types) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first config) |
| Primitive components | `@base-ui-components/react` (Base UI) |
| Variant management | `class-variance-authority` + `tailwind-merge` |
| Testing | vitest + @testing-library/react + jsdom |
| Versioning | Changesets |
| Registry | GitHub Packages (private, `access: "restricted"`) |

## Package Scripts Per Package

Each package has these scripts (turbo calls them):
- `build` — tsup (packages) or next build (docs)
- `typecheck` — `tsc --noEmit`
- `lint` — stub or configured linter
- `test` — `vitest run --passWithNoTests`

The `packages/tokens` build also runs `tsx scripts/generate-css.ts` after tsup to write CSS files to `dist/themes/`.
