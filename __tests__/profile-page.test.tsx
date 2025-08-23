import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '@/pages/Profile';
import { vi, expect, test } from 'vitest';

test('saves updated profile', async () => {
  const mockUser = { id: '1', name: 'Jane', bio: '', avatarUrl: '', points: 0 };
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve({ ...mockUser, name: 'New' }),
  }) as any;

  render(<Profile user={mockUser} orders={[]} />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New' } });
  fireEvent.click(screen.getByText('Save'));

  await waitFor(() =>
    expect(global.fetch).toHaveBeenLastCalledWith(
      '/api/users/1',
      expect.objectContaining({ method: 'PATCH' })
    )
  );
});
