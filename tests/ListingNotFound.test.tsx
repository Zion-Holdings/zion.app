import { render, screen } from '@testing-library/react';
import Custom404 from '@/pages/404';
import { getStaticProps } from '@/pages/marketplace/listing/[slug]';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

test('visit unknown slug shows 404 page', async () => {
  const result = await getStaticProps({ params: { slug: 'unknown-slug' } } as any);
  let show404 = false;

  if ('notFound' in result && result.notFound) {
    show404 = true;
    (router.useNavigate as jest.Mock).mockReturnValue(jest.fn());
    render(
      <MemoryRouter>
        <Custom404 />
      </MemoryRouter>
    );
  }

  expect(show404).toBe(true);
  expect(
    screen.getByRole('button', { name: /back to marketplace/i })
  ).toBeInTheDocument();
});
