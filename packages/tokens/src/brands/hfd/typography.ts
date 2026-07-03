import type { TypographyTokens } from '../../types.js';

// ── HFD Typography ────────────────────────────────────────────────────────────
// Direction: industrial / condensed display + clean grotesque body + monospace
// Suggestions to explore:
//   display → something bold/condensed (e.g. Barlow Condensed, Bebas Neue, Monument Grotesk)
//   sans    → neutral grotesque (e.g. Inter, Geist Sans, DM Sans)
//   mono    → technical monospace (e.g. JetBrains Mono, Geist Mono, Berkeley Mono)
//
// All font stacks end with a system fallback.

export const hfdTypography: TypographyTokens = {
  fontFamily: {
    display: 'TODO: "YourDisplayFont", "Barlow Condensed", Impact, sans-serif',
    sans:    'TODO: "YourSansFont", "Inter", system-ui, -apple-system, sans-serif',
    serif:   'TODO: "Georgia", "Times New Roman", serif',
    mono:    'TODO: "YourMonoFont", "JetBrains Mono", "Fira Code", monospace',
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
    tight:  '-0.02em',
    normal: '0em',
    wide:   '0.025em',
    wider:  '0.05em',
  },
};
