import { Fragment } from "react";
import Login from "@/pages/Login";
// Router components removed - convert to Next.js pages structure
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import ResetPassword from "@/pages/ResetPassword";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
import { useRouter } from 'next/navigation';

const AuthRoutes = () => {
  const router = useRouter();

  return (
    <>
      {/* Auth Routes */}
      <Login />
      <Signup />
      {/* <Route path="/register" element={<Navigate href="/signup" replace />} /> */}
      <ForgotPassword />
      <ResetPassword />
      <UpdatePassword />

      {/* Onboarding Routes */}

      
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      

      
        <ProtectedRoute>
          <TalentOnboarding />
        </ProtectedRoute>
      

      
        <ProtectedRoute>
          <ServiceOnboarding />
        </ProtectedRoute>
      
    </>
  );
};

export default AuthRoutes;
