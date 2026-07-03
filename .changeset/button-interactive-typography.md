---
"@stevenmillsii/components": patch
---

Button now consumes the brand's `interactive` typography role: both brands render Geist Mono, HFD uppercase at weight 500, personal case-preserving at weight 600. Font-weight is applied via arbitrary property rather than a Tailwind utility class to avoid a `tailwind-merge` misclassification that was silently dropping `font-mono`.
