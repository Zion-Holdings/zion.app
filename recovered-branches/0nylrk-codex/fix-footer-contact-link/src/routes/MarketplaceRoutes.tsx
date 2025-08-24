
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Marketplace from "@/pages/Marketplace";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import Featured from "@/pages/Featured";
import ListingDetail from "@/pages/ListingDetail";
import EquipmentPage from "@/pages/EquipmentPage";
import EquipmentDetail from "@/pages/EquipmentDetail";
import PostJob from "@/pages/PostJob";
import JobDetails from "@/pages/JobDetails";
import PublishProduct from "@/pages/PublishProduct";
import ServicesPage from "@/pages/ServicesPage";
import RequestQuote from "@/pages/RequestQuote";
import AIMatcher from "@/pages/AIMatcher";
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator";
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage";
import SearchPage from "@/pages/SearchPage";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

const MarketplaceRoutes = () => {
  return (
    <Routes>
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategoryDetail />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/equipment/:id" element={<EquipmentDetail />} />
      
      {/* Job Routes */}
      <Route
        path="/post-job" 
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        } 
      />
      <Route path="/jobs/:id" element={<JobDetails />} />
      
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />
      <Route path="/match" element={<AIMatcher />} />
      
      {/* Creator Routes */}
      <Route 
        path="/publish" 
        element={
          <ProtectedRoute>
            <PublishProduct />
          </ProtectedRoute>
        } 
      />
      
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
      <Route path="/request-quote" element={<RequestQuote />} />
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />
      
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />
      
      {/* Project Room Routes */}
      <Route 
        path="/project/:projectId" 
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        } 
      />
      
      {/* Video Call Routes */}
      <Route 
        path="/call/:roomId" 
        element={
          <ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default MarketplaceRoutes;
