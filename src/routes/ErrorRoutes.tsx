import React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

export default function ErrorRoutes() {
  return (
    <Route path="*" element={<NotFound />} />
  );
}