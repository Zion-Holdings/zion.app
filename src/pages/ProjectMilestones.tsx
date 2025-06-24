
import React from 'react';
import { SEO } from '@/components/SEO';
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
        <ProjectMilestonesContent />
      </>
    </ProtectedRoute>
  );
}

export default ProjectMilestones;
