import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewForm from '../../components/reviews/ReviewForm';
import { findProjectById } from '../../utils/dataStore';

type Props = {
  projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  valid: boolean;
  reason?: string;
};

const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {
  if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
        <p className="text-sm text-gray-600">{reason || 'You cannot submit a review for this project.'}</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>
      <ReviewForm initial={{ projectId, fromRole, fromId }} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projectId } = ctx.query as { projectId: string };
  const { role, fromId } = ctx.query as { role?: 'client' | 'talent'; fromId?: string };

  if (!projectId || !role || !fromId) {
    return { props: { projectId: projectId || '', fromRole: role || 'client', fromId: fromId || '', valid: false, reason: 'Missing parameters' } };
  }

  const project = await findProjectById(projectId);
  if (!project) {
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project not found' } } as any;
  }
  if (project.status !== 'Completed') {
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project is not completed yet' } } as any;
  }

  const expectedFromId = role === 'client' ? project.clientId : project.talentSlug;
  const valid = expectedFromId === fromId;

  return { props: { projectId, fromRole: role, fromId, valid, reason: valid ? null : 'Invalid reviewer for this project' } } as any;
};

export default ReviewSubmitPage;