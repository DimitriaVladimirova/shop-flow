import { useParams } from 'react-router';
import { useProduct } from './useProduct';
import { Skeleton } from '../../shared/ui/Skeleton';
import { HttpError } from '../../shared/api/httpClient';
import { NotFoundPage } from '../../app/NotFoundPage';
import { EmptyState } from '../../shared/ui/EmptyState';
import { Button } from '../../shared/ui/Button';
import { PageHeader } from '../../shared/layout/PageHeader';
import { Badge } from '../../shared/ui/Badge';
import { formatPrice } from '../../shared/lib/formatPrice';
import { useGroups } from './useGroups';
import { findGroup } from './findGroup';
import { Check } from 'lucide-react';
import { QuantityStepper } from '../../shared/ui/QuantityStepper';
import { useState } from 'react';

export function ProductPage() {
  const { slug } = useParams();
  const product = useProduct(slug ?? '');
  const groups = useGroups();

  const [quantity, setQuantity] = useState(1);
  if (product.isPending) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p role="status" className="sr-only">
          Loading product...
        </p>
        <div className="grid gap-10 rounded-2xl border border-light-gray-2 bg-white p-8 md:grid-cols-2">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    );
  }

  if (product.isError) {
    if (product.error instanceof HttpError && product.error.status === 404) {
      return <NotFoundPage />;
    }

    return (
      <div className="mx-auto max-w-6xl px-6 py-12" role="alert">
        <EmptyState
          title="We couldn’t load this product"
          description="Please check your connection and try again."
          action={<Button onClick={() => product.refetch()}>Retry</Button>}
        />
      </div>
    );
  }

  const item = product.data;
  const isSoldOut = item.stock === 0;
  const group = findGroup(groups.data, item.groupIds);

  return (
    <>
      <PageHeader
        title={item.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/' },
          ...(group ? [{ label: group.name, href: `/c/${group.slug}` }] : []),
        ]}
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-primary bg-white p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <img
              src={item.image}
              alt={item.name}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-4">
              {group && (
                <Badge tone="success" className="self-start">
                  {group.name}
                </Badge>
              )}
              <p className="text-h3 font-bold text-dark">{item.name}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-h3 font-bold text-primary">{formatPrice(item.price)}</span>
                <span className="text-small text-second-text">/ {item.unit}</span>
              </div>
              <p
                className={`flex items-center gap-2 text-h6 font-bold ${isSoldOut ? 'text-danger' : 'text-success'}`}
              >
                <span
                  aria-hidden="true"
                  className={`size-2 rounded-full ${isSoldOut ? 'bg-danger' : 'bg-success'}`}
                />
                {isSoldOut ? 'Sold out' : `In stock · ${item.stock} left`}
              </p>
              <p className="text-paragraph text-second-text">{item.description}</p>
              <hr className="border-light-gray-2" />
              <div className="flex items-center gap-4">
                <QuantityStepper
                  value={quantity}
                  max={item.stock}
                  onChange={setQuantity}
                  disabled={isSoldOut}
                />
                <Button disabled={isSoldOut}>{isSoldOut ? 'Sold out' : 'Add to cart'}</Button>
              </div>
              <ul className="flex flex-col gap-2 rounded-xl border border-success bg-success-faded/40 p-4 text-paragraph text-dark">
                <li className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-4 text-success" />
                  Free delivery on orders over €30
                </li>
                <li className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-4 text-success" />
                  Delivered in 2-3 working days, or next day with Express
                </li>
                {item.type === 'food' && (
                  <li className="flex items-center gap-2">
                    <Check aria-hidden="true" className="size-4 text-success" />
                    Fresh products are packed in cooled bags
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
