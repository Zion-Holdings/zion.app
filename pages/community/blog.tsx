import React from 'react';
import { GetServerSideProps } from 'next';
import Blog from '../../src/pages/Blog';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function CommunityBlogPage() {
  return <Blog />;
} 