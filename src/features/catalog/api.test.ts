import { describe, it, expect } from 'vitest';
import { fetchProducts } from './api';

describe('fetchProducts', () => {
  it('loads the requested page', async () => {
    const data = await fetchProducts({ page: 2, pageSize: 2 });
    expect(data.page).toBe(2);
    expect(data.pageSize).toBe(2);
    expect(data.total).toBe(20);
    expect(data.items).toHaveLength(2);
  });
});
