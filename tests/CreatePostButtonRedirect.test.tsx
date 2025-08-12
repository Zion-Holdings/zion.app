import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as auth from '@/hooks/useAuth';
import * as router from 'react-router-dom';
import CreatePostButton from '@/components/community/CreatePostButton';

test('redirects to login when user is not authenticated', () => {
  const navigateMock = jest.fn();
  jest.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);
  jest.spyOn(auth, 'useAuth').mockReturnValue({ user: null } as any);

  render(
    <MemoryRouter>
      <CreatePostButton />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: /create new post/i }));
  expect(navigateMock).toHaveBeenCalledWith('/auth/login?returnTo=%2Fcommunity%3Fnew%3D1');
});
