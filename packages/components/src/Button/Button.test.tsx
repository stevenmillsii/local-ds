import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button.js';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders as disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('merges className with variant classes', () => {
    render(<Button className="custom-class">Styled</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-surface-raised');
  });

  it('applies size classes', () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('applies brand-driven interactive typography classes', () => {
    render(<Button>Label</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('font-mono');
    expect(btn).toHaveClass('tracking-interactive');
    expect(btn).toHaveClass('[font-weight:var(--font-weight-interactive)]');
    expect(btn).toHaveClass('[text-transform:var(--text-transform-interactive)]');
  });

  describe('loading', () => {
    it('sets aria-busy and keeps the button focusable rather than natively disabled', () => {
      render(<Button loading>Save</Button>);
      const btn = screen.getByRole('button');
      expect(btn).toHaveAttribute('aria-busy', 'true');
      expect(btn).toHaveAttribute('aria-disabled', 'true');
      expect(btn).not.toBeDisabled();
      expect(btn).toHaveAttribute('tabindex', '0');
    });

    it('does not fire onClick while loading', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Button loading onClick={handleClick}>
          Save
        </Button>,
      );
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('keeps the accessible name and renders a decorative spinner', () => {
      render(<Button loading>Save</Button>);
      const btn = screen.getByRole('button', { name: 'Save' });
      expect(btn.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
    });

    it('falls back to native disabled when both disabled and loading are set', () => {
      render(
        <Button disabled loading>
          Save
        </Button>,
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });
});
