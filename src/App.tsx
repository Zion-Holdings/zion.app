import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
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
import AIMatcherPage from './pages/AIMatcher';
import TalentDirectory from './pages/TalentDirectory';
import TalentsPage from './pages/TalentsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import Analytics from './pages/Analytics';
import MobileLaunchPage from './pages/MobileLaunchPage';
import CommunityPage from './pages/CommunityPage';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match" element={<AIMatcherPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/talent" element={<TalentDirectory />} />
          <Route path="/talents" element={<TalentsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/mobile-launch" element={<MobileLaunchPage />} />
          <Route path="/community" element={<CommunityPage />} />
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
    </WhitelabelProvider>
  );
};

export default App;