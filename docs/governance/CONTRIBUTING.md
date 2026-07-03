# Contributing

This is a governance-aware design system: every component, token, and boundary
rule exists for a reason. This document covers how to add to it correctly. For
the reasoning behind major structural decisions, see [docs/decisions](../decisions).

## Adding a Component

A component is not "done" when it renders — it's done when it meets every item
below.

1. **Primitives layer first.** If the underlying behavior doesn't exist yet,
   add a thin re-export in `packages/primitives/src/{Name}/index.ts` pointing
   at the relevant Base UI primitive. No styling, no logic, no tokens — this
   layer is purely an import surface.
2. **Components layer.** Build the styled component in
   `packages/components/src/{Name}/` on top of the primitive, using
   `class-variance-authority` for variants and Tailwind utility classes for
   styling.
3. **Semantic tokens only.** Every color, radius, spacing, or typography value
   used must resolve to a semantic Tailwind utility (`bg-primary`,
   `text-foreground`, `rounded-base`) or a semantic CSS var
   (`var(--color-primary)`). Never reference a brand's primitive scale
   (`--hfd-primitive-ember-600`) directly from a component. See
   [ADR-002](../decisions/002-primitive-semantic-token-separation.md) for why.
4. **Both brand themes tested.** Render the component under both the `hfd`
   and `personal` themes before calling it done. A component that only looks
   right in one brand is a bug, not a follow-up. If a variant needs
   brand-specific behavior beyond what tokens provide, that's a signal the
   token contract is missing something — raise it, don't hardcode around it.
5. **Accessibility.** At minimum:
   - Keyboard operable (tab to focus, correct key activates it)
   - Visible focus state using `--color-focus-ring` / `focus-visible:ring-*`
   - Correct ARIA role/attributes — usually inherited for free from the Base
     UI primitive; verify it wasn't overridden away
   - Passes basic color-contrast in both brand themes (the token contract is
     designed to hold contrast, but verify against your actual variant/state
     combination)
6. **Tests.** `{Name}.test.tsx` using vitest + @testing-library/react.
   Cover each variant/size, disabled state, and keyboard interaction at
   minimum.
7. **Docs entry.** Add a demo section to `apps/docs/app/page.tsx` (or a
   dedicated route) showing every variant and size, ideally with a way to
   toggle brand theme.
8. **`pnpm run verify` passes.** No exceptions — see root `CLAUDE.md`.
9. **Changeset.** Run `pnpm changeset` and select at least
   `@stevenmillsii/components`. A component without a changeset hasn't
   shipped, regardless of whether the code is merged.

## Naming Conventions

**Components**
- PascalCase matching the exported name: `Button`, `Dialog`, `TextField`
- Files match the component name exactly: `Button.tsx`, `Button.test.tsx`,
  `index.ts` (barrel re-export only, no logic)
- Compound components use a dot or nested folder consistently within that
  component — pick one pattern per component, don't mix

**Tokens**
- Primitive CSS vars: `--{brand}-primitive-{palette}-{step}` — e.g.
  `--hfd-primitive-ember-600`. These are brand-internal and never referenced
  outside `packages/tokens`.
- Semantic CSS vars: `--{brand}-{category}-{path}` — e.g.
  `--hfd-color-primary-base`. These are what the token layer maps to, and the
  only vars a component may reference directly.
- Tailwind theme vars (`@theme` block in `apps/docs/globals.css`):
  `--color-{name}`, `--radius-{name}`, mapping semantic vars to Tailwind's
  utility system.
- Tailwind utilities used in components are always the derived ones:
  `bg-primary`, `text-foreground`, `rounded-base` — never a raw hex, never a
  primitive var.

**Files**
- One component per folder under `packages/components/src/{Name}/`
- Barrel files (`index.ts`) only re-export — no implementation

## Boundary Rules

The dependency graph is one-directional and strictly enforced:

```
packages/tokens  →  packages/primitives  →  packages/components  →  apps/docs
```

- **`packages/tokens`** has zero runtime dependencies. It exports raw values
  and generated CSS custom properties. It does not know that primitives or
  components exist.
- **`packages/primitives`** may only import from `@base-ui-components/react`.
  It never imports `tokens` or `components`. Its entire job is to be a
  controlled import surface over Base UI — swapping the underlying primitive
  library later should mean editing this layer only.
- **`packages/components`** may import `tokens`, `primitives`,
  `class-variance-authority`, and `tailwind-merge`. This is the only layer
  that combines styling with behavior.
- **`apps/docs`** may import anything. Nothing may import from `apps/docs` —
  it is a leaf, not a dependency.

If you find yourself importing `tokens` or `components` into
`packages/primitives`, or importing `apps/docs` from anywhere, stop — that's a
boundary violation, not a shortcut. Fix the layering before continuing, even
if it means duplicating a small amount of code temporarily.

## Further Reading

- [Architecture Decision Records](../decisions) — the "why" behind structural
  choices, not just the "what"
- Root [`CLAUDE.md`](../../CLAUDE.md) — agent-facing operational rules
  (verification commands, changeset workflow, tech stack)
