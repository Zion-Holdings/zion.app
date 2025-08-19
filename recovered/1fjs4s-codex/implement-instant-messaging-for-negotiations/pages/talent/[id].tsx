import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { TALENT_PROFILES } from '@/data/talentData';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';

interface TalentPageProps {
  talent: TalentProfile | null;
}

const TalentPage: React.FC<TalentPageProps> = ({ talent }) => {
  if (!talent) {
    return <NotFound />;
  }

  return <TalentDetails talent={talent} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TALENT_PROFILES.map((t) => ({ params: { id: t.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TalentPageProps> = async ({ params }) => {
  const id = params?.id as string;
  const talent = TALENT_PROFILES.find((t) => t.id === id) || null;

  if (!talent) {
    return { notFound: true };
  }

  return { props: { talent } };
};

export default TalentPage;
