
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/legal/PrivacyPolicy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchPage from "@/pages/SearchPage";
import { SitemapPage } from "@/components/SitemapPage";
import Sitemap from "@/pages/Sitemap";
import Terms from "@/pages/Terms";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

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
      
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />

      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />

      {/* Legal Pages */}
      <Route path="/terms" element={<Terms />} />

      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />
      
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />
      
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />

      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
};

export default ContentRoutes;
