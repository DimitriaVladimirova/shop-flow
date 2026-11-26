export type Variant = 'primary' | 'outline' | 'danger' | 'danger-outline';
export type Size = 'sm' | 'md';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary-faded',
  danger: 'bg-danger text-white hover:bg-danger-hover',
  'danger-outline': 'bg-transparent border border-danger text-danger hover:bg-danger-faded',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5',
  md: 'px-10 py-3.75',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return `inline-flex cursor-pointer items-center justify-center rounded-md text-h6 font-bold disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled disabled:text-white ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}
