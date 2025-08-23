import { render, screen } from '@testing-library/react';
import Custom404 from '@/pages/404';
import { getStaticProps } from '@/pages/marketplace/listing/[slug]';

test('visit unknown slug shows 404 page', async () => {
  const result = await getStaticProps({ params: { slug: 'unknown-slug' } } as any);
  let show404 = false;

  if ('notFound' in result && result.notFound) {
    show404 = true;
    render(<Custom404 />);
  }

  expect(show404).toBe(true);
  expect(screen.getByText('404 – Page Not Found')).toBeInTheDocument();
});
