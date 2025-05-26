
import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';

function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>
        <NextSeo 
          title="Payment Milestones | Zion AI Marketplace" 
          description="Manage project payment milestones and deliverables"
        />
        <ProjectMilestonesContent />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default ProjectMilestones;
