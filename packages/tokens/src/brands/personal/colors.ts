import type { PrimitiveColors, SemanticColors } from '../../types.js';

// ── Personal Brand: Warm Zine / Screen-Print Aesthetic ───────────────────────
// Fill in hex or oklch values. The palette direction:
//   sienna  → burnt sienna family — earthy warm orange-brown (primary interactive)
//   yellow  → raw yellow / uncoated paper yellow (accent, energy)
//   ink     → near-black with a warm undertone (text, deep backgrounds)
//   paper   → cream / off-white with warmth (light backgrounds, base surface)
//   warm    → warm neutral grays for UI chrome
//
// Suggested starting point for exploration:
//   sienna.600 ≈ #8b4513 (burnt sienna), yellow.400 ≈ #f5c842 (raw yellow)
//   ink.900 ≈ #1c1510, paper.50 ≈ #faf6ef

export const personalPrimitiveColors: PrimitiveColors = {
  sienna: {
    800: 'TODO: #?????? — deep sienna, pressed/active state',
    700: 'TODO: #?????? — dark sienna, hover state',
    600: 'TODO: #?????? — burnt sienna base (primary color)',
    500: 'TODO: #?????? — mid sienna',
    400: 'TODO: #?????? — light sienna, tint',
    200: 'TODO: #?????? — very pale sienna, subtle bg',
  },
  yellow: {
    500: 'TODO: #?????? — raw yellow base (accent color)',
    400: 'TODO: #?????? — bright yellow',
    300: 'TODO: #?????? — pale yellow tint',
    200: 'TODO: #?????? — very pale yellow',
  },
  ink: {
    950: 'TODO: #?????? — near-total-black with warm undertone',
    900: 'TODO: #?????? — deep ink, primary dark text',
    800: 'TODO: #?????? — softer ink, secondary text',
    700: 'TODO: #?????? — muted ink',
  },
  paper: {
    50:  'TODO: #?????? — warm cream, main light background',
    100: 'TODO: #?????? — slightly less warm cream, surface',
    200: 'TODO: #?????? — warm light gray, inset/card on light bg',
  },
  warm: {
    300: 'TODO: #?????? — warm mid-gray, borders',
    400: 'TODO: #?????? — warm dark gray, strong borders',
    500: 'TODO: #?????? — warm charcoal',
  },
  // Feedback
  red: {
    600: 'TODO: #?????? — error base (earthy red, not clinical)',
    900: 'TODO: #?????? — error foreground on light bg',
  },
  amber: {
    400: 'TODO: #?????? — warning base (can overlap yellow accent)',
    900: 'TODO: #?????? — warning foreground',
  },
  green: {
    600: 'TODO: #?????? — success base (earthy green)',
    900: 'TODO: #?????? — success foreground',
  },
};

export const personalSemanticColors: SemanticColors = {
  background: {
    base:   'TODO: ref → primitive.paper.50',
    subtle: 'TODO: ref → primitive.paper.100',
    inset:  'TODO: ref → primitive.paper.200',
  },
  foreground: {
    base:   'TODO: ref → primitive.ink.900',
    muted:  'TODO: ref → primitive.ink.700',
    subtle: 'TODO: ref → primitive.warm.400',
  },
  primary: {
    base:       'TODO: ref → primitive.sienna.600',
    hover:      'TODO: ref → primitive.sienna.700',
    active:     'TODO: ref → primitive.sienna.800',
    foreground: 'TODO: ref → primitive.paper.50',
  },
  accent: {
    base:       'TODO: ref → primitive.yellow.500',
    hover:      'TODO: ref → primitive.yellow.400',
    active:     'TODO: ref → primitive.yellow.300 (or darken)',
    foreground: 'TODO: ref → primitive.ink.950',
  },
  border: {
    base:   'TODO: ref → primitive.warm.300',
    subtle: 'TODO: ref → primitive.paper.200',
  },
  surface: {
    base:    'TODO: ref → primitive.paper.100',
    raised:  'TODO: ref → primitive.paper.50',
    overlay: 'TODO: ref → primitive.paper.200',
  },
  feedback: {
    error:   { base: 'TODO: ref → primitive.red.600',   foreground: 'TODO: ref → primitive.red.900'   },
    warning: { base: 'TODO: ref → primitive.amber.400', foreground: 'TODO: ref → primitive.amber.900' },
    success: { base: 'TODO: ref → primitive.green.600', foreground: 'TODO: ref → primitive.green.900' },
  },
};
