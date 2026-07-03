import type { Theme } from '../types.js';

function sanitizeKey(key: string): string {
  // CSS custom property names cannot contain '.' — replace with '_'
  return key.replace(/\./g, '_');
}

function flattenObject(
  obj: Record<string, unknown>,
  prefix: string,
  separator = '-',
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const varName = `${prefix}${separator}${sanitizeKey(key)}`;
    if (typeof value === 'string' || typeof value === 'number') {
      result[varName] = String(value);
    } else if (value !== null && typeof value === 'object') {
      Object.assign(result, flattenObject(value as Record<string, unknown>, varName, separator));
    }
  }

  return result;
}

function varsToCSS(vars: Record<string, string>, indent = '  '): string {
  return Object.entries(vars)
    .map(([k, v]) => `${indent}${k}: ${v};`)
    .join('\n');
}

export function generateThemeCSS(theme: Theme): string {
  const { brand } = theme;
  const prefix = `--${brand}`;

  const primitiveVars = flattenObject(
    theme.colors.primitive as unknown as Record<string, unknown>,
    `${prefix}-primitive`,
  );

  const semanticColorVars = flattenObject(
    theme.colors.semantic as unknown as Record<string, unknown>,
    `${prefix}-color`,
  );

  const typographyVars = flattenObject(
    theme.typography as unknown as Record<string, unknown>,
    `${prefix}-typography`,
  );

  const spacingVars = flattenObject(
    theme.spacing.scale as unknown as Record<string, unknown>,
    `${prefix}-spacing`,
  );

  const radiusVars = flattenObject(
    theme.radius.scale as unknown as Record<string, unknown>,
    `${prefix}-radius`,
  );

  const fontSizeThemeVars = Object.keys(theme.typography.fontSize)
    .map(key => `--text-${sanitizeKey(key)}: var(${prefix}-typography-fontSize-${sanitizeKey(key)});`)
    .join('\n  ');

  const tailwindThemeVars = `
  /* Tailwind v4 @theme — maps semantic tokens to utility classes.
     bg-primary → var(--${brand}-color-primary-base), etc. */
  --color-background: var(${prefix}-color-background-base);
  --color-background-subtle: var(${prefix}-color-background-subtle);
  --color-background-inset: var(${prefix}-color-background-inset);
  --color-foreground: var(${prefix}-color-foreground-base);
  --color-foreground-muted: var(${prefix}-color-foreground-muted);
  --color-foreground-subtle: var(${prefix}-color-foreground-subtle);
  --color-primary: var(${prefix}-color-primary-base);
  --color-primary-hover: var(${prefix}-color-primary-hover);
  --color-primary-active: var(${prefix}-color-primary-active);
  --color-primary-foreground: var(${prefix}-color-primary-foreground);
  --color-accent: var(${prefix}-color-accent-base);
  --color-accent-hover: var(${prefix}-color-accent-hover);
  --color-accent-active: var(${prefix}-color-accent-active);
  --color-accent-foreground: var(${prefix}-color-accent-foreground);
  --color-border: var(${prefix}-color-border-base);
  --color-border-subtle: var(${prefix}-color-border-subtle);
  --color-surface: var(${prefix}-color-surface-base);
  --color-surface-raised: var(${prefix}-color-surface-raised);
  --color-surface-overlay: var(${prefix}-color-surface-overlay);
  --color-error: var(${prefix}-color-feedback-error-base);
  --color-error-foreground: var(${prefix}-color-feedback-error-foreground);
  --color-warning: var(${prefix}-color-feedback-warning-base);
  --color-warning-foreground: var(${prefix}-color-feedback-warning-foreground);
  --color-success: var(${prefix}-color-feedback-success-base);
  --color-success-foreground: var(${prefix}-color-feedback-success-foreground);
  --color-focus-ring: var(${prefix}-color-focus-ring);
  --color-link: var(${prefix}-color-link-base);
  --color-link-hover: var(${prefix}-color-link-hover);
  --color-link-visited: var(${prefix}-color-link-visited);
  --color-inverse-background: var(${prefix}-color-inverse-background);
  --color-inverse-foreground: var(${prefix}-color-inverse-foreground);
  --color-inverse-border: var(${prefix}-color-inverse-border);
  --radius-sm: var(${prefix}-radius-sm);
  --radius-base: var(${prefix}-radius-base);
  --radius-md: var(${prefix}-radius-md);
  --radius-lg: var(${prefix}-radius-lg);
  --radius-xl: var(${prefix}-radius-xl);
  --radius-2xl: var(${prefix}-radius-2xl);
  --font-sans: var(${prefix}-typography-fontFamily-sans);
  --font-serif: var(${prefix}-typography-fontFamily-serif);
  --font-mono: var(${prefix}-typography-fontFamily-mono);
  ${fontSizeThemeVars}
  /* Interactive label typography (buttons, nav, tabs) — brand-specific
     weight/case/tracking. font-weight-* and tracking-* are real Tailwind
     theme namespaces (font-interactive / tracking-interactive utilities);
     text-transform has no themable namespace, so components consume
     --text-transform-interactive via an arbitrary property. */
  --font-weight-interactive: var(${prefix}-typography-interactive-fontWeight);
  --tracking-interactive: var(${prefix}-typography-interactive-letterSpacing);
  --text-transform-interactive: var(${prefix}-typography-interactive-textTransform);`.trim();

  return `/* Generated by @stevenmillsii/tokens — do not edit manually. Run \`pnpm build\` in packages/tokens to regenerate. */

:root {
  /* ── Primitive palette ─────────────────────────────────────────── */
${varsToCSS(primitiveVars)}

  /* ── Semantic color aliases ────────────────────────────────────── */
${varsToCSS(semanticColorVars)}

  /* ── Typography ────────────────────────────────────────────────── */
${varsToCSS(typographyVars)}

  /* ── Spacing ───────────────────────────────────────────────────── */
${varsToCSS(spacingVars)}

  /* ── Radius ─────────────────────────────────────────────────────── */
${varsToCSS(radiusVars)}
}

/* Tailwind v4 theme integration — exposes tokens as design-system utility classes */
@theme {
  ${tailwindThemeVars}
}
`;
}
