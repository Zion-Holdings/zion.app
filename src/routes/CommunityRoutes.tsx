import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import CommunityPage from "@/pages/CommunityPage";
import { CommunityProvider } from "@/context";
import ForumCategoryPage from "@/pages/ForumCategoryPage";
import ForumPostPage from "@/pages/ForumPostPage";
import CreatePostPage from "@/pages/CreatePostPage";
import EditPostPage from "@/pages/EditPostPage";
import CommunityProfilePage from "@/pages/CommunityProfilePage";
import NationDetailPage from '@/pages/community/NationDetailPage';

const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/community"
        element={
          <CommunityProvider>
            <CommunityPage />
          </CommunityProvider>
        }
      />
      <Route
        path="/forum"
        element={
          <CommunityProvider>
            <CommunityPage />
          </CommunityProvider>
        }
      />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />

      {/* Protected routes */}
      <Route
        path="/community/new"
        element={
          <ProtectedRoute>
            <Navigate to="/community?new=1" replace />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/create"
        element={
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/edit/:postId"
        element={
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nations/:slug"
        element={
          <ProtectedRoute> {/* Or remove ProtectedRoute if not needed */}
            <NationDetailPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default CommunityRoutes;