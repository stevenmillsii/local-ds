---
"@stevenmillsii/components": minor
---

Harden Button as the proof-of-pattern component: fix focus ring referencing the wrong semantic token, add a `loading` state, and add loading test coverage.

- Fix focus-visible ring using `var(--color-primary)` instead of `var(--color-focus-ring)` — on the personal brand this rendered the ring in the wrong color instead of the intended blue accessibility anchor
- Add `loading` prop: renders a decorative spinner and sets `aria-busy`, using `aria-disabled` (via Base UI's `focusableWhenDisabled`) rather than the native `disabled` attribute — keeps the button focusable and in the tab order instead of dropping focus to `<body>` mid-action
- `disabled` and `loading` combined falls back to native `disabled`
- Add test coverage for the loading state (aria-busy, aria-disabled, focusability, no-op click, accessible name preserved)
