import { hfdPrimitiveColors, hfdSemanticColors } from './colors.js';
import { hfdTypography } from './typography.js';
import { hfdSpacing } from './spacing.js';
import { hfdRadius } from './radius.js';
import type { Theme } from '../../types.js';

export const hfdTheme: Theme = {
  brand: 'hfd',
  colors: {
    primitive: hfdPrimitiveColors,
    semantic:  hfdSemanticColors,
  },
  typography: hfdTypography,
  spacing:    hfdSpacing,
  radius:     hfdRadius,
};

export { hfdPrimitiveColors, hfdSemanticColors, hfdTypography, hfdSpacing, hfdRadius };
