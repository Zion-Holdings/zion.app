import React from 'react';
import { GetServerSideProps } from 'next';
import TalentPage from '@/pages/TalentsPage';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function MarketplaceTalentPage() {
  return <TalentPage />;
} 