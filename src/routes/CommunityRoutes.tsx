import React from 'react';
import { Route } from 'react-router-dom';
import CommunityPage from '@/pages/CommunityPage';

export default function CommunityRoutes() {
  return (
    <>
      <Route path="" element={<CommunityPage />} />
    </>
  );
}