import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Button } from './Button';
import { renderWithProviders } from '../../test/renderWithProviders';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('shows its text', () => {
    renderWithProviders(<Button>Add to cart</Button>);
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
  });
  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithProviders(<Button onClick={handleClick}>Add to cart</Button>);
    await user.click(screen.getByRole('button', { name: 'Add to cart' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithProviders(
      <Button onClick={handleClick} disabled>
        Sold out
      </Button>,
    );

    await user.click(screen.getByRole('button', { name: 'Sold out' }));

    expect(handleClick).not.toHaveBeenCalled();
  });
  it('when loading: shows Loading and is disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithProviders(
      <Button onClick={handleClick} loading>
        Place order
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Loading' });
    await user.click(button);
    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });
  it('has type button by default', () => {
    renderWithProviders(<Button>Add to cart</Button>);
    expect(screen.getByRole('button', { name: 'Add to cart' })).toHaveAttribute('type', 'button');
  });
});
