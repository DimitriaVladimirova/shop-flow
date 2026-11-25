import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { seedProducts } from '../../mocks/seed';
import { renderWithProviders } from '../../test/renderWithProviders';
import { ProductCard } from './ProductCard';

const apples = seedProducts[0];
const soldOutApples = { ...apples, stock: 0 };

describe('ProductCard', () => {
  it('shows the product details', () => {
    renderWithProviders(<ProductCard product={apples} groupName="Fruit & Vegetables" />);

    expect(screen.getByRole('heading', { name: 'Red Apples, 1 kg' })).toBeInTheDocument();
    expect(screen.getByText('€2.99')).toBeInTheDocument();
    expect(screen.getByText('Fruit & Vegetables')).toBeInTheDocument();
  });

  it('shows a sold-out badge and disables the button when out of stock', () => {
    renderWithProviders(<ProductCard product={soldOutApples} />);

    expect(screen.getAllByText('Sold out')).toHaveLength(2);
    expect(screen.getByRole('button', { name: 'Sold out' })).toBeDisabled();
  });

  it('calls onAddToCart when the button is clicked', async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    renderWithProviders(<ProductCard product={apples} onAddToCart={onAddToCart} />);
    await user.click(screen.getByRole('button', { name: 'Add to cart' }));

    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
