import type { TypographyTokens } from '../../types.js';

// Personal Typography
// Geist Mono is used for subheads, buttons, and labels — deliberate typographic voice.
// Geist (sans) is used for body copy and headings.
// Type scale is shifted up: sm=16px and base=20px, so base is the visual default for body.

export const personalTypography: TypographyTokens = {
  fontFamily: {
    sans:  '"Geist", system-ui, -apple-system, sans-serif',
    serif: '"Georgia", "Times New Roman", serif',
    mono:  '"Geist Mono", monospace',
  },
  fontSize: {
    '2xs': '0.75rem',   // 12px
    xs:    '0.875rem',  // 14px
    sm:    '1rem',      // 16px
    base:  '1.25rem',   // 20px — visual body default
    lg:    '1.5rem',    // 24px
    xl:    '2rem',      // 32px
    '2xl': '2.5rem',    // 40px
    '3xl': '3rem',      // 48px
    '4xl': '4rem',      // 64px
    '5xl': '5rem',      // 80px
    '6xl': '6rem',      // 96px — best-practice continuation
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
    tight:   '1',      // none — tight for large display headings
    snug:    '1.375',  // subheadings, compact prose
    normal:  '1.5',
    relaxed: '1.625',
    loose:   '2',
  },
  letterSpacing: {
    tight:  '-0.01em',
    normal: '0em',
    wide:   '0.025em',
    wider:  '0.05em',
  },
};
