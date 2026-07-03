import type { PrimitiveColors, SemanticColors } from '../../types.js';

// ── HFD Brand: Forged Black / Raw Steel / Ember ──────────────────────────────
// Fill in hex or oklch values. The palette direction:
//   black  → near-total-black through charcoal (backgrounds, surfaces)
//   steel  → dark industrial grays (borders, muted UI chrome)
//   ember  → warm orange-red fire tones (primary interactive, accents)
//   white  → off-white through near-white (foreground on dark backgrounds)
//
// Suggested starting point for exploration:
//   black.950 ≈ #0a0a0b, steel.500 ≈ #52525b, ember.600 ≈ #dc4a18

export const hfdPrimitiveColors: PrimitiveColors = {
  black: {
    950: 'TODO: #?????? — near-total-black, deepest background',
    900: 'TODO: #?????? — main page background',
    800: 'TODO: #?????? — card / panel background',
    700: 'TODO: #?????? — overlay / popover surface',
    600: 'TODO: #?????? — elevated surface',
  },
  steel: {
    600: 'TODO: #?????? — dark steel, subtle borders',
    500: 'TODO: #?????? — mid steel, default borders',
    400: 'TODO: #?????? — light steel, prominent borders',
    300: 'TODO: #?????? — pale steel, muted foreground',
    200: 'TODO: #?????? — very pale steel',
  },
  ember: {
    800: 'TODO: #?????? — deep ember, active pressed state',
    700: 'TODO: #?????? — rich ember, hover state',
    600: 'TODO: #?????? — ember base, primary interactive color',
    500: 'TODO: #?????? — bright ember, lighter variant',
    400: 'TODO: #?????? — pale ember, tint / glow',
  },
  offwhite: {
    100: 'TODO: #?????? — main foreground (light text on dark bg)',
    50:  'TODO: #?????? — subtle foreground / secondary text',
  },
  // Feedback primitives — can be standard semantic colors or brand-adapted
  red: {
    600: 'TODO: #?????? — error base',
    100: 'TODO: #?????? — error foreground on dark bg',
  },
  amber: {
    500: 'TODO: #?????? — warning base',
    100: 'TODO: #?????? — warning foreground',
  },
  green: {
    600: 'TODO: #?????? — success base',
    100: 'TODO: #?????? — success foreground',
  },
};

export const hfdSemanticColors: SemanticColors = {
  background: {
    base:   'TODO: ref → primitive.black.900',
    subtle: 'TODO: ref → primitive.black.800',
    inset:  'TODO: ref → primitive.black.950',
  },
  foreground: {
    base:   'TODO: ref → primitive.offwhite.100',
    muted:  'TODO: ref → primitive.steel.300',
    subtle: 'TODO: ref → primitive.steel.400',
  },
  primary: {
    base:       'TODO: ref → primitive.ember.600',
    hover:      'TODO: ref → primitive.ember.700',
    active:     'TODO: ref → primitive.ember.800',
    foreground: 'TODO: ref → primitive.offwhite.100',
  },
  accent: {
    base:       'TODO: ref → primitive.steel.400',
    hover:      'TODO: ref → primitive.steel.300',
    active:     'TODO: ref → primitive.steel.500',
    foreground: 'TODO: ref → primitive.black.950',
  },
  border: {
    base:   'TODO: ref → primitive.steel.500',
    subtle: 'TODO: ref → primitive.steel.600',
  },
  surface: {
    base:    'TODO: ref → primitive.black.800',
    raised:  'TODO: ref → primitive.black.700',
    overlay: 'TODO: ref → primitive.black.600',
  },
  feedback: {
    error:   { base: 'TODO: ref → primitive.red.600',   foreground: 'TODO: ref → primitive.red.100'   },
    warning: { base: 'TODO: ref → primitive.amber.500', foreground: 'TODO: ref → primitive.amber.100' },
    success: { base: 'TODO: ref → primitive.green.600', foreground: 'TODO: ref → primitive.green.100' },
  },
};
