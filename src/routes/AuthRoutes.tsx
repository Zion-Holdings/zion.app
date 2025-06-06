
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { LoginForm } from '@/components/auth/login';
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback';
// import Signup from "@/pages/Signup"; // Replaced with SimpleSignup
import SimpleSignup from '@/pages/SimpleSignup';
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
      <Route path="/login" element={<ErrorBoundary FallbackComponent={LoginErrorFallback}><LoginForm /></ErrorBoundary>} />
      <Route path="/signup" element={<SimpleSignup />} />
      <Route path="/register" element={<Navigate to="/signup" replace />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
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
