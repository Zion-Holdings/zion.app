import { render, screen } from '@testing-library/react';
import NotFound from '@/components/NotFound';
import { getStaticProps } from '@/pages/talent/[id]';

test('unknown talent id shows NotFound page', async () => {
  const result = await getStaticProps({ params: { id: 'unknown-id' } } as any);
  let show404 = false;

  if ('notFound' in result && result.notFound) {
    show404 = true;
    render(<NotFound />);
  }

  expect(show404).toBe(true);
  expect(screen.getByText(/oops! page not found/i)).toBeInTheDocument();
});
