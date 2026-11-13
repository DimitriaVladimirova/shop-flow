import { describe, expect, it } from 'vitest';
import type { Product } from '../shared/types/catalog';

function api(path: string) {
  return fetch(new URL(path, window.location.origin));
}

describe('GET /api/products', () => {
  it('filters products by group', async () => {
    const res = await api('/api/products?group=dairy');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.total).toBe(4);
    expect(data.items.every((p: Product) => p.groupIds.includes('g3'))).toBe(true);
  });

  it('search products', async () => {
    const res = await api('/api/products?q=MILK');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.total).toBe(1);
    expect(data.items[0].slug).toBe('whole-milk-1-l');
  });
});

describe('GET /api/products/:slug', () => {
  it('returns 404 for a product that does not exist', async () => {
    const res = await api('/api/products/does-not-exist');
    const data = await res.json();

    expect(res.status).toBe(404);
    expect(data).toEqual({ message: 'Product not found' });
  });
});
