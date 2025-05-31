import { Route, Routes } from "react-router-dom";
import WhitepaperViewPage from "@/pages/WhitepaperViewPage";
import NotFoundPage from "@/pages/NotFoundPage"; // Assuming a generic 404 page exists

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/whitepaper/view/:id" element={<WhitepaperViewPage />} />
      {/* Add other public routes here as needed */}
      {/* Fallback for /whitepaper/view/ without ID or other specific public sub-routes */}
      <Route path="/whitepaper/view/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
