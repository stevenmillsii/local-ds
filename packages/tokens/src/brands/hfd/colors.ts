import type { PrimitiveColors, SemanticColors } from '../../types.js';
import { makeRef } from '../../utils/ref.js';

// HFD Brand: Forged Black / Raw Steel / Ember
// Dark industrial palette — near-black backgrounds, steel grays, ember orange-red primary.

const ref = makeRef('hfd');

export const hfdPrimitiveColors: PrimitiveColors = {
  black: {
    '50':  '#f5f5f5',
    '100': '#e0e0e0',
    '200': '#bdbdbd',
    '300': '#9e9e9e',
    '400': '#757575',
    '500': '#545454',
    '600': '#3a3a3a',
    '700': '#242424',
    '800': '#121212',
    '900': '#0a0a0a',
    '950': '#050505',
  },
  steel: {
    '50':  '#fafafa',
    '100': '#f0f0f0',
    '200': '#e0e0e0',
    '300': '#d0d0d0',
    '400': '#c0c0c0',
    '500': '#a8a8a8',
    '600': '#8c8c8c',
    '700': '#6e6e6e',
    '800': '#525252',
    '900': '#363636',
    '950': '#1c1c1c',
  },
  ember: {
    '50':  '#fff5f2',
    '100': '#ffd6cc',
    '200': '#ffaa99',
    '300': '#ff7a66',
    '400': '#ff4d33',
    '500': '#ff2700',
    '600': '#d42000',
    '700': '#a81a00',
    '800': '#7a1200',
    '900': '#4f0b00',
    '950': '#280500',
  },
};

export const hfdSemanticColors: SemanticColors = {
  background: {
    base:   ref('black', '800'),   // #121212
    subtle: ref('black', '700'),   // #242424
    inset:  ref('black', '900'),   // #0a0a0a
  },
  foreground: {
    base:   ref('steel', '400'),   // #c0c0c0
    muted:  ref('steel', '600'),   // #8c8c8c
    subtle: ref('steel', '500'),   // #a8a8a8
  },
  primary: {
    base:       ref('ember', '600'),   // #d42000 — primary interactive
    hover:      ref('ember', '500'),   // #ff2700 — brighter on hover (dark-mode convention)
    active:     ref('ember', '700'),   // #a81a00
    foreground: ref('black', '100'),   // #e0e0e0 — text on ember buttons
  },
  accent: {
    base:       ref('ember', '500'),   // #ff2700 — brand slash / accent
    hover:      ref('ember', '400'),   // #ff4d33
    active:     ref('ember', '600'),   // #d42000
    foreground: ref('black', '950'),   // #050505 — dark text on bright accent
  },
  border: {
    base:   ref('black', '700'),   // #242424
    subtle: ref('black', '600'),   // #3a3a3a — for intra-surface dividers
  },
  surface: {
    base:    ref('black', '700'),   // #242424 — card
    raised:  ref('black', '600'),   // #3a3a3a — elevated
    overlay: ref('black', '500'),   // #545454 — popover / modal
  },
  feedback: {
    error:   { base: 'oklch(0.704 0.191 22.216)', foreground: ref('black', '50') },
    warning: { base: 'oklch(0.75 0.15 75)',        foreground: ref('black', '900') },
    success: { base: 'oklch(0.65 0.15 145)',        foreground: ref('black', '50') },
  },
  focus: {
    ring: ref('ember', '500'),   // #ff2700 — visible on all dark surfaces
  },
  link: {
    base:    ref('ember', '500'),   // #ff2700
    hover:   ref('ember', '400'),   // #ff4d33 — brighter on hover
    visited: ref('ember', '700'),   // #a81a00 — dimmed visited
  },
  inverse: {
    background: ref('steel', '50'),    // #fafafa — lightest available, near-white
    foreground: ref('black', '900'),   // #0a0a0a — dark text on light surface
    border:     ref('steel', '200'),   // #e0e0e0
  },
};
