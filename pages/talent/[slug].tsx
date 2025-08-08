import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TalentProfilePage: NextPage = () => {
  const { query } = useRouter();
  const slug = String(query.slug || 'profile');
  return (
    <div>
      <Head><title>Talent - {slug}</title></Head>
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Profile details coming soon.</p>
    </div>
  );
};

export default TalentProfilePage;