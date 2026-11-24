import { useState } from 'react';
import { useProducts } from './useProducts';
import { useGroups } from './useGroups';
import { ProductCard } from './ProductCard';

const PAGE_SIZE = 8;

export function CatalogPage() {
  const [page] = useState(1);
  const products = useProducts({ page, pageSize: PAGE_SIZE });
  const groups = useGroups();

  function getGroupName(groupIds: string[]) {
    const group = groups.data?.find((g) => groupIds.includes(g.id));

    return group?.name;
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 bg-light-gray-1">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.data?.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            groupName={getGroupName(product.groupIds)}
          />
        ))}
      </div>
    </section>
  );
}
