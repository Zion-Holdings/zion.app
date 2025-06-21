
import { Fragment } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
// Router components removed - convert to Next.js pages structure
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
import WalletDashboard from "@/pages/Wallet";
import OrdersPage from "@/pages/Orders";
import OrderDetailPage from "@/pages/OrderDetail";
import ContractBuilder from "@/pages/ContractBuilder";
import Projects from "@/pages/Projects";
import RewardsPage from "@/pages/Rewards";
import AchievementsPage from "@/pages/Achievements";
import MetricsDashboard from "@/pages/dashboard/MetricsDashboard";
import AICorePage from '@/pages/dashboard/ai-core/AICorePage';

const DashboardRoutes = () => {
  return (
    <Fragment>
      {/* Dashboard Routes */}
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <ClientDashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <TalentDashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <CreatorDashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <Analytics />
      </ProtectedRoute>
      <ProtectedRoute>
        <ProjectMilestones /> {/* Assuming this is located in pages/project/[id]/milestones.tsx */}
      </ProtectedRoute>
      <ProjectDetails /> {/* Located in src/pages/ProjectDetails.tsx */}
      <ProtectedRoute>
        <ProjectRoom /> {/* Assuming this is located in pages/project/[id]/room.tsx */}
      </ProtectedRoute>
      <ProtectedRoute>
        <MessagingInbox />
      </ProtectedRoute>
      <ProtectedRoute>
        <MessagingInbox />
      </ProtectedRoute>
      <ProtectedRoute>
        <Payments />
      </ProtectedRoute>
      <ProtectedRoute>
        <Interviews />
      </ProtectedRoute>
      <ProtectedRoute>
        <Notifications />
      </ProtectedRoute>
      <ProtectedRoute>
        <ApplicationStatusTracker />
      </ProtectedRoute>
      <ProtectedRoute>
        <HiringTracker />
      </ProtectedRoute>
      <ProtectedRoute>
        <Projects />
      </ProtectedRoute>
      <ProtectedRoute>
        <PortfolioBuilder />
      </ProtectedRoute>
      <ProtectedRoute>
        <Referrals />
      </ProtectedRoute>
      <ProtectedRoute>
        <DeveloperPortal />
      </ProtectedRoute>
      <ProtectedRoute>
        <WalletDashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <RewardsPage />
      </ProtectedRoute>
      <ProtectedRoute>
        <AchievementsPage />
      </ProtectedRoute>
      <ProtectedRoute>
        <MetricsDashboard />
      </ProtectedRoute>
      <ProtectedRoute>
        <OrdersPage /> {/* Assuming this is located in pages/orders.tsx */}
      </ProtectedRoute>
      <ProtectedRoute>
        <OrderDetailPage /> {/* Assuming this is located in pages/orders/[orderId].tsx */}
      </ProtectedRoute>
      <ProtectedRoute>
        <DeveloperPortal />
      </ProtectedRoute>
      <ProtectedRoute>
        <ContractBuilder />
      </ProtectedRoute>
      <ProtectedRoute>
        <AICorePage />
      </ProtectedRoute>
    </Fragment>
  );
};

export default DashboardRoutes;
