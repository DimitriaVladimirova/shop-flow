import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('has the default label "Loading"', () => {
    renderWithProviders(<Spinner />);
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('uses a custom label', () => {
    renderWithProviders(<Spinner label="Loading products"></Spinner>);
    expect(screen.getByRole('status', { name: 'Loading products' })).toBeInTheDocument();
  });
});
