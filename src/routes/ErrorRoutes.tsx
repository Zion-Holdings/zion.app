
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
