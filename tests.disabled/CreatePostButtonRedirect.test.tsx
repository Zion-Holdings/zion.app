import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import * as auth from '@/hooks/useAuth';
import * as router from 'react-router-dom';
import CreatePostButton from '@/components/community/CreatePostButton';

test('redirects to login when user is not authenticated', () => {
  const navigateMock = vi.fn();
  vi.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);
  vi.spyOn(auth, 'useAuth').mockReturnValue({ user: null } as any);

  render(
    <MemoryRouter>
      <CreatePostButton />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: /create new post/i }));
  expect(navigateMock).toHaveBeenCalledWith('/login?next=%2Fcommunity%2Fcreate');
});
