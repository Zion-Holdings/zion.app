import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ServicesShowcase'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparison'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
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
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const InnovativeServices = React.lazy(() => import('./pages/InnovativeServices'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServices /> },
  { path: '/innovative-services', element: <InnovativeServices /> },
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
  { path: '/services', element: <ServicesPage /> },
  { path: '/services-showcase', element: <ExpandedServicesPage /> },
  { path: '/cybersecurity', element: <CybersecurityServicesPage /> },
  { path: '/services-comparison', element: <ServicesComparisonPage /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

const App = () => {
  return (
<<<<<<< HEAD
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <FuturisticBackground />
        <Header />
        <main className="min-h-screen pt-16 lg:pt-20">
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
=======
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={false} onClose={() => {}} />
              
              {/* Main Content with enhanced Suspense */}
              <main className="ml-64 pt-20 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/services-showcase" element={<ServicesShowcase />} />
                    <Route path="/match" element={<AIMatcherPage />} />
                    <Route path="/talent" element={<TalentDirectory />} />
                    <Route path="/talents" element={<TalentsPage />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/comprehensive-services" element={<Services />} />
                    <Route path="/services-comparison" element={<Services />} />
                    <Route path="/it-onsite-services" element={<Services />} />
                    
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
                    
                    {/* New enhanced page routes */}
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/webinars" element={<Webinars />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
              
              {/* Enhanced Accessibility Panel */}
              <EnhancedAccessibility />
              
              {/* AI Chatbot - Always Available */}
              <AIChatbot />
              
              {/* Collaborative Text Editor - Development Mode */}
              {import.meta.env.DEV && (
                <div className="fixed bottom-24 left-6 z-40 w-96">
                  <CollaborativeTextEditor
                    roomId="dev-editor"
                    userId="dev-user"
                    userName="Developer"
                    initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                    enableAI={true}
                    enableCollaboration={true}
                    enableVersioning={true}
                  />
                </div>
              )}
              
              {/* AI Code Generator - Development Mode */}
              {import.meta.env.DEV && (
                <div className="fixed bottom-24 right-6 z-40 w-96">
                  <AICodeGenerator />
                </div>
              )}
              
              {/* Development Dashboards */}
              {import.meta.env.DEV && (
                <>
                  {/* Performance Dashboard */}
                  <div className="fixed top-4 left-4 z-40">
                    <PerformanceDashboard />
                  </div>
                  
                  {/* Analytics Dashboard */}
                  <div className="fixed top-4 right-4 z-40">
                    <AnalyticsDashboard />
                  </div>
                  
                  {/* Enterprise Dashboard */}
                  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                    <EnterpriseDashboard />
                  </div>
                  
                  {/* Security & Compliance Dashboard */}
                  <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                    <SecurityComplianceDashboard />
                  </div>
                  
                  {/* Machine Learning Dashboard */}
                  <div className="fixed top-4 right-4 z-40">
                    <MachineLearningDashboard />
                  </div>
                </>
              )}
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-47ca
  );
};

export default App;