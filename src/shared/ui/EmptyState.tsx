import type { ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center gap-4 py-12 text-center ${className}`}>
      <h3 className="text-h4 font-bold text-dark">{title}</h3>
      {description && <p className="text-paragraph text-second-text">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
