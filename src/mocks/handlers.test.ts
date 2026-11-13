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

  it('finds products by name, ignoring capital letters', async () => {
    const res = await api('/api/products?q=MILK');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.total).toBe(1);
    expect(data.items[0].slug).toBe('whole-milk-1-l');
  });

  it('sorts products by price, cheapest first', async () => {
    const res = await api('/api/products?sort=price_asc');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.items[0].slug).toBe('mineral-water-1-5-l');
  });

  it('returns the requested page and total of all matches', async () => {
    const res = await api('/api/products?group=dairy&sort=price_asc&page=2&pageSize=2');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.total).toBe(4);
    expect(data.items.map((p: Product) => p.slug)).toEqual(['butter', 'cheddar-cheese-200-g']);
  });
});

describe('GET /api/products/:slug', () => {
  it('returns the product for an existing slug', async () => {
    const res = await api('/api/products/tomatoes-1-kg');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.slug).toBe('tomatoes-1-kg');
  });
  it('returns 404 for a product that does not exist', async () => {
    const res = await api('/api/products/does-not-exist');
    const data = await res.json();

    expect(res.status).toBe(404);
    expect(data).toEqual({ message: 'Product not found' });
  });
});
