import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import ErrorBoundary from "../components/ErrorBoundary";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route
        path="/community/category/:categoryId"
        element={
          <ErrorBoundary>
            <ForumCategoryPage />
          </ErrorBoundary>
        }
      />
      <Route
        path="/community/post/:postId"
        element={
          <ErrorBoundary>
            <ForumPostPage />
          </ErrorBoundary>
        }
      />
      <Route
        path="/community/profile/:userId"
        element={
          <ErrorBoundary>
            <CommunityProfilePage />
          </ErrorBoundary>
        }
      />
      
      {/* Protected routes */}
      <Route
        path="/community/create"
        element={
          <ProtectedRoute>
            <ErrorBoundary>
              <CreatePostPage />
            </ErrorBoundary>
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/edit/:postId"
        element={
          <ProtectedRoute>
            <ErrorBoundary>
              <EditPostPage />
            </ErrorBoundary>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default CommunityRoutes;