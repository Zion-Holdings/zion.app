import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import { vi } from 'vitest';
import * as auth from '@/hooks/useAuth';

function setup() {
  const signupMock = vi.fn().mockResolvedValue({ error: null });
  vi.spyOn(auth, 'useAuth').mockReturnValue({ signup: signupMock, isAuthenticated: false, user: null, isLoading: false } as any);
  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  return { signupMock };
}

describe('Signup form', () => {
  it('shows validation errors', async () => {
    setup();
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(await screen.findAllByText(/required|must/i)).not.toHaveLength(0);
  });

  it('submits valid form', async () => {
    const { signupMock } = setup();
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(signupMock).toHaveBeenCalled();
  });
});
