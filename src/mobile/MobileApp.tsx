
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MobileThemeProvider } from "./theme/MobileThemeProvider";
import { MobileOnboarding } from "./pages/MobileOnboarding";
import { MobileHome } from "./pages/MobileHome";
import { MobileBrowse } from "./pages/MobileBrowse";
import { MobileProjects } from "./pages/MobileProjects";
import { MobileMessages } from "./pages/MobileMessages";
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder";
import { MobileJobPost } from "./pages/MobileJobPost";
import { useAuth } from "@/hooks/useAuth";

export function MobileApp() {
  const { isAuthenticated } = useAuth();
  
  return (
    <MobileThemeProvider>
      <Routes>
        <Route path="/onboarding" element={<MobileOnboarding />} />
        <Route 
          path="/" 
          element={
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />
          } 
        />
        <Route path="/browse" element={<MobileBrowse />} />
        <Route path="/projects" element={<MobileProjects />} />
        <Route path="/inbox" element={<MobileMessages />} />
        <Route path="/resume" element={<MobileResumeBuilder />} />
        <Route path="/post-job" element={<MobileJobPost />} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileThemeProvider>
  );
}
