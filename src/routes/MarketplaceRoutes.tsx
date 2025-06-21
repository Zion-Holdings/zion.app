import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Routes, Route } from 'react-router-dom';
// Router components removed - convert to Next.js pages structure
import { MarketplaceErrorBoundary } from "@/components/MarketplaceErrorBoundary";
import { MarketplaceLayout } from "@/components/MarketplaceLayout";
import Marketplace from "@/pages/Marketplace";
import Categories from "@/pages/Categories";
import CategoryPage from "@/pages/CategoryPage";
import Featured from "@/pages/Featured";
import ListingDetail from "@/pages/ListingDetail";
import EquipmentPage from "@/pages/EquipmentPage";
import EquipmentDetail from "@/pages/EquipmentDetail";
import EquipmentRecommendations from "@/pages/EquipmentRecommendations";
import PostJob from "@/pages/PostJob";
import JobDetails from "@/pages/JobDetails";
import PublishProduct from "@/pages/PublishProduct";
import ServicesPage from "@/pages/ServicesPage";
import RequestQuote from "@/pages/RequestQuote";
import RequestService from "@/pages/RequestService";
import AIMatcher from "@/pages/AIMatcher";
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator";
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage";
import SearchResultsPage from "@/pages/SearchResultsPage";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
import Checkout from "@/pages/Checkout";
import PaymentSuccess from "@/pages/payment-success";
import NewProductsPage from "@/pages/NewProductsPage";
import NewServicesPage from "@/pages/NewServicesPage";
import InnovationPage from "@/pages/InnovationPage";
import CartPage from "@/pages/Cart";
import OrderConfirmationPage from '@/pages/marketplace/OrderConfirmationPage';
import ProductsList from '@/pages/ProductsList';

const MarketplaceRoutes = () => {
  return (
    <MarketplaceErrorBoundary>
      <MarketplaceLayout>
        <Routes>
          {/* Marketplace Routes */}
          <Route index element={<Marketplace />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="featured" element={<Featured />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="products" element={<ProductsList />} />
          
          {/* Equipment Routes */}
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="equipment/recommendations" element={<EquipmentRecommendations />} />
          <Route path="equipment/:id" element={<EquipmentDetail />} />
          <Route path="new-products" element={<NewProductsPage />} />
          <Route path="new-services" element={<NewServicesPage />} />
          
          {/* Job Routes */}
          <Route
            path="post-job"
            element={
              <ProtectedRoute>
                <PostJob />
              </ProtectedRoute>
            }
          />
          <Route path="jobs/:id" element={<JobDetails />} />
          
          {/* AI Matcher Routes */}
          <Route path="ai-matcher" element={<AIMatcher />} />
          <Route path="match" element={<AIMatcher />} />
          
          {/* Creator Routes */}
          <Route
            path="publish"
            element={
              <ProtectedRoute>
                <PublishProduct />
              </ProtectedRoute>
            }
          />
          
          {/* Service Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
          <Route path="/it-onsite-services/:country" element={<ITOnsiteServicesPage />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/request-service" element={<RequestService />} />
          <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />
          
          {/* Search Route */}
          <Route path="search" element={<SearchResultsPage />} />

          {/* Cart Route */}
          <Route path="/cart" element={<CartPage />} />

          {/* Checkout Route - accessible to guests */}
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<PaymentSuccess />} />
          
          {/* Project Room Routes */}
          <Route
            path="project/:projectId"
            element={
              <ProtectedRoute>
                <ProjectRoom />
              </ProtectedRoute>
            }
          />
          
          {/* Video Call Routes */}
          <Route
            path="call/:roomId"
            element={
              <ProtectedRoute>
                <VideoCall />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-confirmation/:orderId"
            element={
              <ProtectedRoute> {/* Or remove ProtectedRoute if not needed */}
                <OrderConfirmationPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MarketplaceLayout>
    </MarketplaceErrorBoundary>
  );
};

export default MarketplaceRoutes;
