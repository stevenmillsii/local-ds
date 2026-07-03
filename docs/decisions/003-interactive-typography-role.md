# ADR-003: `interactive` typography role for buttons, nav, and labels

**Status:** Accepted

**Date:** 2026-07-03

## Context

HFD and personal both use Geist Mono for interactive UI text (buttons, nav,
labels) — that much was already documented in the brand typography comments.
But the two brands diverge in *how* they render it: HFD renders interactive
labels uppercase at weight 500; personal preserves case at weight 600. Both
brands already had `500` and `600` available in their shared `fontWeight`
scale, but nothing in the token contract said *which* weight or case
treatment an interactive label should use in a given brand — that decision
was implicit, living only in code comments.

`packages/components/src/Button/Button.tsx` is shared across brands and must
stay brand-agnostic (per the primitive/semantic split in
[ADR-002](002-primitive-semantic-token-separation.md)). Hardcoding
`uppercase font-medium` in the component would make HFD's look leak into
personal's rendering, or vice versa. The component needed a semantic token
to point at, and none existed for "how does this brand style interactive
text" — only the general type scale.

## Decision

Add an `interactive` role to `TypographyTokens` (`packages/tokens/src/types.ts`):

```ts
interactive: {
  fontWeight: CSSValue;
  textTransform: CSSValue;
  letterSpacing: CSSValue;
}
```

Both brands implement it — HFD: `500` / `uppercase` / `0.025em`; personal:
`600` / `none` / `0em`. The CSS generator emits these as
`--font-weight-interactive`, `--tracking-interactive`, and
`--text-transform-interactive`, and `Button` consumes them via `font-mono`
(shared font-family) plus `tracking-interactive` and two arbitrary-property
declarations (`[font-weight:var(--font-weight-interactive)]`,
`[text-transform:var(--text-transform-interactive)]`).

Font-weight is applied via arbitrary property rather than a generated
`font-interactive` Tailwind utility: `tailwind-merge` (used in `cn()`) only
recognizes a fixed set of font-weight keywords and otherwise classifies any
`font-*` class as the font-family group, which silently dropped `font-mono`
when both were merged. The arbitrary-property form sidesteps that ambiguity
entirely.

This role is named for the *purpose* (interactive labels generally), not for
Button specifically — nav, tabs, and other label-bearing components are
expected to consume the same role later.

## Alternatives Considered

- **Hardcode `uppercase font-medium` for HFD directly in Button** — rejected;
  bakes one brand's look into a component both brands share, and would need
  brand-conditional logic in the component to differ for personal, violating
  the boundary rule that brand differences flow through tokens, not
  component code.
- **Extend `tailwind-merge`'s config (`extendTailwindMerge`) to recognize
  `font-interactive` as a font-weight-group value** — would have let us keep
  a real `font-interactive` utility class. Rejected for now: it works but
  makes `cn()`'s behavior depend on a maintained list of custom theme keys
  that has to be kept in sync by hand every time a new named value is added
  to any `font-*`-prefixed namespace. Arbitrary properties needed zero extra
  config and don't accumulate that maintenance cost.
- **A single flat `interactiveFontWeight` / `interactiveTextTransform` pair
  of top-level typography keys instead of a nested `interactive` object** —
  rejected only for consistency with how other multi-value roles
  (`fontFamily`, `fontWeight` scale itself) are already nested objects in
  `TypographyTokens`.

## Consequences

- Any future interactive/label component (nav links, tabs, chips) has a
  ready-made semantic role to consume instead of re-deriving brand-specific
  weight/case rules — but only if authors know to reach for it; nothing
  currently enforces that a new component *must* use `interactive` over ad
  hoc classes. Should be called out explicitly in
  [CONTRIBUTING.md](../governance/CONTRIBUTING.md) if this pattern proves
  durable.
- `TypographyTokens` is a required field on both brands now, so adding a
  third brand means filling in all three `interactive` values — enforced by
  the type system, same tradeoff as every other semantic role.
- The font-weight arbitrary-property workaround means `font-weight:` won't
  show up if someone runs a Tailwind class in the DevTools "styles" jump-to
  utility the way `font-bold` would — mildly less discoverable than a named
  utility, worth revisiting if `tailwind-merge` adds a way to register
  custom keys without a full config takeover.
