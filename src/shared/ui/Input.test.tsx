import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Input } from './Input';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  it('connects the label to the input', () => {
    renderWithProviders(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('lets the user type', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Input label="Email" />);
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');

    expect(screen.getByLabelText('Email')).toHaveValue('jane@example.com');
  });

  it('show the hint text', () => {
    renderWithProviders(<Input label="Password" hint="At least 8 characters." />);

    expect(screen.getByText('At least 8 characters.')).toBeInTheDocument();
  });

  it('shows the error message, and markes the input as invalid', () => {
    renderWithProviders(<Input label="Password" error="Password must be at least 8 characters." />);

    expect(screen.getByText('Password must be at least 8 characters.')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInvalid();
    expect(screen.getByLabelText('Password')).toHaveAccessibleDescription(
      'Password must be at least 8 characters.',
    );
  });
});
