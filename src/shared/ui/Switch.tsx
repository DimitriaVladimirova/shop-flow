import type { InputHTMLAttributes } from 'react';

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Switch({ label, className = '', ...rest }: SwitchProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-3 text-paragraph text-dark has-disabled:cursor-not-allowed has-disabled:opacity-60 ${className}`}
    >
      <input type="checkbox" role="switch" className="peer sr-only" {...rest} />
      <span
        aria-hidden="true"
        className="relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5"
      />
      {label}
    </label>
  );
}
