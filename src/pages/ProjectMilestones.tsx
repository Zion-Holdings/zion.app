
import React from 'react';
import { SEO } from '@/components/SEO';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';

function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>
        <SEO 
          title="Payment Milestones | Zion AI Marketplace" 
          description="Manage project payment milestones and deliverables"
        />
        <AppHeader />
        <ProjectMilestonesContent />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default ProjectMilestones;
