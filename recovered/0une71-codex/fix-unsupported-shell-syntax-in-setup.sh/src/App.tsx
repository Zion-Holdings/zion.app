import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import {
  AuthRoutes,
  DashboardRoutes,
  MarketplaceRoutes,
  TalentRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  CommunityRoutes,
  DeveloperRoutes
} from './routes';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
        <Route path="/talent/*" element={<TalentRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/mobile/*" element={<MobileAppRoutes />} />
        <Route path="/content/*" element={<ContentRoutes />} />
        <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
        <Route path="/community/*" element={<CommunityRoutes />} />
        <Route path="/developers/*" element={<DeveloperRoutes />} />
        <Route path="*" element={<ErrorRoutes />} />
      </Routes>
      <Toaster />
      <SonnerToaster position="top-right" />
    </ThemeProvider>
  );
};

export default App;