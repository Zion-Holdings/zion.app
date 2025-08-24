import Head from 'next/head';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function TalentProfilePage() {
  return (
    <>
      <Head><title>Talent Profile - Zion</title></Head>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Talent Profile</h1>
        <p className="mt-2 text-gray-600">Coming soon.</p>
      </div>
    </>
  );
}