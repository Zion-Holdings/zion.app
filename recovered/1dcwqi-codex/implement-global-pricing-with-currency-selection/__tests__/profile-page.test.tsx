import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '@/pages/Profile';
import { vi, expect, test } from 'vitest';

function mockFetch(response: any) {
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve(response),
  }) as any;
}

test('fetches profile on mount', async () => {
  mockFetch({ id: '1', name: 'Jane', email: 'jane@example.com', avatarUrl: '', notifications: { email: true, push: false } });
  render(<Profile />);
  await screen.findByDisplayValue('Jane');
  expect(global.fetch).toHaveBeenCalledWith('/api/users/me');
});

test('saves updated profile', async () => {
  mockFetch({ id: '1', name: 'Jane', email: 'jane@example.com', avatarUrl: '', notifications: { email: true, push: false } });
  render(<Profile />);
  await screen.findByDisplayValue('Jane');
  (global.fetch as any).mockResolvedValueOnce({ json: () => Promise.resolve({ id:'1', name:'New', email:'jane@example.com', avatarUrl:'', notifications:{email:true,push:false} }) });
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New' } });
  fireEvent.click(screen.getByText('Save'));
  await waitFor(() => expect(global.fetch).toHaveBeenLastCalledWith('/api/users/me', expect.anything()));
});
