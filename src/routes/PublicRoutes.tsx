import { Route, Routes } from "react-router-dom";
import WhitepaperViewPage from "@/pages/WhitepaperViewPage";
// Generic catch-all 404 page for public routes
import NotFound from "@/pages/NotFound";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/whitepaper/view/:id" element={<WhitepaperViewPage />} />
      {/* Add other public routes here as needed */}
      {/* Fallback for /whitepaper/view/ without ID or other specific public sub-routes */}
      <Route path="/whitepaper/view/*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
