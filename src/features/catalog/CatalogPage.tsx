import { useState } from 'react';
import { useProducts } from './useProducts';
import { useGroups } from './useGroups';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { EmptyState } from '../../shared/ui/EmptyState';
import { Button } from '../../shared/ui/Button';
import { Pagination } from '../../shared/ui/Pagination';

const PAGE_SIZE = 8;

export function CatalogPage() {
  const [page, setPage] = useState(1);
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

    const totalPages = Math.ceil(products.data.total / PAGE_SIZE);

    return (
      <>
        <div
          className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ${products.isPlaceholderData ? 'opacity-60' : ''}`}
        >
          {products.data.items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              groupName={getGroupName(product.groupIds)}
            />
          ))}
        </div>
        <div className="mt-10">
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </>
    );
  }

  return <section className="mx-auto max-w-6xl px-6 py-12">{renderContent()}</section>;
}
