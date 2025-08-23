import React from 'react';
import type { GetServerSideProps } from 'next';
import CommunityPage from '@/pages/CommunityPage';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function CommunityForumPage() {
  return <CommunityPage />;
} 