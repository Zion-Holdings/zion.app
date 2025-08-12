import React from 'react';
import { GetServerSideProps } from 'next';
import Categories from '@/pages/Categories';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function MarketplaceCategoriesPage() {
  return <Categories />;
} 