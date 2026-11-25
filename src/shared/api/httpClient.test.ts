import { describe, it, expect } from 'vitest';
import { getJson, HttpError } from './httpClient';
import type { ProductGroup } from '../types/catalog';

describe('httpClient', () => {
  it('returns the JSON for a successful response', async () => {
    const groups = await getJson<ProductGroup[]>('/api/groups');
    expect(groups).toHaveLength(7);
  });

  it('throws an HttpError for an error response', async () => {
    await expect(getJson('/api/products/does-not-exist')).rejects.toThrow(HttpError);
  });

  it('includes the status code in the error', async () => {
    await expect(getJson('/api/products/does-not-exist')).rejects.toMatchObject({ status: 404 });
  });
});
