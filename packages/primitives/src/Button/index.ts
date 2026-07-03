// Re-exports Base UI's Button primitive as our import surface.
// Base UI v1 docs: https://base-ui.com/react/components/button
//
// Base UI uses namespace exports: Button.Root is the root element.
// If your installed version differs, adjust the re-export below.
export { Button as ButtonRoot } from '@base-ui-components/react/button';
export type { ButtonProps as ButtonRootProps } from '@base-ui-components/react/button';
