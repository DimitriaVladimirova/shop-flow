import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { ProductsParams } from './types';
import { catalogKeys, fetchProducts } from './api';

export function useProducts(params: ProductsParams = {}) {
  return useQuery({
    queryKey: catalogKeys.products(params),
    queryFn: () => fetchProducts(params),
    placeholderData: keepPreviousData,
  });
}
