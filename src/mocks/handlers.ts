import { http, HttpResponse } from 'msw';
import { getDb } from './db';

export const handlers = [
  http.get('/api/groups', () => {
    const db = getDb();
    return HttpResponse.json(db.groups);
  }),

  http.get('/api/products/:slug', ({ params }) => {
    const slug = params.slug;
    const product = getDb().products.find((prod) => prod.slug === slug);

    if (!product) {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(product);
  }),
];
