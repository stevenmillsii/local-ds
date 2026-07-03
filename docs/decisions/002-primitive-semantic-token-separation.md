# ADR-002: Primitive/semantic token separation

**Status:** Accepted

**Date:** 2026-07-02

## Context

This system supports multiple brands (`hfd`, `personal`) that look
fundamentally different — different palettes, different radii (HFD is sharp
0px throughout, personal ranges 2px–16px), different type scales. Components,
however, need to be written once and work correctly under any brand without
per-brand conditional logic living inside component code.

The naive approach — components referencing raw brand color values (hex, or a
brand's palette step like "ember-600") directly — would mean every component
either hardcodes a specific brand's look, or grows brand-aware branching
logic. Both break the point of a shared component layer.

## Decision

Token generation happens in two layers, and components may only ever consume
the second layer:

1. **Primitives**: raw palette values per brand, exposed as CSS vars named
   `--{brand}-primitive-{palette}-{step}` (e.g. `--hfd-primitive-ember-600`).
   Each brand defines its own primitive set independently — HFD has
   black/steel/ember; personal has a single warm neutral scale. These are
   never referenced outside `packages/tokens`.
2. **Semantics**: intent-based aliases named `--{brand}-{category}-{path}`
   (e.g. `--hfd-color-primary-base`) that resolve via `var()` to a primitive.
   Semantics describe *purpose* (primary, foreground, border, feedback-error)
   rather than *appearance* (ember, steel-400). These map into Tailwind's
   `@theme` block as `--color-{name}`, `--radius-{name}`, etc., which is what
   components actually consume via utilities like `bg-primary` or
   `text-foreground`.

`packages/components` may reference semantic tokens only — never a brand's
primitive scale. The full semantic contract (`SemanticColors` in
`packages/tokens/src/types.ts`) is the same shape across every brand; only the
values differ.

## Alternatives Considered

- **Components reference primitives directly, with per-brand overrides** —
  rejected because it means every component needs brand-conditional logic or
  brand-specific variant props, defeating the purpose of a shared component
  library. Adding a third brand would mean touching every component instead
  of just defining its tokens.
- **Single flat token namespace (no primitive/semantic split)** — rejected
  because it collapses "what a color is" (ember-600) with "what it's for"
  (primary button background), which makes it impossible to reassign a role
  to a different palette value without touching every consumer, and makes
  brand theming (swapping the whole palette while keeping roles stable)
  much harder.
- **CSS-in-JS theme objects instead of CSS custom properties** — rejected to
  keep `packages/tokens` free of any runtime dependency (per its package
  boundary — see root `CLAUDE.md`) and to allow brand switching via a CSS
  class/attribute rather than a JS re-render.

## Consequences

- Adding a new brand means defining a full primitive set plus the same
  semantic contract shape — no component code changes required, by
  construction.
- Adding a new semantic role (e.g. a new feedback state) requires updating
  `SemanticColors` in `packages/tokens/src/types.ts` and filling it in for
  *every* brand — a deliberate cost, since it means the type system catches
  brands that haven't defined the new role yet, rather than silently falling
  back to nothing.
- Components can never do brand-specific one-offs cheaply. If a real
  brand-specific visual need arises that the semantic contract doesn't cover,
  the correct fix is to extend the semantic contract (and define it for every
  brand) — not to reach into a primitive var from a component. This is the
  boundary CI/reviewers should enforce; see
  [CONTRIBUTING.md](../governance/CONTRIBUTING.md#boundary-rules).
- There's a small indirection cost (two `var()` hops from component to raw
  value) that shows up when debugging computed styles — acceptable trade-off
  for the theming flexibility it buys.
