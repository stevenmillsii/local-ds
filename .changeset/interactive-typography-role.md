---
"@stevenmillsii/tokens": minor
---

Add `interactive` typography role to `TypographyTokens`, capturing per-brand font-weight, text-transform, and letter-spacing for interactive labels (buttons, nav, tabs).

- HFD: weight 500, uppercase, 0.025em tracking
- Personal: weight 600, case-preserving, no extra tracking
- Both brands implement the role; CSS generator emits `--font-weight-interactive`, `--tracking-interactive`, and `--text-transform-interactive` per theme

See [ADR-003](../docs/decisions/003-interactive-typography-role.md).
