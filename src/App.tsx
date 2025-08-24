import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ToasterProvider } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const AllServicesPage = React.lazy(() => import('./pages/AllServicesPage'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const AIMatcher = React.lazy(() => import('./pages/AIMatcher'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Categories = React.lazy(() => import('./pages/Categories'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const Partners = React.lazy(() => import('./pages/Partners'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));

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
        <ToasterProvider>
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
                  <Route path="/ai-services-showcase" element={<AIServicesShowcase />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                  <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                  <Route path="/all-services" element={<AllServicesPage />} />
                  <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                  <Route path="/ai-matcher" element={<AIMatcher />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/equipment" element={<EquipmentPage />} />
                  <Route path="/equipment/:id" element={<EquipmentDetail />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/talent-directory" element={<TalentDirectory />} />
                  <Route path="/talents" element={<TalentsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ScrollToTop />
            <SonnerToaster />
          </div>
        </ToasterProvider>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;
