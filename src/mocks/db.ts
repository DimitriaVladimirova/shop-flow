import type { Product, ProductGroup } from '../shared/types/catalog';
import { seedGroups, seedProducts } from './seed';

export type Db = {
  products: Product[];
  groups: ProductGroup[];
};

const STORAGE_KEY = 'shopflow-db-1';

function createSeedDb(): Db {
  return structuredClone({ products: seedProducts, groups: seedGroups });
}

function load(): Db {
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    if (text) {
      return JSON.parse(text) as Db;
    }
  } catch (error) {
    console.warn('[db] Could not read saved data.', error);
  }

  return createSeedDb();
}

let db: Db = load();

export function getDb(): Db {
  return db;
}

export function saveDb(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (error) {
    console.warn('[db] Could not save data to localStorage', error);
  }
}

export function resetDb(): void {
  localStorage.removeItem(STORAGE_KEY);
  db = createSeedDb();
  saveDb();
}

saveDb();
