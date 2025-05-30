import React from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { TALENT_PROFILES } from '@/data/talentData';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';

interface TalentPageProps {
  talent: (TalentProfile & { social?: Record<string, string> }) | null;
}

const TalentPage: React.FC<TalentPageProps> = ({ talent }) => {
  if (!talent) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>{talent.full_name}</title>
      </Head>
      <TalentDetails talent={talent} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TalentPageProps> = async ({ params }) => {
  const id = params?.id as string | undefined;

  if (!id) {
    return { notFound: true };
  }

  const profile = TALENT_PROFILES.find((t) => t.id === id) || null;

  if (!profile) {
    return { notFound: true };
  }

  const first = profile.full_name.split(' ')[0].toLowerCase();
  const social = {
    twitter: `https://twitter.com/${first}`,
    linkedin: `https://linkedin.com/in/${first}`,
  };

  return { props: { talent: { ...profile, social } } };
};

export default TalentPage;
