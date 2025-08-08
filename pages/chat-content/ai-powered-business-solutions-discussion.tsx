import React from 'react';
import RequestInterviewButton from '../../components/interviews/RequestInterviewButton';

export default function ChatThreadDemo() {
  const clientId = typeof window !== 'undefined' ? (localStorage.getItem('demoUserId') || 'client-1') : 'client-1';
  const talentId = 'talent-1';
  return (
    <div className="space-y-4">
      <div className="enhanced-card">
        <h1 className="text-xl font-semibold">AI Business Solutions Discussion</h1>
        <p className="text-sm text-gray-600">Thread content here…</p>
      </div>
      <RequestInterviewButton clientId={clientId} talentId={talentId} />
    </div>
  );
}