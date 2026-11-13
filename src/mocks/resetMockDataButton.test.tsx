import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test/renderWithProviders';
import { ResetMockDataButton } from './resetMockDataButton';
import { screen } from '@testing-library/react';

describe('ResetMockDataButton', () => {
  it('shows a button labelled "Reset mock data"', () => {
    renderWithProviders(<ResetMockDataButton />);
    expect(screen.getByRole('button', { name: 'Reset mock data' })).toBeInTheDocument();
  });
});
