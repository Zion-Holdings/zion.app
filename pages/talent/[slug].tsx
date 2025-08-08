import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

type Props = { slug: string };

const TalentSlugPage: NextPage<Props> = ({ slug }) => {
  return (
    <div>
      <Head>
        <title>{slug} - Zion Tech Solutions</title>
        <meta name="description" content={`${slug} page`} />
      </Head>
      
      <main>
        <h1>{slug}</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = (params?.slug as string) || 'talent';
  return { props: { slug } };
};

export default TalentSlugPage;