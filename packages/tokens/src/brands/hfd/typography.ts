import type { TypographyTokens } from '../../types.js';

// HFD Typography
// Geist Mono is used for headings, labels, buttons, and nav — industrial mono aesthetic.
// Geist (sans) is used for body copy. Font sizes match Tailwind defaults.

export const hfdTypography: TypographyTokens = {
  fontFamily: {
    sans:  '"Geist", system-ui, -apple-system, sans-serif',
    serif: '"Georgia", "Times New Roman", serif',
    mono:  '"Geist Mono", monospace',
  },
  fontSize: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    lg:   '1.125rem',
    xl:   '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    light:    '300',
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
    black:    '900',
  },
  lineHeight: {
    tight:   '1.2',
    snug:    '1.375',
    normal:  '1.5',
    relaxed: '1.625',
    loose:   '2',
  },
  letterSpacing: {
    tight:  '-0.02em',
    normal: '0em',
    wide:   '0.025em',
    wider:  '0.05em',
  },
  interactive: {
    fontWeight:    '500',        // medium
    textTransform: 'uppercase',
    letterSpacing: '0.025em',    // wide — improves legibility for uppercase mono
  },
};
