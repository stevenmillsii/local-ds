import type { CSSProperties } from 'react';
import { Button } from '@stevenmillsii/components';

// Hardcoded comparison values only — there is no live brand-toggle mechanism yet.
// Each brand's generated theme CSS (packages/tokens/dist/themes/*.css) targets
// :root, so only one brand's stylesheet can be active per page load (globals.css
// currently imports the hfd theme). These objects duplicate the real semantic
// values from packages/tokens/src/brands/{brand}/colors.ts and typography.ts
// purely so both brands can be viewed side by side here. Remove this once a
// real scoped brand-switching mechanism exists.
const brandPreviewVars: Record<'hfd' | 'personal', CSSProperties> = {
  hfd: {
    '--color-background': '#121212',
    '--color-foreground': '#c0c0c0',
    '--color-foreground-muted': '#8c8c8c',
    '--color-primary': '#d42000',
    '--color-primary-hover': '#ff2700',
    '--color-primary-active': '#a81a00',
    '--color-primary-foreground': '#e0e0e0',
    '--color-surface-raised': '#3a3a3a',
    '--color-surface-overlay': '#545454',
    '--color-border': '#242424',
    '--color-error': 'oklch(0.704 0.191 22.216)',
    '--color-error-foreground': '#f5f5f5',
    '--color-focus-ring': '#ff2700',
    '--font-weight-interactive': '500',
    '--tracking-interactive': '0.025em',
    '--text-transform-interactive': 'uppercase',
  } as CSSProperties,
  personal: {
    '--color-background': '#131108',
    '--color-foreground': '#F4F3EE',
    '--color-foreground-muted': '#CCCAB8',
    '--color-primary': '#F4F3EE',
    '--color-primary-hover': '#CCCAB8',
    '--color-primary-active': '#A8A690',
    '--color-primary-foreground': '#211F17',
    '--color-surface-raised': '#36342A',
    '--color-surface-overlay': '#211F17',
    '--color-border': '#36342A',
    '--color-error': 'oklch(0.55 0.18 25)',
    '--color-error-foreground': '#F4F3EE',
    '--color-focus-ring': '#0252BC',
    '--font-weight-interactive': '600',
    '--tracking-interactive': '0em',
    '--text-transform-interactive': 'none',
  } as CSSProperties,
};

function BrandFrame({ brand }: { brand: 'hfd' | 'personal' }) {
  return (
    <div
      style={brandPreviewVars[brand]}
      className="rounded-base border border-border bg-background p-6 space-y-6"
    >
      <p className="text-xs font-mono uppercase tracking-wide text-foreground-muted">{brand}</p>

      <div>
        <h4 className="text-sm font-medium text-foreground-muted mb-3">Variants</h4>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-foreground-muted mb-3">Sizes</h4>
        <div className="flex gap-3 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-foreground-muted mb-3">States</h4>
        <div className="flex gap-3 flex-wrap">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button loading>Loading</Button>
          <Button variant="secondary" loading>
            Loading Secondary
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-foreground-muted mb-3">Focus ring (tab to it)</h4>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Tab to me</Button>
          <Button variant="secondary">Then me</Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-8 space-y-12 max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
        <p className="text-foreground-muted mt-2">Component playground and documentation</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Button</h2>

        <div>
          <h3 className="text-sm font-medium text-foreground-muted mb-3">Variants</h3>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground-muted mb-3">Sizes</h3>
          <div className="flex gap-3 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground-muted mb-3">States</h3>
          <div className="flex gap-3 flex-wrap">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button loading>Loading</Button>
            <Button variant="secondary" loading>
              Loading Secondary
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">
          Brand comparison
        </h2>
        <p className="text-sm text-foreground-muted">
          Hardcoded side-by-side preview — see the comment in{' '}
          <code className="font-mono">apps/docs/app/page.tsx</code>. Not a real brand-toggle
          mechanism.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrandFrame brand="hfd" />
          <BrandFrame brand="personal" />
        </div>
      </section>
    </main>
  );
}
