export type ProductType = 'food' | 'product';

export type ProductGroup = {
  id: string;
  slug: string;
  name: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // REMEMBER - in cents: 299 means €2.99
  currency: 'EUR';
  image: string;
  stock: number;
  groupIds: string[];
  type: ProductType;
};
