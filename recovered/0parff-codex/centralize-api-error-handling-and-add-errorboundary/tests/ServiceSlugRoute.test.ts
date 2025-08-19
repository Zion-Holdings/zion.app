import { getStaticProps } from '../pages/services/[slug]';

it('returns 200 for cloud infrastructure management service page', async () => {
  const result = await getStaticProps({
    params: { slug: 'cloud-infrastructure-management' },
  } as any);

  expect('props' in result && (result as any).props.service).toBeTruthy();
});
