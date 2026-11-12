import { delay, http, HttpResponse } from 'msw';
import { getDb } from './db';

export function randomDelay(min = 300, max = 800) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const handlers = [
  http.get('/api/groups', async () => {
    await delay(randomDelay());
    const db = getDb();
    return HttpResponse.json(db.groups);
  }),

  http.get('/api/products/:slug', async ({ params }) => {
    await delay(randomDelay());
    const slug = params.slug;
    const product = getDb().products.find((prod) => prod.slug === slug);

    if (!product) {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(product);
  }),

  http.get('/api/products', async ({ request }) => {
    await delay(randomDelay());
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

    const sort = url.searchParams.get('sort');

    if (sort === 'price_asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    }

    const total = products.length;
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = Number(url.searchParams.get('pageSize')) || 8;
    const start = (page - 1) * pageSize;
    const items = products.slice(start, start + pageSize);

    return HttpResponse.json({
      items,
      total,
      page,
      pageSize,
    });
  }),
];
