# ADR-001: Terrazzo as the token build tool

**Status:** Accepted

**Date:** 2026-10-30

## Context

We need a build tool that turns our DTCG token JSON into CSS custom properties
and a Tailwind v4 theme. The system is brand-agnostic: it ships a default theme,
and other brands or products plug in their own values. It also needs light/dark
and density modes. The DTCG spec went stable in October 2025 (v2025.10) and
added a resolver module designed for exactly this, combining brand, mode, and
density from one source. The tool we choose has to support that model.

## Decision

We will use Terrazzo to build our tokens.

Terrazzo supports DTCG v2025.10 natively, including resolvers, so brand theming,
color modes, and density are declared in one resolver file and built from it. It
has built-in linting, which gives our naming rules a place to run during the
build. It also has an official Tailwind v4 plugin. Our vendored `design-tokens`
skill is written around Terrazzo, so it needs fewer edits.

## Alternatives Considered

- **Style Dictionary.** It's the industry standard, with the largest community
  and the widest range of platform outputs, and it's the tool engineers are most
  likely to know. Rejected because it doesn't support DTCG resolvers yet (tracked
  in style-dictionary issue #1590, still open as of v5.7.1), so multi-brand and
  mode theming would mean wiring up separate builds by hand.
- **Hand-written build script.** We'd learn the most and have full control, but
  we'd have to maintain all of it and would get no spec validation for free.
  Rejected because the maintenance cost outweighs the learning value.

## Consequences

- **Easier:** theming across brand, mode, and density comes from one resolver
  file. Naming rules can run as lint rules inside the token build. Tailwind v4
  output needs no custom code.
- **Harder:** the community is smaller, so there are fewer answers when we get
  stuck, and we depend on fewer maintainers. It supports fewer platform outputs
  than Style Dictionary. What we learn transfers less directly to teams that use
  Style Dictionary.
- **Low lock-in:** our token files are standard DTCG JSON, so switching tools
  later means rewriting the build config, not the tokens.
- **Revisit if:** Style Dictionary ships resolver support, or the owner's work
  team standardizes on Style Dictionary and matching it becomes more valuable.
