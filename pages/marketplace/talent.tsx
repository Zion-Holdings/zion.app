import React from 'react';
import type { GetServerSideProps } from 'next';
import TalentPage from '@/pages/TalentsPage';

export const _getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function MarketplaceTalentPage() {
  return <TalentPage />;
} 