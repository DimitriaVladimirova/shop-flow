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

  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const groupSlug = url.searchParams.get('group');
    const db = getDb();
    let products = [...db.products];

    if (groupSlug) {
      const group = db.groups.find((g) => g.slug === groupSlug);
      products = products.filter((p) => group && p.groupIds.includes(group.id));
    }

    const q = url.searchParams.get('q');
    const search = q?.toLowerCase();
    if (search) {
      products = products.filter((p) => p.name.toLowerCase().includes(search));
    }

    return HttpResponse.json({
      items: products,
      total: products.length,
      page: 1,
      pageSize: products.length,
    });
  }),
];
