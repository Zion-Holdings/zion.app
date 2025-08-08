import Head from 'next/head';
import { useRouter } from 'next/router';

export default function TalentDetailPage() {
  const { query } = useRouter();
  const slug = String(query.slug || 'talent');
  return (
    <>
      <Head><title>Talent: {slug}</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">Talent: {slug}</h1>
        <p className="text-gray-600 dark:text-gray-300">Profile coming soon.</p>
      </div>
    </>
  );
}