import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Checkout from '@/pages/Checkout';
import React from 'react';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementation((sel) => sel({ cart: { items: [] } })),
}));

test('Checkout page renders header', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Checkout />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /checkout/i })).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
