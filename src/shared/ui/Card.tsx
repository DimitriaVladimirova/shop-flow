import type { HTMLAttributes } from 'react';

type Tone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

type CardProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  title?: string;
};

const toneClasses: Record<Tone, { border: string; header: string }> = {
  neutral: { border: 'border-light-gray-2', header: 'bg-light-gray-1' },
  info: { border: 'border-primary', header: 'bg-primary-faded' },
  success: { border: 'border-success', header: 'bg-success-faded' },
  warning: { border: 'border-alert', header: 'bg-alert-faded' },
  danger: { border: 'border-danger', header: 'bg-danger-faded' },
};

export function Card({ tone = 'neutral', title, className = '', children, ...rest }: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white  
        ${toneClasses[tone].border} ${className}`}
      {...rest}
    >
      {title && (
        <div className={`px-6 py-3.5 ${toneClasses[tone].header}`}>
          <h3 className="text-h5 font-bold text-dark">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
