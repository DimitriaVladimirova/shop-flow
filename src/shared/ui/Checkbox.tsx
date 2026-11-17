import type { InputHTMLAttributes } from 'react';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Checkbox({ label, className = '', ...rest }: CheckboxProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-2 text-paragraph text-dark ${className}`}
    >
      <input type="checkbox" className="size-4 cursor-pointer accent-primary" {...rest} />
      {label}
    </label>
  );
}
