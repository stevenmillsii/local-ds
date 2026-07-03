---
"@stevenmillsii/tokens": minor
---

Establish full semantic token contract and fill in real brand values for HFD and personal.

- Add `makeRef` factory utility — semantic tokens now reference primitives via `var()` chains instead of hardcoded hex values
- Expand `SemanticColors` contract with `focus.ring`, `link` (base/hover/visited), and `inverse` (background/foreground/border) slots; both brands implement all slots
- HFD: fill in complete 11-step primitive scales (black/steel/ember) with real hex values from design source; wire all semantic slots through `makeRef`; set typography (Geist/Geist Mono), all radii to 0px, font stacks
- Personal: replace placeholder primitives with single warm `neutral` ramp (100–900); map all semantic slots; shifted type scale (base=20px), real radius values (0–16px), focus ring anchored to #0252BC (the only non-neutral color)
- Add optional `2xs` font-size slot to `TypographyTokens`; generate font-size `@theme` vars dynamically so brands with different size keys (e.g. `2xs`) flow through without manual `css-gen.ts` edits
