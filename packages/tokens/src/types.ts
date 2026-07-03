export type CSSValue = string;

export interface PrimitiveColorScale {
  [step: string]: CSSValue;
}

export interface PrimitiveColors {
  [palette: string]: PrimitiveColorScale;
}

export interface SemanticColors {
  background: {
    base: CSSValue;
    subtle: CSSValue;
    inset: CSSValue;
  };
  foreground: {
    base: CSSValue;
    muted: CSSValue;
    subtle: CSSValue;
  };
  primary: {
    base: CSSValue;
    hover: CSSValue;
    active: CSSValue;
    foreground: CSSValue;
  };
  accent: {
    base: CSSValue;
    hover: CSSValue;
    active: CSSValue;
    foreground: CSSValue;
  };
  border: {
    base: CSSValue;
    subtle: CSSValue;
  };
  surface: {
    base: CSSValue;
    raised: CSSValue;
    overlay: CSSValue;
  };
  feedback: {
    error: { base: CSSValue; foreground: CSSValue };
    warning: { base: CSSValue; foreground: CSSValue };
    success: { base: CSSValue; foreground: CSSValue };
  };
  focus: {
    ring: CSSValue;
  };
  link: {
    base:    CSSValue;
    hover:   CSSValue;
    visited: CSSValue;
  };
  inverse: {
    background: CSSValue;
    foreground: CSSValue;
    border:     CSSValue;
  };
}

export interface FontFamilyTokens {
  sans: CSSValue;
  serif: CSSValue;
  mono: CSSValue;
  display?: CSSValue;
}

export interface TypographyTokens {
  fontFamily: FontFamilyTokens;
  fontSize: {
    '2xs'?: CSSValue;
    xs: CSSValue;
    sm: CSSValue;
    base: CSSValue;
    lg: CSSValue;
    xl: CSSValue;
    '2xl': CSSValue;
    '3xl': CSSValue;
    '4xl': CSSValue;
    '5xl': CSSValue;
    '6xl': CSSValue;
  };
  fontWeight: {
    light: CSSValue;
    regular: CSSValue;
    medium: CSSValue;
    semibold: CSSValue;
    bold: CSSValue;
    black: CSSValue;
  };
  lineHeight: {
    tight: CSSValue;
    snug: CSSValue;
    normal: CSSValue;
    relaxed: CSSValue;
    loose: CSSValue;
  };
  letterSpacing: {
    tight: CSSValue;
    normal: CSSValue;
    wide: CSSValue;
    wider: CSSValue;
  };
  /**
   * Typographic treatment for interactive labels (buttons, nav, tabs).
   * Brands share the same fontWeight/letterSpacing scale but assign
   * different values to this role — e.g. HFD renders interactive labels
   * uppercase at weight 500, personal at weight 600, case-preserving.
   */
  interactive: {
    fontWeight: CSSValue;
    textTransform: CSSValue;
    letterSpacing: CSSValue;
  };
}

export interface SpacingTokens {
  scale: {
    '0': CSSValue;
    '0.5': CSSValue;
    '1': CSSValue;
    '1.5': CSSValue;
    '2': CSSValue;
    '2.5': CSSValue;
    '3': CSSValue;
    '4': CSSValue;
    '5': CSSValue;
    '6': CSSValue;
    '8': CSSValue;
    '10': CSSValue;
    '12': CSSValue;
    '16': CSSValue;
    '20': CSSValue;
    '24': CSSValue;
    '32': CSSValue;
    '40': CSSValue;
    '48': CSSValue;
    '64': CSSValue;
  };
}

export interface RadiusTokens {
  scale: {
    none: CSSValue;
    sm: CSSValue;
    base: CSSValue;
    md: CSSValue;
    lg: CSSValue;
    xl: CSSValue;
    '2xl': CSSValue;
    full: CSSValue;
  };
}

export interface Theme {
  brand: string;
  colors: {
    primitive: PrimitiveColors;
    semantic: SemanticColors;
  };
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
}
