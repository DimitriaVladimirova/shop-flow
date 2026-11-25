import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../test/renderWithProviders';
import { CatalogPage } from './CatalogPage';

describe('CatalogPage', () => {
  it('shows products from the mock API', async () => {
    renderWithProviders(<CatalogPage />);

    expect(await screen.findByRole('heading', { name: 'Red Apples, 1 kg' })).toBeInTheDocument();
  });

  it('shows an error message when the request fails', async () => {
    server.use(
      http.get('/api/products', () =>
        HttpResponse.json({ message: 'Server error' }, { status: 500 }),
      ),
    );
    renderWithProviders(<CatalogPage />);

    expect(await screen.findByRole('alert')).toHaveTextContent('We couldn’t load the products');
  });

  it('loads the products when Retry is clicked', async () => {
    const user = userEvent.setup();
    server.use(
      http.get('/api/products', () =>
        HttpResponse.json({ message: 'Server error' }, { status: 500 }),
      ),
    );
    renderWithProviders(<CatalogPage />);

    const retryButton = await screen.findByRole('button', { name: 'Retry' });

    server.resetHandlers();
    await user.click(retryButton);

    expect(await screen.findByRole('heading', { name: 'Red Apples, 1 kg' })).toBeInTheDocument();
  });
});
