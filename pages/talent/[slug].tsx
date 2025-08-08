import { useRouter } from 'next/router';
import React from 'react';
import RequestInterviewButton from '../../components/interviews/RequestInterviewButton';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const talentId = slug || 'talent-1';
  const clientId = typeof window !== 'undefined' ? (localStorage.getItem('demoUserId') || 'client-1') : 'client-1';

  return (
    <div className="space-y-4">
      <div className="enhanced-card">
        <h1 className="text-2xl font-bold">Talent Profile: {talentId}</h1>
        <p className="text-sm text-gray-600">Expertise summary and details go here.</p>
      </div>
      <div>
        <RequestInterviewButton clientId={clientId} talentId={talentId} />
      </div>
    </div>
  );
}