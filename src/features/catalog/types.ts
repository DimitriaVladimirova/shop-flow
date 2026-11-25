import type { Product } from '../../shared/types/catalog';

export type ProductsResponse = {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
};

export type ProductsParams = {
  page?: number;
  pageSize?: number;
};
