import { useEffect } from 'react';
import type { Tone } from './tone';

type ToastProps = {
  message: string;
  tone?: Tone;
  duration?: number;
  onClose: () => void;
};

const toneIcon: Record<Tone, string> = {
  neutral: 'bg-muted',
  info: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-alert',
  danger: 'bg-danger',
};

export function Toast({ message, tone = 'neutral', duration = 4000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="status"
      className="bg-dark text-white px-5 py-3.5 rounded-lg shadow-lg flex items-center gap-3"
    >
      <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${toneIcon[tone]}`} />
      <p className="text-h6 font-bold">{message}</p>
      <button
        type="button"
        aria-label="Close notification"
        onClick={onClose}
        className="text-small text-white cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}
