import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestQuotePage from '@/pages/request-quote';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: '1', title: 'Service A' }],
  }) as any;
});

test('renders quote wizard without runtime errors', async () => {
  render(
    <MemoryRouter>
      <RequestQuotePage />
    </MemoryRouter>
  );

  expect(await screen.findByTestId('step-indicator')).toBeInTheDocument();
});
