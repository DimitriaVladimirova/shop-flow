import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select', () => {
  it('connects the label to the select', () => {
    renderWithProviders(
      <Select label="Sort by">
        <option value="price_asc">Price: low to high</option>
        <option value="price_desc">Price: high to low</option>
        <option value="name">Name</option>
      </Select>,
    );
    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
  });

  it('lets a user choose an option', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Select label="Sort by" defaultValue="price_asc">
        <option value="price_asc">Price: low to high</option>
        <option value="price_desc">Price: high to low</option>
        <option value="name">Name</option>
      </Select>,
    );
    const select = screen.getByLabelText('Sort by');

    await user.selectOptions(select, 'name');
    expect(select).toHaveValue('name');
  });
});
