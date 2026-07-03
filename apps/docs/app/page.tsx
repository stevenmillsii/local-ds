import { Button } from '@stevenmillsii/components';

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
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
