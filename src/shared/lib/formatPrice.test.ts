import { describe, expect, it } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('formats cents as euros', () => {
    expect(formatPrice(299)).toBe('€2.99');
  });

  it('formats a price with no cents', () => {
    expect(formatPrice(500)).toBe('€5.00');
  });

  it('formats a zero', () => {
    expect(formatPrice(0)).toBe('€0.00');
  });

  it('formats a big price with a thousands separator', () => {
    expect(formatPrice(125000)).toBe('€1,250.00');
  });

  it('formats a price below one euro', () => {
    expect(formatPrice(89)).toBe('€0.89');
  });
});
