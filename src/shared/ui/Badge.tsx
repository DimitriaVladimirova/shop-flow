import type { HTMLAttributes } from 'react';
import type { Tone } from './tone';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-light-gray-2 text-second-text',
  info: 'bg-primary-faded text-primary',
  success: 'bg-success-faded text-success',
  warning: 'bg-alert-faded text-alert',
  danger: 'bg-danger-faded text-danger',
};

export function Badge({ tone = 'neutral', className = '', children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-small font-bold ${toneClasses[tone]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
