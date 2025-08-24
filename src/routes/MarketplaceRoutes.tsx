import React from 'react';
import { Route } from 'react-router-dom';
import Marketplace from '@/pages/Marketplace';

export default function MarketplaceRoutes() {
  return (
    <>
      <Route path="" element={<Marketplace />} />
    </>
  );
}