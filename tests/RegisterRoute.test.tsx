import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from '@/components/auth/RegisterForm';

test('register route shows confirm password field', () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
});
