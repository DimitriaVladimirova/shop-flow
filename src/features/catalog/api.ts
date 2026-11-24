import { getJson } from '../../shared/api/httpClient';
import type { ProductsResponse, ProductsParams } from './types';

export function fetchProducts(params: ProductsParams = {}) {
  const search = new URLSearchParams();

  if (params.page) {
    search.set('page', String(params.page));
  }

  if (params.pageSize) {
    search.set('pageSize', String(params.pageSize));
  }

  const query = search.toString();
  const url = query ? `/api/products?${query}` : '/api/products';

  return getJson<ProductsResponse>(url);
}

export const catalogKeys = {
  all: ['catalog'] as const,
  products: (params: ProductsParams) => [...catalogKeys.all, 'products', params] as const,
};
