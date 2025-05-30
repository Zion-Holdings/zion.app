import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { vi } from 'vitest';
import NewPost from '@/pages/NewPost';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import * as auth from '@/hooks/useAuth';

vi.mock('@/hooks/useAuth');

test('renders new post page when authenticated', () => {
  (auth.useAuth as any).mockReturnValue({ user: { id: '1' }, isLoading: false });
  render(
    <MemoryRouter initialEntries={['/community/new']}>
      <Routes>
        <Route path='/community/new' element={<ProtectedRoute><NewPost /></ProtectedRoute>} />
        <Route path='/login' element={<div>login</div>} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByTestId('new-post-form')).toBeInTheDocument();
});
