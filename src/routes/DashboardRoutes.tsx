
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import TalentDashboard from "@/pages/TalentDashboard";
import CreatorDashboard from "@/pages/CreatorDashboard";
import Analytics from "@/pages/Analytics";
import ProjectMilestones from "@/pages/ProjectMilestones";
import ProjectDetails from "@/pages/ProjectDetails";
import ProjectRoom from "@/pages/ProjectRoom";
import MessagingInbox from "@/pages/MessagingInbox";
import Payments from "@/pages/Payments";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";
import HiringTracker from "@/pages/HiringTracker";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
import Referrals from "@/pages/Referrals";
import DeveloperPortal from "@/pages/DeveloperPortal";
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";
import Projects from "@/pages/Projects";
import DisputesPage from "@/pages/dashboard/DisputesPage";
import DisputeDetail from "@/pages/dashboard/DisputeDetailPage";
import UpdatePassword from "@/pages/UpdatePassword";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
import CompanyWorkspace from "@/pages/CompanyWorkspace";
import EnterpriseAdmin from "@/pages/EnterpriseAdmin";
import EnterpriseBilling from "@/pages/EnterpriseBilling";
import EnterprisePlans from "@/pages/EnterprisePlans";
import EnterpriseWorkspace from "@/pages/EnterpriseWorkspace";
import EnterpriseSettings from "@/pages/EnterpriseSettings";
import EnterpriseUsers from "@/pages/EnterpriseUsers";

const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/client-dashboard" 
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/talent-dashboard" 
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/creator-dashboard" 
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/analytics" 
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/project/:projectId/milestones" 
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/project/:projectId"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:projectId/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/inbox" 
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/payments" 
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/interviews" 
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/notifications" 
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/applications/track" 
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/disputes"
        element={
          <ProtectedRoute>
            <DisputesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/disputes/:disputeId"
        element={
          <ProtectedRoute>
            <DisputeDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:projectId/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/referrals" 
        element={
          <ProtectedRoute>
            <Referrals />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/developers"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/api-access"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/contract-builder"
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/update-password"
        element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } 
      />
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
      <Route
        path="/company-workspace"
        element={
          <ProtectedRoute>
            <CompanyWorkspace />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-admin"
        element={
          <ProtectedRoute>
            <EnterpriseAdmin />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-billing"
        element={
          <ProtectedRoute>
            <EnterpriseBilling />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-plans"
        element={
          <ProtectedRoute>
            <EnterprisePlans />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-workspace"
        element={
          <ProtectedRoute>
            <EnterpriseWorkspace />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-settings"
        element={
          <ProtectedRoute>
            <EnterpriseSettings />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/enterprise-users"
        element={
          <ProtectedRoute>
            <EnterpriseUsers />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default DashboardRoutes;
