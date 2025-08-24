import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import ClientDashboard from '@/pages/ClientDashboard';
import TalentDashboard from '@/pages/TalentDashboard';

export default function DashboardRoutes() {
  return (
    <>
      <Route path="" element={<Dashboard />} />
      <Route path="client" element={<ClientDashboard />} />
      <Route path="talent" element={<TalentDashboard />} />
    </>
  );
}