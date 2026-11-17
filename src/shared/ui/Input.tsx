import { useId, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, className = '', ...rest }: InputProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error ?? hint;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-dark text-h6 font-bold">
        {label}
      </label>

      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        className={`cursor-pointer rounded-md border bg-light-gray-1 px-5 py-3.75 text-paragraph text-dark focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${
          error ? 'border-danger focus:border-danger' : 'border-light-gray-2 focus:border-primary'
        }`}
        {...rest}
      />

      {message && (
        <p
          id={messageId}
          className={error ? 'text-small text-danger' : 'text-small text-second-text'}
        >
          {message}
        </p>
      )}
    </div>
  );
}
