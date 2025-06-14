import { render, screen, fireEvent } from '@testing-library/react';
import * as auth from '@/hooks/useAuth';
import * as nextRouter from 'next/router';
import CreatePostButton from '@/components/community/CreatePostButton';

test('redirects to login when user is not authenticated', () => {
  const pushMock = vi.fn();
  vi.spyOn(nextRouter, 'useRouter').mockReturnValue({ push: pushMock } as any);
  vi.spyOn(auth, 'useAuth').mockReturnValue({ user: null } as any);

  render(<CreatePostButton />);

  fireEvent.click(screen.getByRole('button', { name: /create new post/i }));
  expect(pushMock).toHaveBeenCalledWith('/login?next=/community/new');
});
