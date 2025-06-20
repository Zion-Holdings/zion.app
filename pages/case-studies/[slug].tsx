import CaseStudyPage from '@/pages/CaseStudy';
import { CASE_STUDIES } from '@/data/case-studies';
import type { GetStaticPaths, GetStaticProps } from 'next';

export default CaseStudyPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CASE_STUDIES.map(s => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: { slug?: string };
}) => {
  const slug = params?.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug) || null;
  if (!study) {
    return { notFound: true };
  }
  return { props: {} };
};
