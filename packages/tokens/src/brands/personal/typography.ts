import type { TypographyTokens } from '../../types.js';

// ── Personal Typography ───────────────────────────────────────────────────────
// Direction: warm, editorial, zine/screen-print energy
// Suggestions to explore:
//   display → something with character (e.g. Playfair Display, Fraunces, Newsreader, Cooper)
//   sans    → warm humanist sans (e.g. Lato, DM Sans, Nunito, Sora)
//   serif   → editorial (e.g. Lora, Merriweather, Source Serif, Newsreader)
//   mono    → optional; can be suppressed in favor of display+serif pairing

export const personalTypography: TypographyTokens = {
  fontFamily: {
    display: 'TODO: "YourDisplayFont", "Playfair Display", Georgia, serif',
    sans:    'TODO: "YourSansFont", "DM Sans", "Lato", system-ui, sans-serif',
    serif:   'TODO: "YourSerifFont", "Lora", "Merriweather", Georgia, serif',
    mono:    'TODO: "YourMonoFont", "Fira Code", "Courier New", monospace',
  },
  fontSize: {
    xs:   '0.75rem',   // 12px
    sm:   '0.875rem',  // 14px
    base: '1rem',      // 16px
    lg:   '1.125rem',  // 18px
    xl:   '1.25rem',   // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
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
    tight:  '-0.01em',
    normal: '0em',
    wide:   '0.02em',
    wider:  '0.04em',
  },
};
