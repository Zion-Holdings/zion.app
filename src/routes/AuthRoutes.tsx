
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import ResetPassword from "@/pages/ResetPassword";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Navigate to="/signup" replace />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      
      {/* Onboarding Routes */}
      <Route 
        path="/onboarding" 
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/talent-onboarding" 
        element={
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/service-onboarding" 
        element={
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AuthRoutes;
