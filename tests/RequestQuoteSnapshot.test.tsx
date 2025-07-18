import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestQuote from '@/src/pages/RequestQuote';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementation((sel) => sel({ cart: { items: [] } })),
}));

test('RequestQuote page renders header', () => {
  const { _asFragment } = render(
    <MemoryRouter>
      <RequestQuote />
    </MemoryRouter>
  );

  expect(screen.getByText(/request a quote/i)).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
