import { formatPrice } from '../../shared/lib/formatPrice';
import type { Product } from '../../shared/types/catalog';
import { Badge } from '../../shared/ui/Badge';
import { Button } from '../../shared/ui/Button';

type ProductCardProps = {
  product: Product;
  groupName?: string;
  onAddToCart?: () => void;
};

export function ProductCard({ product, groupName, onAddToCart }: ProductCardProps) {
  const isSoldOut = product.stock === 0;

  return (
    <article className="overflow-hidden rounded-2xl border border-light-gray-2 bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        {isSoldOut && (
          <Badge tone="danger" className="absolute left-3 top-3">
            Sold out
          </Badge>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        {groupName && <p className="text-small text-second-text">{groupName}</p>}
        <h3 className="text-h5 font-bold text-dark">{product.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-h4 font-bold text-primary">{formatPrice(product.price)}</span>
          <span className="text-small text-second-text">/ {product.unit}</span>
        </div>

        <Button size="sm" className="w-full" disabled={isSoldOut} onClick={onAddToCart}>
          {isSoldOut ? 'Sold out' : 'Add to cart'}
        </Button>
      </div>
    </article>
  );
}
