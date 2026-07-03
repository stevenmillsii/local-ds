import { personalPrimitiveColors, personalSemanticColors } from './colors.js';
import { personalTypography } from './typography.js';
import { personalSpacing } from './spacing.js';
import { personalRadius } from './radius.js';
import type { Theme } from '../../types.js';

export const personalTheme: Theme = {
  brand: 'personal',
  colors: {
    primitive: personalPrimitiveColors,
    semantic:  personalSemanticColors,
  },
  typography: personalTypography,
  spacing:    personalSpacing,
  radius:     personalRadius,
};

export { personalPrimitiveColors, personalSemanticColors, personalTypography, personalSpacing, personalRadius };
