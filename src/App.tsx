import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
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

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));

// Our enhanced service pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  useScrollToTop();

  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <Header />
            
            {/* Main Content with enhanced Suspense */}
            <main className="pt-20 min-h-screen">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/services-showcase" element={<ServicesShowcase />} />
                  <Route path="/match" element={<AIMatcherPage />} />
                  <Route path="/talent" element={<TalentDirectory />} />
                  <Route path="/talents" element={<TalentsPage />} />
                  
                  {/* Our enhanced service routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mission" element={<Mission />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/services-overview" element={<ServicesOverview />} />
                  <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                  <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                  
                  {/* Include all route groups */}
                  <AuthRoutes />
                  <DashboardRoutes />
                  <MarketplaceRoutes />
                  <TalentRoutes />
                  <AdminRoutes />
                  <MobileAppRoutes />
                  <ContentRoutes />
                  <ErrorRoutes />
                  <EnterpriseRoutes />
                  <CommunityRoutes />
                  <DeveloperRoutes />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <Toaster />
            <SonnerToaster />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
};

export default App;