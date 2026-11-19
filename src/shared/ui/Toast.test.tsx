import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Toast } from './Toast';

describe('Toast', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows its message as a status', () => {
    renderWithProviders(<Toast message="Profile saved" onClose={() => {}}></Toast>);
    expect(screen.getByRole('status')).toHaveTextContent('Profile saved');
  });

  it('calls onClose after the duration', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    renderWithProviders(<Toast message="Profile saved" duration={4000} onClose={onClose}></Toast>);

    vi.advanceTimersByTime(3999);
    expect(onClose).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderWithProviders(<Toast message="Profile saved" onClose={onClose}></Toast>);

    await user.click(screen.getByRole('button', { name: 'Close notification' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('cancels the timer when the toast disappears early', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const { unmount } = renderWithProviders(<Toast message="Profile saved" onClose={onClose} />);
    unmount();
    vi.advanceTimersByTime(5000);
    expect(onClose).not.toHaveBeenCalled();
  });
});
