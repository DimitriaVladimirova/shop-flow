import { describe, expect, it } from 'vitest';
import { renderWithProviders } from './test/renderWithProviders';
import { screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('shows the shop page', async () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Shop' })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: 'Red Apples, 1 kg' })).toBeInTheDocument();
  });
});
