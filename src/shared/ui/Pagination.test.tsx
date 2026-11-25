import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('disables Previous on the first page', () => {
    renderWithProviders(<Pagination page={1} totalPages={3} onPageChange={() => {}} />);

    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled();
  });

  it('disables Next on the last page', () => {
    renderWithProviders(<Pagination page={3} totalPages={3} onPageChange={() => {}} />);

    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });

  it('renders nothing when there is only one page', () => {
    renderWithProviders(<Pagination page={1} totalPages={1} onPageChange={() => {}} />);

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('calls onPageChange with the next page', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    renderWithProviders(<Pagination page={2} totalPages={3} onPageChange={onPageChange} />);

    await user.click(screen.getByRole('button', { name: 'Next' }));

    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
