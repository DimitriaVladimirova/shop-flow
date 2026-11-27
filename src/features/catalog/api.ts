import { getJson } from '../../shared/api/httpClient';
import type { Product, ProductGroup } from '../../shared/types/catalog';
import type { ProductsResponse, ProductsParams } from './types';

export function fetchProducts(params: ProductsParams = {}) {
  const search = new URLSearchParams();

  if (params.page) {
    search.set('page', String(params.page));
  }

  if (params.pageSize) {
    search.set('pageSize', String(params.pageSize));
  }

  if (params.group) {
    search.set('group', params.group);
  }

  const query = search.toString();
  const url = query ? `/api/products?${query}` : '/api/products';

  return getJson<ProductsResponse>(url);
}

export function fetchProduct(slug: string) {
  return getJson<Product>(`/api/products/${slug}`);
}

export function fetchGroups() {
  return getJson<ProductGroup[]>('/api/groups');
}

export const catalogKeys = {
  all: ['catalog'] as const,
  products: (params: ProductsParams) => [...catalogKeys.all, 'products', params] as const,
  groups: () => [...catalogKeys.all, 'groups'] as const,
  product: (slug: string) => [...catalogKeys.all, 'product', slug] as const,
};
