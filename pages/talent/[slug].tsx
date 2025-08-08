import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TalentSlugPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const title = slug ? `${slug} - Zion Tech Solutions` : 'Talent - Zion Tech Solutions';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Talent detail page" />
      </Head>
      
      <main>
        <h1>{slug || 'Talent'}</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default TalentSlugPage;