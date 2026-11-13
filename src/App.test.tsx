import { describe, expect, it } from 'vitest';
import { renderWithProviders } from './test/renderWithProviders';
import { screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('shows the front page text', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('heading', { name: 'ShopFlow' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Reset mock data' })).not.toBeInTheDocument();
  });
});
