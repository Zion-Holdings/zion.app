import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';
import { TALENT_PROFILES } from '@/data/talentData';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';

interface TalentPageProps {
  talent: (TalentProfile & { social?: Record<string, string> }) | null;
}

const TalentPage: React.FC<TalentPageProps> = ({ talent }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
      </div>
    );
  }

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TALENT_PROFILES.map(t => ({ params: { id: t.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TalentPageProps> = async ({ params }) => {
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
