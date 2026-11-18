import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';
import { Button } from './Button';

describe('EmptyState', () => {
  it('shows the title as a heading', () => {
    renderWithProviders(<EmptyState title="Your cart is empty"></EmptyState>);
    expect(screen.getByRole('heading', { name: 'Your cart is empty' })).toBeInTheDocument();
  });

  it('shows the description and the action', () => {
    renderWithProviders(
      <EmptyState
        title="Your cart is empty"
        description="Browse the shop and add something you like."
        action={<Button>Start shopping</Button>}
      ></EmptyState>,
    );
    expect(screen.getByText('Browse the shop and add something you like.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start shopping' })).toBeInTheDocument();
  });

  it('shows no button without an action', () => {
    renderWithProviders(<EmptyState title="Your cart is empty"></EmptyState>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
