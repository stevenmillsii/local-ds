# ADR-001: Base UI over Radix as the primitive engine

**Status:** Accepted

**Date:** 2026-07-02

## Context

`packages/primitives` needs an unstyled, accessible component engine to build
on — something that handles keyboard interaction, focus management, and ARIA
wiring so `packages/components` only has to worry about styling and variants.
Radix UI has been the default choice for this kind of layer for years, so it
was the natural starting point to evaluate.

Two events changed the calculus in early 2026:

1. Radix was acquired by WorkOS. Its release cadence and roadmap since have
   visibly slowed — issues and PRs sit longer, and there's less signal on
   where the library is headed under new ownership.
2. Base UI (the MUI team's unstyled primitive library, successor in spirit to
   Radix's own approach) has been under active, fast-moving development, with
   frequent releases and a team that has a long track record of maintaining
   component libraries at scale.

This project is also explicitly a learning vehicle for understanding primitive
internals, not just a consumer of a black-box library — so API design that
makes internals legible matters more here than it might for a team just
shipping features.

## Decision

Use `@base-ui-components/react` as the primitive engine underneath
`packages/primitives`, pinned to an exact version (currently
`1.0.0-rc.0`) rather than a caret range, since it's still pre-1.0 and the API
surface is still moving.

## Alternatives Considered

- **Radix UI** — the incumbent, well-documented, widely used. Rejected due to
  slowed update velocity post-WorkOS-acquisition and uncertainty about
  long-term maintenance priorities under the new owner.
- **Headless UI** — Tailwind Labs' primitive library. Narrower component
  coverage than Radix or Base UI, and more tightly coupled to Tailwind's own
  ecosystem assumptions than we wanted for a swappable primitives layer.
- **Building primitives from scratch** — full control, but reimplementing
  keyboard nav, focus trapping, and ARIA correctness per-component is a large
  and easy-to-get-subtly-wrong surface area. Rejected as not worth the cost
  for a project this size.

## Consequences

- We depend on a pre-1.0 library. Pinning exact versions in
  `packages/primitives` (rather than `^` ranges) is required to avoid
  breaking changes landing silently — this is already reflected in the
  primitives package's dependency on `@base-ui-components/react`.
- Base UI's API tends to be more explicit than Radix's (e.g. more visible
  composition patterns), which is a better fit for the "understand the
  internals" goal but may mean slightly more boilerplate in the primitives
  re-export layer.
- If Base UI's development pace slows or its API direction changes
  unfavorably before 1.0, we may need to revisit this — the
  `packages/primitives` boundary exists specifically so that a future swap
  only touches one package, not every component.
- Component coverage in Base UI is not yet as broad as Radix's mature surface.
  Some components may need to wait on upstream Base UI support, or (case by
  case) be built directly on lower-level Base UI utilities.
