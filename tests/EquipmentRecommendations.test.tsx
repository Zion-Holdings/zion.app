import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import EquipmentPage from '@/pages/EquipmentPage';
import { AppLayout } from '@/layout/AppLayout';
import * as auth from '@/hooks/useAuth';

const recommended = [
  {
    id: 'rec1',
    title: 'Recommended 1',
    description: 'Desc',
    category: 'Servers',
    price: 100,
    currency: '$',
    tags: [],
    author: { name: 'a', id: 'a' },
    images: [],
    createdAt: '2024-01-01'
  },
  {
    id: 'rec2',
    title: 'Recommended 2',
    description: 'Desc',
    category: 'Servers',
    price: 100,
    currency: '$',
    tags: [],
    author: { name: 'a', id: 'a' },
    images: [],
    createdAt: '2024-01-01'
  },
  {
    id: 'rec3',
    title: 'Recommended 3',
    description: 'Desc',
    category: 'Servers',
    price: 100,
    currency: '$',
    tags: [],
    author: { name: 'a', id: 'a' },
    images: [],
    createdAt: '2024-01-01'
  }
];

let receivedUserId = '';
const server = setupServer(
  rest.get('/api/equipment/recommendations', (req, res, ctx) => {
    receivedUserId = req.url.searchParams.get('userId') || '';
    return res(ctx.json(recommended));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.spyOn(auth, 'useAuth').mockReturnValue({ user: { id: 'u1' }, isLoading: false } as any);

test('loads AI recommendations', async () => {
  render(
    <MemoryRouter initialEntries={['/equipment']}>
      <AppLayout>
        <EquipmentPage />
      </AppLayout>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/AI Recommendations/i));

  expect(await screen.findByText('Recommended 1')).toBeInTheDocument();
  expect(screen.getByText('Recommended 2')).toBeInTheDocument();
  expect(screen.getByText('Recommended 3')).toBeInTheDocument();
  expect(receivedUserId).toBe('u1');
});


vi.spyOn(auth, 'useAuth').mockReturnValueOnce({ user: null, isLoading: false } as any);
test('redirects to login when not authenticated', () => {
  const navigateMock = vi.fn();
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      ...actual,
      useNavigate: () => navigateMock
    };
  });

  render(
    <MemoryRouter initialEntries={['/equipment']}>
      <AppLayout>
        <EquipmentPage />
      </AppLayout>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/AI Recommendations/i));
  expect(navigateMock).toHaveBeenCalledWith('/auth/login?returnTo=/equipment&reco=1');
});
