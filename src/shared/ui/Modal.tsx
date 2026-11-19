import { useEffect, useId, useRef, type ReactNode } from 'react';
import type { Tone } from './tone';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  tone?: Tone;
};

const toneBorder: Record<Tone, string> = {
  neutral: 'border-light-gray-2',
  info: 'border-primary',
  success: 'border-success',
  warning: 'border-alert',
  danger: 'border-danger',
};

export function Modal({ open, onClose, tone = 'neutral', title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`m-auto w-full max-w-md rounded-2xl border bg-white p-0 backdrop:bg-dark/50 ${toneBorder[tone]}`}
    >
      <div className=" p-8 flex flex-col gap-4">
        <h2 id={titleId} className="text-h4 font-bold text-dark">
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  );
}
