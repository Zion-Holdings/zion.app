import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnhancedLoading } from "./components/ui/enhanced-loading";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import { ToastContainer } from "./components/ui/toast";
import { motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ExpandedServicesPage = lazy(() => import('./pages/ServicesShowcase'));
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesComparisonPage = lazy(() => import('./pages/ServicesComparison'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = lazy(() => import('./pages/EquipmentDetail'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const Categories = lazy(() => import('./pages/Categories'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices'));
const InnovativeServices = lazy(() => import('./pages/InnovativeServices'));

// Enhanced loading fallback
const EnhancedLoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <EnhancedLoading size="xl" text="Loading Zion Tech Group..." variant="pulse" className="mb-8"/>
      <motion.div
        className="mt-8 text-zion-slate-light text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Please wait while we prepare your experience...
      </motion.div>
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
            <MainNavigation />
            
            {/* Main Content with enhanced Suspense */}
            <main className="pt-20 min-h-screen">
              <Suspense fallback={<EnhancedLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services-showcase" element={<ExpandedServicesPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityServicesPage />} />
                  <Route path="/services-comparison" element={<ServicesComparisonPage />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                  
                  {/* Enhanced service routes */}
                  <Route path="/micro-saas-services" element={<MicroSaasServices />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                  <Route path="/innovative-services" element={<InnovativeServices />} />
                  
                  {/* Additional routes */}
                  <Route path="/match" element={<AIMatcherPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/talent" element={<TalentDirectory />} />
                  <Route path="/talents" element={<TalentsPage />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/equipment" element={<EquipmentPage />} />
                  <Route path="/equipment/:id" element={<EquipmentDetail />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                  <Route path="/open-app" element={<OpenAppRedirect />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                  <Route path="/hire-ai" element={<ZionHireAI />} />
                  <Route path="/request-quote" element={<RequestQuotePage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  
                  {/* Our enhanced service routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
};

export default App;