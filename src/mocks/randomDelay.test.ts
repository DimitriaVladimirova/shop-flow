import { describe, expect, it } from 'vitest';
import { randomDelay } from './handlers';

describe('randomDelay', () => {
  it('returns a number between 300 and 800', () => {
    const result = randomDelay();

    expect(result).toBeGreaterThanOrEqual(300);
    expect(result).toBeLessThanOrEqual(800);
  });

  it('returns a number between 50 and 100', () => {
    const result = randomDelay(50, 100);

    expect(result).toBeGreaterThanOrEqual(50);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('always stays between 50 and 100', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomDelay(50, 100);

      expect(result).toBeGreaterThanOrEqual(50);
      expect(result).toBeLessThanOrEqual(100);
    }
  });
});
