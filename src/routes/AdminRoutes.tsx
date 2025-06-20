
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
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
import MetricsDashboard from "@/pages/dashboard/MetricsDashboard";
import FounderBackupVault from "@/pages/FounderBackupVault";

const AdminRoutes = () => {
  // Placeholder component - admin routes are handled via Next.js pages structure
  return null;
};

export default AdminRoutes;
