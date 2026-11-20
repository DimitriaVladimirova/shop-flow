import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Footer } from './Footer';

describe('Footer', () => {
  it('is a contentinfo landmark', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('has a navigation named "Footer"', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByRole('navigation', { name: 'Footer' })).toBeInTheDocument();
  });

  it('shows the copyright notice', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/ShopFlow\. All rights reserved\./)).toBeInTheDocument();
  });

  it('credits the UI kit author', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/Raouf Belakhdar/)).toBeInTheDocument();
  });
});
