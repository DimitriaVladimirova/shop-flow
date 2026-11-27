import { useProducts } from './useProducts';
import { useGroups } from './useGroups';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { EmptyState } from '../../shared/ui/EmptyState';
import { Button } from '../../shared/ui/Button';
import { Pagination } from '../../shared/ui/Pagination';
import { findGroup } from './findGroup';
import { CategoryNav } from './CategoryNav';
import { useSearchParams } from 'react-router';

const PAGE_SIZE = 8;

type CatalogPageProps = {
  groupSlug?: string;
};

export function CatalogPage({ groupSlug }: CatalogPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const groups = useGroups();
  const products = useProducts(
    { group: groupSlug, page, pageSize: PAGE_SIZE },
    { enabled: !groupSlug || groups.isSuccess },
  );

  function handlePageChange(newPage: number) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      next.set('page', String(newPage));
      return next;
    });
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
              groupName={findGroup(groups.data, product.groupIds)?.name}
            />
          ))}
        </div>
        <div className="mt-10">
          <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <CategoryNav />
      </div>
      {renderContent()}
    </section>
  );
}
