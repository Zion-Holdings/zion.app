
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/legal/PrivacyPolicy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudy from "@/pages/CaseStudy";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchResultsPage from "@/pages/SearchResultsPage";
import { SitemapPage } from "@/components/SitemapPage";
import Sitemap from "@/pages/Sitemap";
import Terms from "@/pages/Terms";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
import Philosophy from "@/pages/Philosophy";

const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      
      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/support" element={<HelpCenterPage />} />
      
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Legacy paths for older links */}
      <Route path="/content/blog" element={<Blog />} />
      <Route path="/content/blog/:slug" element={<BlogPost />} />

      {/* Case Study Routes */}
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudy />} />
      
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />

      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />

      {/* Legal Pages */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/constitution" element={<Philosophy />} />

      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />
      
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />
      
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />

      {/* Global Search Route */}
      <Route path="/search" element={<SearchResultsPage />} />
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
};

export default ContentRoutes;
