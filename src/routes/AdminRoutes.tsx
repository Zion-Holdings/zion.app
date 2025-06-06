
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Admin Pages
import QuoteManager from "@/pages/admin/QuoteManager";
import ReviewsModeration from "@/pages/admin/ReviewsModeration";
import WhitelabelManager from "@/pages/admin/WhitelabelManager";
import PartnerManager from "@/pages/admin/PartnerManager";
import AppMetadataManager from "@/pages/admin/AppMetadataManager";
import SupportRequests from "@/pages/admin/SupportRequests";
import FraudDetection from "@/pages/admin/FraudDetection";
import ListingModeration from "@/pages/admin/ListingModeration";
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";
import WhitepaperGeneratorPage from "@/pages/WhitepaperGeneratorPage";
import KycDashboard from "@/pages/admin/KycDashboard";
import ZionBrain from "@/pages/admin/ZionBrain";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/quotes"
        element={
          <ProtectedRoute adminOnly={true}>
            <QuoteManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>
            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>
            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>
            <PartnerManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>
            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>
            <SupportRequests />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>
            <FraudDetection />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/moderation"
        element={
          <ProtectedRoute adminOnly={true}>
            <ListingModeration />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>
            <TokenManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/integrations"
        element={
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/kyc"
        element={
          <ProtectedRoute adminOnly={true}>
            <KycDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/whitepaper-generator"
        element={
          <ProtectedRoute adminOnly={true}>
            <WhitepaperGeneratorPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/zion-brain"
        element={
          <ProtectedRoute adminOnly={true}>
            <ZionBrain />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
