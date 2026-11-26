import { useQuery } from '@tanstack/react-query';
import { catalogKeys, fetchProduct } from './api';

export function useProduct(slug: string) {
  return useQuery({
    queryKey: catalogKeys.product(slug),
    queryFn: () => fetchProduct(slug),
  });
}
