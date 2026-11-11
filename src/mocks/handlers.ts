import { http, HttpResponse } from 'msw';
import { getDb } from './db';

export const handlers = [
  http.get('api/hello', () => {
    const db = getDb();
    return HttpResponse.json({ products: db.products.length, group: db.groups.length });
  }),
];
