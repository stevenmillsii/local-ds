import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonRoot } from '@stevenmillsii/primitives';
import { cn } from '../utils/cn.js';

const buttonVariants = cva(
  // Base styles applied to all variants.
  // Uses CSS vars from the active brand theme (set in globals.css via @theme).
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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

export type ButtonProps = React.ComponentPropsWithoutRef<typeof ButtonRoot> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<React.ElementRef<typeof ButtonRoot>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <ButtonRoot
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = 'Button';
