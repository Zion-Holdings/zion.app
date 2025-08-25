import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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

const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

// Add new AI service pages
const AIAutonomousBusinessManager = React.lazy(() => import('./pages/AIServices/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = React.lazy(() => import('./pages/AIServices/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = React.lazy(() => import('./pages/AIServices/AIAutonomousCodeReview'));
const AIAutonomousCreativeDirector = React.lazy(() => import('./pages/AIServices/AIAutonomousCreativeDirector'));
const AIAutonomousData = React.lazy(() => import('./pages/AIServices/AIAutonomousData'));
const AIAutonomousDecisionPlatform = React.lazy(() => import('./pages/AIServices/AIAutonomousDecisionPlatform'));
const AIAutonomousDevOps = React.lazy(() => import('./pages/AIServices/AIAutonomousDevOps'));
const AIAutonomousEducationProfessor = React.lazy(() => import('./pages/AIServices/AIAutonomousEducationProfessor'));
const AIAutonomousHealthcarePhysician = React.lazy(() => import('./pages/AIServices/AIAutonomousHealthcarePhysician'));
const AIAutonomousLearningSystem = React.lazy(() => import('./pages/AIServices/AIAutonomousLearningSystem'));
const AIAutonomousLegalCounsel = React.lazy(() => import('./pages/AIServices/AIAutonomousLegalCounsel'));
const AIAutonomousLogistics = React.lazy(() => import('./pages/AIServices/AIAutonomousLogistics'));
const AIAutonomousManufacturing = React.lazy(() => import('./pages/AIServices/AIAutonomousManufacturing'));
const AIAutonomousResearch = React.lazy(() => import('./pages/AIServices/AIAutonomousResearch'));
const AIAutonomousRobotics = React.lazy(() => import('./pages/AIServices/AIAutonomousRobotics'));
const AIAutonomousScientificResearcher = React.lazy(() => import('./pages/AIServices/AIAutonomousScientificResearcher'));
const AIAutonomousSecurity = React.lazy(() => import('./pages/AIServices/AIAutonomousSecurity'));
const AIAutonomousSystemsPlatform = React.lazy(() => import('./pages/AIServices/AIAutonomousSystemsPlatform'));
const AIAutonomousTesting = React.lazy(() => import('./pages/AIServices/AIAutonomousTesting'));
const AIAutonomousVehiclePlatform = React.lazy(() => import('./pages/AIServices/AIAutonomousVehiclePlatform'));
const AIAutonomousVehicles = React.lazy(() => import('./pages/AIServices/AIAutonomousVehicles'));
const AIAutonomousVentureCapitalist = React.lazy(() => import('./pages/AIServices/AIAutonomousVentureCapitalist'));
const AIBiomedicalResearch = React.lazy(() => import('./pages/AIServices/AIBiomedicalResearch'));
const AIBiotechDrugDiscovery = React.lazy(() => import('./pages/AIServices/AIBiotechDrugDiscovery'));
const AIBlockchainGovernance = React.lazy(() => import('./pages/AIServices/AIBlockchainGovernance'));
const AIBrainComputerInterface = React.lazy(() => import('./pages/AIServices/AIBrainComputerInterface'));
const AIBrainInterface = React.lazy(() => import('./pages/AIServices/AIBrainInterface'));
const AIBusinessIntelligenceElite = React.lazy(() => import('./pages/AIServices/AIBusinessIntelligenceElite'));
const AIBusinessIntelligencePro = React.lazy(() => import('./pages/AIServices/AIBusinessIntelligencePro'));
const AIBusinessIntelligenceSuite = React.lazy(() => import('./pages/AIServices/AIBusinessIntelligenceSuite'));
const AIClimatePredictionEngine = React.lazy(() => import('./pages/AIServices/AIClimatePredictionEngine'));
const AIClimatePredictionPlatform = React.lazy(() => import('./pages/AIServices/AIClimatePredictionPlatform'));
const AIClimatePrediction = React.lazy(() => import('./pages/AIServices/AIClimatePrediction'));
const AICodeGenerationEnterprise = React.lazy(() => import('./pages/AIServices/AICodeGenerationEnterprise'));
const AIComplianceAutomation = React.lazy(() => import('./pages/AIServices/AIComplianceAutomation'));
const AIComputerVisionPlatform = React.lazy(() => import('./pages/AIServices/AIComputerVisionPlatform'));
const AIConsciousnessEvolutionPlatform = React.lazy(() => import('./pages/AIServices/AIConsciousnessEvolutionPlatform'));
const AIConsciousnessSimulationPlatform = React.lazy(() => import('./pages/AIServices/AIConsciousnessSimulationPlatform'));
const AIConsciousnessSimulation = React.lazy(() => import('./pages/AIServices/AIConsciousnessSimulation'));
const AIConsciousnessSimulator = React.lazy(() => import('./pages/AIServices/AIConsciousnessSimulator'));
const AIContentCreationRevolution = React.lazy(() => import('./pages/AIServices/AIContentCreationRevolution'));
const AIContentCreation = React.lazy(() => import('./pages/AIServices/AIContentCreation'));
const AIContentFactory = React.lazy(() => import('./pages/AIServices/AIContentFactory'));
const AIContentGenerationAutomation = React.lazy(() => import('./pages/AIServices/AIContentGenerationAutomation'));
const AIContentGenerationPro = React.lazy(() => import('./pages/AIServices/AIContentGenerationPro'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  
  // Add new AI service routes to fix broken links
  { path: '/ai-autonomous-business-manager', element: <AIAutonomousBusinessManager /> },
  { path: '/ai-autonomous-business-platform', element: <AIAutonomousBusinessPlatform /> },
  { path: '/ai-autonomous-code-review', element: <AIAutonomousCodeReview /> },
  { path: '/ai-autonomous-creative-director', element: <AIAutonomousCreativeDirector /> },
  { path: '/ai-autonomous-data', element: <AIAutonomousData /> },
  { path: '/ai-autonomous-decision-platform', element: <AIAutonomousDecisionPlatform /> },
  { path: '/ai-autonomous-devops', element: <AIAutonomousDevOps /> },
  { path: '/ai-autonomous-education-professor', element: <AIAutonomousEducationProfessor /> },
  { path: '/ai-autonomous-healthcare-physician', element: <AIAutonomousHealthcarePhysician /> },
  { path: '/ai-autonomous-learning-system', element: <AIAutonomousLearningSystem /> },
  { path: '/ai-autonomous-legal-counsel', element: <AIAutonomousLegalCounsel /> },
  { path: '/ai-autonomous-logistics', element: <AIAutonomousLogistics /> },
  { path: '/ai-autonomous-manufacturing', element: <AIAutonomousManufacturing /> },
  { path: '/ai-autonomous-research', element: <AIAutonomousResearch /> },
  { path: '/ai-autonomous-robotics', element: <AIAutonomousRobotics /> },
  { path: '/ai-autonomous-scientific-researcher', element: <AIAutonomousScientificResearcher /> },
  { path: '/ai-autonomous-security', element: <AIAutonomousSecurity /> },
  { path: '/ai-autonomous-systems-platform', element: <AIAutonomousSystemsPlatform /> },
  { path: '/ai-autonomous-testing', element: <AIAutonomousTesting /> },
  { path: '/ai-autonomous-vehicle-platform', element: <AIAutonomousVehiclePlatform /> },
  { path: '/ai-autonomous-vehicles', element: <AIAutonomousVehicles /> },
  { path: '/ai-autonomous-venture-capitalist', element: <AIAutonomousVentureCapitalist /> },
  { path: '/ai-biomedical-research', element: <AIBiomedicalResearch /> },
  { path: '/ai-biotech-drug-discovery', element: <AIBiotechDrugDiscovery /> },
  { path: '/ai-blockchain-governance', element: <AIBlockchainGovernance /> },
  { path: '/ai-brain-computer-interface', element: <AIBrainComputerInterface /> },
  { path: '/ai-brain-interface', element: <AIBrainInterface /> },
  { path: '/ai-business-intelligence-elite', element: <AIBusinessIntelligenceElite /> },
  { path: '/ai-business-intelligence-pro', element: <AIBusinessIntelligencePro /> },
  { path: '/ai-business-intelligence-suite', element: <AIBusinessIntelligenceSuite /> },
  { path: '/ai-climate-prediction-engine', element: <AIClimatePredictionEngine /> },
  { path: '/ai-climate-prediction-platform', element: <AIClimatePredictionPlatform /> },
  { path: '/ai-climate-prediction', element: <AIClimatePrediction /> },
  { path: '/ai-code-generation-enterprise', element: <AICodeGenerationEnterprise /> },
  { path: '/ai-compliance-automation', element: <AIComplianceAutomation /> },
  { path: '/ai-computer-vision-platform', element: <AIComputerVisionPlatform /> },
  { path: '/ai-consciousness-evolution-platform', element: <AIConsciousnessEvolutionPlatform /> },
  { path: '/ai-consciousness-simulation-platform', element: <AIConsciousnessSimulationPlatform /> },
  { path: '/ai-consciousness-simulation', element: <AIConsciousnessSimulation /> },
  { path: '/ai-consciousness-simulator', element: <AIConsciousnessSimulator /> },
  { path: '/ai-content-creation-revolution', element: <AIContentCreationRevolution /> },
  { path: '/ai-content-creation', element: <AIContentCreation /> },
  { path: '/ai-content-factory', element: <AIContentFactory /> },
  { path: '/ai-content-generation-automation', element: <AIContentGenerationAutomation /> },
  { path: '/ai-content-generation-pro', element: <AIContentGenerationPro /> },
];

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
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
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;