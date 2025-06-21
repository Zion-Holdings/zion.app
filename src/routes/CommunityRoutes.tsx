<<<<<<< HEAD
// Routes have been converted to Next.js pages structure
// This component is no longer needed since Next.js uses file-based routing
=======
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
// Router components removed - convert to Next.js pages structure
import CommunityPage from "@/pages/CommunityPage";
import { CommunityProvider } from "@/context";
import ForumCategoryPage from "@/pages/ForumCategoryPage";
import ForumPostPage from "@/pages/ForumPostPage";
import CreatePostPage from "@/pages/CreatePostPage";
import EditPostPage from "@/pages/EditPostPage";
import CommunityProfilePage from "@/pages/CommunityProfilePage";
import NationDetailPage from '@/pages/community/NationDetailPage';
>>>>>>> abd3ab5905cc1c71bdb81adf19825162f921e7a5

const CommunityRoutes = () => {
  return null;
};

export default CommunityRoutes;
