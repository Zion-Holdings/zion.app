import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TalentDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  return (
    <div>
      <Head>
        <title>{slug ? `${slug} - Talent` : 'Talent'} - Zion Tech Solutions</title>
        <meta name="description" content="Talent profile" />
      </Head>
      
      <main>
        <h1>Talent: {slug ?? '...'}</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default TalentDetailPage;