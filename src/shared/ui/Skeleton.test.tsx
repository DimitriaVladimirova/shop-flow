import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('is hidden from screen', () => {
    const { container } = renderWithProviders(<Skeleton className="h-6 w-40" />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});
