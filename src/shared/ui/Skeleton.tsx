type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-light-gray-2 rounded-md" ${className}`} aria-hidden="true" />
  );
}
