import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('can be ticked by clicking', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Checkbox label="Dairy" />);
    await user.click(screen.getByRole('checkbox', { name: 'Dairy' }));
    expect(screen.getByRole('checkbox', { name: 'Dairy' })).toBeChecked();
  });

  it('can be unticked by clicking again', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Checkbox label="Dairy" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Dairy' });
    await user.click(checkbox);
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
