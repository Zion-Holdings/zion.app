import React from 'react';
import { GetServerSideProps } from 'next';
import Blog from '@/pages/Blog';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function CommunityBlogPage() {
  return <Blog />;
} 