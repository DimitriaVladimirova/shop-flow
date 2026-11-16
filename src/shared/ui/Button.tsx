import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'danger' | 'danger-outline';
type Size = 'sm' | 'md';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

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

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className = '',
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex cursor-pointer items-center justify-center rounded-md text-h6 font-bold disabled:cursor-not-allowed disabled:bg-disabled disabled:border-disabled disabled:text-white ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {loading ? 'Loading' : children}
    </button>
  );
}
