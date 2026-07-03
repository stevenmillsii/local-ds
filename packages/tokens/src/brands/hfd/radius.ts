import type { RadiusTokens } from '../../types.js';

// ── HFD Radius ────────────────────────────────────────────────────────────────
// Direction: industrial → intentionally low/sharp. Start with small values
// and decide if you want any softness at the larger end.
// These are placeholders — fill in your actual values.

export const hfdRadius: RadiusTokens = {
  scale: {
    none:  '0px',
    sm:    'TODO: e.g. 2px — very subtle, nearly sharp',
    base:  'TODO: e.g. 4px — default interactive element radius',
    md:    'TODO: e.g. 6px',
    lg:    'TODO: e.g. 8px',
    xl:    'TODO: e.g. 12px',
    '2xl': 'TODO: e.g. 16px',
    full:  '9999px',
  },
};
