import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Badge } from './Badge';

describe('Badge', () => {
  it('show its text', () => {
    renderWithProviders(<Badge>Shipped</Badge>);
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });
});
