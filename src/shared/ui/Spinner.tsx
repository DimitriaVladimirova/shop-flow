type SpinnerProps = {
  label?: string;
  className?: string;
};

export function Spinner({ label = 'Loading', className = '' }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`size-6 animate-spin rounded-full border-2 border-primary border-t-transparent ${className}`}
    />
  );
}
