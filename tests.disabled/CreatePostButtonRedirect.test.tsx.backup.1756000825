<<<<<<< HEAD
import { render, screen, fireEvent } from @testing-library/react';import { MemoryRouter } from react-router-dom';import * as auth from @/hooks/useAuth';import * as router from react-router-dom';import CreatePostButton from @/components/community/CreatePostButton';
test('redirects to login when user is not authenticated', () => {'  const navigateMock = jest.fn();
  jest.spyOn(router, useNavigate').mockReturnValue(navigateMock);  jest.spyOn(auth, useAuth').mockReturnValue({ user: null } as any);
=======
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

>>>>>>> origin/c7npva-codex/fix-star-icon-and-create-post-without-login
  render(
    <MemoryRouter>
      <CreatePostButton />
    </MemoryRouter>
  );

<<<<<<< HEAD
  fireEvent.click(screen.getByRole('button', { name: /create new post/i }));  expect(navigateMock).toHaveBeenCalledWith('/auth/login?returnTo=%2Fcommunity%3Fnew%3D1');});
=======
  fireEvent.click(screen.getByRole('button', { name: /create new post/i }));
  expect(navigateMock).toHaveBeenCalledWith('/login?next=%2Fcommunity%2Fcreate');
});
>>>>>>> origin/c7npva-codex/fix-star-icon-and-create-post-without-login
