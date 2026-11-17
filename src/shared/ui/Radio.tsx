import type { InputHTMLAttributes } from 'react';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Radio({ label, className = '', ...rest }: RadioProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-2 text-paragraph text-dark ${className}`}
    >
      <input type="radio" className="size-4 cursor-pointer accent-primary" {...rest} />
      {label}
    </label>
  );
}
