import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";

const TalentRoutes = () => {
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />
      <Route path="/talent/:id" element={<TalentProfilePage />} />
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
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
};

export default TalentRoutes;