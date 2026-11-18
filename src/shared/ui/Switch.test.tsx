import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Switch } from './Switch';

describe('Switch', () => {
  it('can be turned on', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Switch label="Gift wrapping" />);
    await user.click(screen.getByRole('switch', { name: 'Gift wrapping' }));
    expect(screen.getByRole('switch', { name: 'Gift wrapping' })).toBeChecked();
  });

  it('can be turned off again', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Switch label="Gift wrapping" />);
    const toggle = screen.getByRole('switch', { name: 'Gift wrapping' });

    await user.click(toggle);
    await user.click(toggle);
    expect(toggle).not.toBeChecked();
  });
});
