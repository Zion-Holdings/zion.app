import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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
const Home = React.lazy(() => import('./pages/Home'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
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
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const PostJob = React.lazy(() => import('./pages/PostJob'));
const JobDetails = React.lazy(() => import('./pages/JobDetails'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const PublishProduct = React.lazy(() => import('./pages/PublishProduct'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const ServiceDescriptionGenerator = React.lazy(() => import('./pages/ServiceDescriptionGenerator'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenterPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Terms = React.lazy(() => import('./pages/Terms'));
const ProjectRoom = React.lazy(() => import('./pages/ProjectRoom'));
const VideoCall = React.lazy(() => import('./pages/VideoCall'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Featured = React.lazy(() => import('./pages/Featured'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const MobileAppPage = React.lazy(() => import('./pages/MobileAppPage'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ProfileDetail = React.lazy(() => import('./pages/ProfileDetail'));
const TalentProfilePage = React.lazy(() => import('./pages/TalentProfilePage'));
const TalentOnboarding = React.lazy(() => import('./pages/TalentOnboarding'));
const CreateTalentProfile = React.lazy(() => import('./pages/CreateTalentProfile'));
const CreateServiceProfile = React.lazy(() => import('./pages/CreateServiceProfile'));
const ServiceOnboarding = React.lazy(() => import('./pages/ServiceOnboarding'));
const SavedTalentsPage = React.lazy(() => import('./pages/SavedTalentsPage'));
const Referrals = React.lazy(() => import('./pages/Referrals'));
const Wallet = React.lazy(() => import('./pages/Wallet'));
const Payments = React.lazy(() => import('./pages/Payments'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const MessagingInbox = React.lazy(() => import('./pages/MessagingInbox'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder'));
const HiringTracker = React.lazy(() => import('./pages/HiringTracker'));
const Interviews = React.lazy(() => import('./pages/Interviews'));
const ContentGenerator = React.lazy(() => import('./pages/ContentGenerator'));
const TranslationManager = React.lazy(() => import('./pages/TranslationManager'));
const ContractBuilder = React.lazy(() => import('./pages/ContractBuilder'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage'));
const ForumCategoryPage = React.lazy(() => import('./pages/ForumCategoryPage'));
const ForumPostPage = React.lazy(() => import('./pages/ForumPostPage'));
const CommunityProfilePage = React.lazy(() => import('./pages/CommunityProfilePage'));
const CompanyWorkspace = React.lazy(() => import('./pages/CompanyWorkspace'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const ProjectMilestones = React.lazy(() => import('./pages/ProjectMilestones'));
const Onboarding = React.lazy(() => import('./pages/Onboarding'));
const UpdatePassword = React.lazy(() => import('./pages/UpdatePassword'));
const Unauthorized = React.lazy(() => import('./pages/Unauthorized'));
const Index = React.lazy(() => import('./pages/Index'));
const PaymentSuccess = React.lazy(() => import('./pages/payment-success'));
const PaymentCanceled = React.lazy(() => import('./pages/payment-canceled'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings'));
const ClientDashboard = React.lazy(() => import('./pages/ClientDashboard'));
const TalentDashboard = React.lazy(() => import('./pages/TalentDashboard'));
const CreatorDashboard = React.lazy(() => import('./pages/CreatorDashboard'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/:slug', element: <CategoryDetail /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/post-job', element: <PostJob /> },
  { path: '/jobs/:id', element: <JobDetails /> },
  { path: '/publish', element: <PublishProduct /> },
  { path: '/service-description-generator', element: <ServiceDescriptionGenerator /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/project/:projectId', element: <ProjectRoom /> },
  { path: '/call/:roomId', element: <VideoCall /> },
  { path: '/listing/:id', element: <ListingDetail /> },
  { path: '/featured', element: <Featured /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/mobile-app', element: <MobileAppPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/help-center', element: <HelpCenterPage /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/careers', element: <Careers /> },
  { path: '/terms', element: <Terms /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/about', element: <About /> },
  { path: '/profile', element: <Profile /> },
  { path: '/profile/:id', element: <ProfileDetail /> },
  { path: '/talent/:id', element: <TalentProfilePage /> },
  { path: '/talent-onboarding', element: <TalentOnboarding /> },
  { path: '/create-talent-profile', element: <CreateTalentProfile /> },
  { path: '/create-service-profile', element: <CreateServiceProfile /> },
  { path: '/service-onboarding', element: <ServiceOnboarding /> },
  { path: '/saved-talents', element: <SavedTalentsPage /> },
  { path: '/referrals', element: <Referrals /> },
  { path: '/wallet', element: <Wallet /> },
  { path: '/payments', element: <Payments /> },
  { path: '/notifications', element: <Notifications /> },
  { path: '/messages', element: <MessagingInbox /> },
  { path: '/inbox', element: <MessagingInbox /> },
  { path: '/portfolio', element: <PortfolioBuilder /> },
  { path: '/hiring-tracker', element: <HiringTracker /> },
  { path: '/interviews', element: <Interviews /> },
  { path: '/content-generator', element: <ContentGenerator /> },
  { path: '/translation-manager', element: <TranslationManager /> },
  { path: '/contract-builder', element: <ContractBuilder /> },
  { path: '/create-post', element: <CreatePostPage /> },
  { path: '/edit-post/:id', element: <EditPostPage /> },
  { path: '/forum/category/:slug', element: <ForumCategoryPage /> },
  { path: '/forum/post/:id', element: <ForumPostPage /> },
  { path: '/community/profile/:id', element: <CommunityProfilePage /> },
  { path: '/company-workspace', element: <CompanyWorkspace /> },
  { path: '/projects', element: <Projects /> },
  { path: '/project/:projectId', element: <ProjectDetails /> },
  { path: '/project/:projectId/milestones', element: <ProjectMilestones /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/update-password', element: <UpdatePassword /> },
  { path: '/unauthorized', element: <Unauthorized /> },
  { path: '/index', element: <Index /> },
  { path: '/payment-success', element: <PaymentSuccess /> },
  { path: '/payment-canceled', element: <PaymentCanceled /> },
  { path: '/account-settings', element: <AccountSettings /> },
  { path: '/client-dashboard', element: <ClientDashboard /> },
  { path: '/talent-dashboard', element: <TalentDashboard /> },
  { path: '/creator-dashboard', element: <CreatorDashboard /> },
  { path: '/dashboard', element: <Dashboard /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
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
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;