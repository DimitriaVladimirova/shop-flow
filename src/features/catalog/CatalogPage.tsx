import { useState } from 'react';
import { useProducts } from './useProducts';
import { useGroups } from './useGroups';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { EmptyState } from '../../shared/ui/EmptyState';
import { Button } from '../../shared/ui/Button';

const PAGE_SIZE = 8;

export function CatalogPage() {
  const [page] = useState(1);
  const products = useProducts({ page, pageSize: PAGE_SIZE });
  const groups = useGroups();

  function getGroupName(groupIds: string[]) {
    const group = groups.data?.find((g) => groupIds.includes(g.id));

    return group?.name;
  }

  function renderContent() {
    if (products.isPending) {
      return (
        <>
          <p role="status" className="sr-only">
            Loading products...
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: PAGE_SIZE }, (_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </>
      );
    }

    if (products.isError) {
      return (
        <div role="alert">
          <EmptyState
            title="We couldn’t load the products"
            description="Please check your connection and try again."
            action={<Button onClick={() => products.refetch()}>Retry</Button>}
          />
        </div>
      );
    }

    if (products.data.items.length === 0) {
      return (
        <EmptyState
          title="No products yet"
          description="New products are on their way. Please check back soon."
        />
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.data?.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            groupName={getGroupName(product.groupIds)}
          />
        ))}
      </div>
    );
  }

  return <section className="mx-auto max-w-6xl px-6 py-12">{renderContent()}</section>;
}
