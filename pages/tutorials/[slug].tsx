import TutorialPage from '@/pages/Tutorial';
import { TUTORIALS } from '@/data/tutorials';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Tutorial } from '@/types/tutorial';

interface PageProps {
  tutorial: Tutorial;
}

export default function Page({ tutorial }: PageProps) {
  return <TutorialPage tutorial={tutorial} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TUTORIALS.map(t => ({ params: { slug: t.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: { slug?: string };
}) => {
  const slug = params?.slug as string;
  const tutorial = TUTORIALS.find(t => t.slug === slug) || null;
  if (!tutorial) {
    return { notFound: true };
  }
  return { props: { tutorial } };
};
