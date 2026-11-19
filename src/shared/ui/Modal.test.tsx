import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Modal } from './Modal';

describe('Modal', () => {
  it('shows a dialog with its title when open', () => {
    renderWithProviders(
      <Modal open onClose={() => {}} title="Delete product?">
        <p>This can’t be undone.</p>
      </Modal>,
    );

    expect(screen.getByRole('dialog', { name: 'Delete product?' })).toBeInTheDocument();
  });

  it('shows no dialog when closed', () => {
    renderWithProviders(
      <Modal open={false} onClose={() => {}} title="Delete product?">
        <p>This can’t be undone.</p>
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderWithProviders(
      <Modal open onClose={onClose} title="Delete product?">
        <p>This can’t be undone.</p>
      </Modal>,
    );
    await user.click(screen.getByRole('dialog'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking inside', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderWithProviders(
      <Modal open onClose={onClose} title="Delete product?">
        <p>This can’t be undone.</p>
      </Modal>,
    );
    await user.click(screen.getByText('This can’t be undone.'));

    expect(onClose).not.toHaveBeenCalled();
  });
});
