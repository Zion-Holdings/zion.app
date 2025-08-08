import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TalentProfilePage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>{typeof slug === 'string' ? slug : 'Talent'} - Zion Tech Solutions</title>
        <meta name="description" content="Talent profile page" />
      </Head>
      
      <main>
        <h1>{typeof slug === 'string' ? slug : 'Talent'}</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default TalentProfilePage;