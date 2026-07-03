export function makeRef(brand: string) {
  return (palette: string, step: string | number): string =>
    `var(--${brand}-primitive-${palette}-${step})`;
}
