import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Radio } from './Radio';
import userEvent from '@testing-library/user-event';

describe('Radio', () => {
  it('selects only one radio in the same group', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <>
        <Radio name="type" label="Food" />
        <Radio name="type" label="Product" />
      </>,
    );
    await user.click(screen.getByRole('radio', { name: 'Food' }));
    expect(screen.getByRole('radio', { name: 'Food' })).toBeChecked();

    await user.click(screen.getByRole('radio', { name: 'Product' }));
    expect(screen.getByRole('radio', { name: 'Product' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Food' })).not.toBeChecked();
  });
});
