import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import MoreTalentsPage from "../pages/MoreTalentsPage";
import AdditionalTalentsPage from "../pages/AdditionalTalentsPage";
import TalentDetail from "../pages/TalentDetail";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import PublicTalentProfilePage from "../pages/PublicTalentProfilePage"; // Updated import

const TalentRoutes = () => {
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />
      <Route path="/more-talents" element={<MoreTalentsPage />} />
      <Route path="/additional-talents" element={<AdditionalTalentsPage />} />
      <Route path="/talent/:slug" element={<ErrorBoundary><TalentDetail /></ErrorBoundary>} />
      <Route 
        path="/saved-talents" 
        element={
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/create-talent-profile" 
        element={
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        } 
      />
      <Route path="/profile/:id" element={<PublicTalentProfilePage />} /> {/* Updated component */}
    </Routes>
  );
};

export default TalentRoutes;