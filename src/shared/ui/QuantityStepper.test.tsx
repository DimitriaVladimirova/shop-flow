import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { QuantityStepper } from './QuantityStepper';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('QuantityStepper', () => {
  it('calls onChange with the next value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<QuantityStepper value={2} max={5} onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase quantity' }));

    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('disables decrease at the minimum', () => {
    renderWithProviders(<QuantityStepper value={1} max={5} onChange={() => {}} />);

    expect(screen.getByRole('button', { name: 'Decrease quantity' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Increase quantity' })).toBeEnabled();
  });

  it('disables increase at the maximum', () => {
    renderWithProviders(<QuantityStepper value={5} max={5} onChange={() => {}} />);

    expect(screen.getByRole('button', { name: 'Increase quantity' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Decrease quantity' })).toBeEnabled();
  });

  it('disables both buttons when disabled', () => {
    renderWithProviders(<QuantityStepper value={2} max={5} onChange={() => {}} disabled />);

    expect(screen.getByRole('button', { name: 'Increase quantity' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Decrease quantity' })).toBeDisabled();
  });
});
