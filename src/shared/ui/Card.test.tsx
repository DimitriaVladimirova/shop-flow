import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Card } from './Card';
import { renderWithProviders } from '../../test/renderWithProviders';

describe('Card', () => {
  it('shows its title as a heading', () => {
    renderWithProviders(<Card title="Order summary"></Card>);
    expect(screen.getByRole('heading', { name: 'Order summary' })).toBeInTheDocument();
  });

  it('shows its content', () => {
    renderWithProviders(<Card>Shipped · On its way</Card>);
    expect(screen.getByText('Shipped · On its way')).toBeInTheDocument();
  });

  it('has no heading without a title', () => {
    renderWithProviders(<Card />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
