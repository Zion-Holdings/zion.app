// Routes have been converted to Next.js pages structure
// This component is no longer needed since Next.js uses file-based routing

const DashboardRoutes = () => {
<<<<<<< HEAD
  return null;
=======
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
>>>>>>> abd3ab5905cc1c71bdb81adf19825162f921e7a5
};

export default DashboardRoutes;
