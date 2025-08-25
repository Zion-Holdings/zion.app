import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { AppLayout } from "./layout/AppLayout";

// Lazy load pages with proper error boundaries
const Home = React.lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading page</div> })));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher').catch(() => ({ default: () => <div>Error loading page</div> })));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory').catch(() => ({ default: () => <div>Error loading page</div> })));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail').catch(() => ({ default: () => <div>Error loading page</div> })));
const Analytics = React.lazy(() => import('./pages/Analytics').catch(() => ({ default: () => <div>Error loading page</div> })));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const Categories = React.lazy(() => import('./pages/Categories').catch(() => ({ default: () => <div>Error loading page</div> })));
const Blog = React.lazy(() => import('./pages/Blog').catch(() => ({ default: () => <div>Error loading page</div> })));
const BlogPost = React.lazy(() => import('./pages/BlogPost').catch(() => ({ default: () => <div>Error loading page</div> })));
const PartnersPage = React.lazy(() => import('./pages/Partners').catch(() => ({ default: () => <div>Error loading page</div> })));
const Login = React.lazy(() => import('./pages/Login').catch(() => ({ default: () => <div>Error loading page</div> })));
const Signup = React.lazy(() => import('./pages/Signup').catch(() => ({ default: () => <div>Error loading page</div> })));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect').catch(() => ({ default: () => <div>Error loading page</div> })));
const ContactPage = React.lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading page</div> })));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI').catch(() => ({ default: () => <div>Error loading page</div> })));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote').catch(() => ({ default: () => <div>Error loading page</div> })));

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <AppLayout>
          <React.Suspense fallback={<PageLoader />}>
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
            </Routes>
          </React.Suspense>
        </AppLayout>
        <Toaster />
        <SonnerToaster />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;