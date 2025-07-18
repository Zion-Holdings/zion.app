import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthRoutes from '@/routes/AuthRoutes';

const MockSignup = () => (
  <form>
    <label htmlFor="first">First name</label>
    <input id="first" />
  </form>
);
MockSignup.displayName = 'MockSignup';

jest.mock('@/pages/Signup', () => MockSignup);

const TestComponent = () => <div>Test</div>;
TestComponent.displayName = 'TestComponent';

test('register route shows signup form', async () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <Suspense fallback={null}>
        <AuthRoutes />
      </Suspense>
    </MemoryRouter>
  );
  expect(await screen.findByLabelText(/first name/i)).toBeInTheDocument();
});
