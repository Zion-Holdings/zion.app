import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Additional routes from the remote branch
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
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
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const AboutPage = React.lazy(() => import('./pages/About'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const GreenITPage = React.lazy(() => import('./pages/GreenIT'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const AllServicesPage = React.lazy(() => import('./pages/AllServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServices'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <div className="App">
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Additional routes */}
                <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
                <Route path="/expanded-services" element={<ExpandedServicesPage />} />
                <Route path="/services-overview" element={<ServicesOverviewPage />} />
                <Route path="/ai-matcher" element={<AIMatcherPage />} />
                <Route path="/talent-directory" element={<TalentDirectory />} />
                <Route path="/talents" element={<TalentsPage />} />
                <Route path="/equipment" element={<EquipmentPage />} />
                <Route path="/equipment/:id" element={<EquipmentDetail />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                <Route path="/open-app" element={<OpenAppRedirect />} />
                <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                <Route path="/request-quote" element={<RequestQuotePage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/green-it" element={<GreenITPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/all-services" element={<AllServicesPage />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-services-showcase" element={<AIServicesShowcase />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
          <SonnerToaster />
        </div>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;
