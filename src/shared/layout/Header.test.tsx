import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Header } from './Header';

describe('Header', () => {
  it('is a banner landmark', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('has a navigation named "Main"', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
  });

  it('links to the shop page', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '/shop');
  });

  it('shows the actions it is given', () => {
    renderWithProviders(<Header actions={<button type="button">Cart (2)</button>} />);
    expect(screen.getByRole('button', { name: 'Cart (2)' })).toBeInTheDocument();
  });
});
