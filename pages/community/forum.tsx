import React from 'react';
import type { GetServerSideProps } from 'next';
import CommunityPage from '@/pages/CommunityPage';

// export const _getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function CommunityForumPage() {
  return <CommunityPage />;
} 