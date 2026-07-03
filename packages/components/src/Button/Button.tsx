import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonRoot } from '@stevenmillsii/primitives';
import { cn } from '../utils/cn.js';

const buttonVariants = cva(
  // Base styles applied to all variants.
  // Uses CSS vars from the active brand theme (set in globals.css via @theme).
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'bg-surface-raised text-foreground border border-border hover:bg-surface-overlay',
        ghost:
          'text-foreground hover:bg-surface-raised hover:text-foreground',
        destructive:
          'bg-error text-error-foreground hover:opacity-90 active:opacity-80',
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-sm gap-1.5',
        md: 'h-10 px-4 text-base rounded-base gap-2',
        lg: 'h-12 px-6 text-lg rounded-md gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const spinnerSizeClass: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export type ButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'> &
  VariantProps<typeof buttonVariants> & {
    disabled?: boolean;
    /**
     * Marks the action in flight. Uses aria-disabled (not the native disabled
     * attribute) so the button stays focusable and in the tab order — the
     * native attribute would drop focus to <body> if the button was just
     * activated. See ADR-003.
     */
    loading?: boolean;
  };

export const Button = React.forwardRef<React.ComponentRef<typeof ButtonRoot>, ButtonProps>(
  ({ className, variant, size, disabled = false, loading = false, children, ...props }, ref) => {
    const resolvedSize = size ?? 'md';
    return (
      <ButtonRoot
        ref={ref}
        disabled={disabled || loading}
        focusableWhenDisabled={loading && !disabled}
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading && <Spinner className={spinnerSizeClass[resolvedSize]} />}
        {children}
      </ButtonRoot>
    );
  },
);

Button.displayName = 'Button';
