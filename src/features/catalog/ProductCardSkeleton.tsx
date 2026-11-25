import { Skeleton } from '../../shared/ui/Skeleton';

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-light-gray-2 bg-white">
      <Skeleton className="aspect-square w-full rounded-none" />

      <div className="p-4 flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
