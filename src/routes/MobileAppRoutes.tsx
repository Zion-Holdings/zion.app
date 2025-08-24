import React from 'react';
import { Route } from 'react-router-dom';
import MobileLaunchPage from '@/pages/MobileLaunchPage';

export default function MobileAppRoutes() {
  return (
    <>
      <Route path="launch" element={<MobileLaunchPage />} />
    </>
  );
}