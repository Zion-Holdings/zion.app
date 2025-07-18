import React from 'react';
import type { GetServerSideProps } from 'next';
import Blog from '../../src/pages/Blog';

// export const _getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function CommunityBlogPage() {
  return <Blog />;
} 