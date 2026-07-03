import type { PrimitiveColors, SemanticColors } from '../../types.js';
import { makeRef } from '../../utils/ref.js';

// Personal Brand: warm dark theme, single warm-neutral primitive ramp.
// Neutral is yellow-brown toned, not gray — intentional for the editorial voice.
// The only non-neutral color is the focus ring (#0252BC).

const ref = makeRef('personal');

export const personalPrimitiveColors: PrimitiveColors = {
  neutral: {
    '100': '#F4F3EE',
    '200': '#E6E4DA',
    '300': '#CCCAB8',
    '400': '#A8A690',
    '500': '#7E7C66',
    '600': '#565442',
    '700': '#36342A',
    '800': '#211F17',
    '900': '#131108',
  },
};

export const personalSemanticColors: SemanticColors = {
  background: {
    base:   ref('neutral', '900'),   // #131108 — page background
    subtle: ref('neutral', '800'),   // #211F17 — raised card background
    inset:  ref('neutral', '900'),   // #131108 — same as page (palette has no darker step)
  },
  foreground: {
    base:   ref('neutral', '100'),   // #F4F3EE — headings / primary text
    muted:  ref('neutral', '300'),   // #CCCAB8 — body copy
    subtle: ref('neutral', '400'),   // #A8A690 — placeholder / disabled text
  },
  primary: {
    base:       ref('neutral', '100'),   // #F4F3EE — cream button fill
    hover:      ref('neutral', '300'),   // #CCCAB8 — dims on hover
    active:     ref('neutral', '400'),   // #A8A690 — pressed state
    foreground: ref('neutral', '800'),   // #211F17 — dark text on cream button
  },
  accent: {
    base:       ref('neutral', '200'),   // #E6E4DA — warm cream callout / highlight
    hover:      ref('neutral', '100'),   // #F4F3EE
    active:     ref('neutral', '300'),   // #CCCAB8
    foreground: ref('neutral', '900'),   // #131108 — dark text on cream accent
  },
  border: {
    base:   ref('neutral', '700'),   // #36342A — default border
    subtle: ref('neutral', '800'),   // #211F17 — subtle / inset border
  },
  surface: {
    base:    ref('neutral', '800'),   // #211F17 — card / panel
    raised:  ref('neutral', '700'),   // #36342A — elevated surface
    overlay: ref('neutral', '800'),   // #211F17 — modal / dialog backdrop
  },
  feedback: {
    error:   { base: 'oklch(0.55 0.18 25)',  foreground: ref('neutral', '100') },
    warning: { base: 'oklch(0.75 0.15 75)',  foreground: ref('neutral', '900') },
    success: { base: 'oklch(0.55 0.12 145)', foreground: ref('neutral', '100') },
  },
  focus: {
    ring: '#0252BC',   // the only blue in the system — deliberate accessibility anchor
  },
  link: {
    base:    ref('neutral', '500'),   // #7E7C66
    hover:   ref('neutral', '600'),   // #565442
    visited: ref('neutral', '600'),   // #565442
  },
  inverse: {
    background: ref('neutral', '200'),   // #E6E4DA — warm cream inverse surface
    foreground: ref('neutral', '800'),   // #211F17 — dark text on cream
    border:     ref('neutral', '700'),   // #36342A
  },
};
