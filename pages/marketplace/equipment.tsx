import React from 'react';
import { GetServerSideProps } from 'next';
import EquipmentPage from '@/pages/EquipmentPage';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function MarketplaceEquipmentPage() {
  return <EquipmentPage />;
} 