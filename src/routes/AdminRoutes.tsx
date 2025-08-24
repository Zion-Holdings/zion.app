import React from 'react';
import { Route } from 'react-router-dom';
import Analytics from '@/pages/Analytics';

export default function AdminRoutes() {
  return (
    <>
      <Route path="analytics" element={<Analytics />} />
    </>
  );
}