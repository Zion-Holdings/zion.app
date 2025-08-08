import React from 'react';
import { ProfileBadges } from '../../components/ui/ProfileBadges';
import type { KycProfile } from '../../utils/kyc';

export default function TalentProfilePage() {
  const demoProfile: KycProfile = {
    userId: 'demo-talent',
    role: 'talent',
    documents: [],
    status: 'approved',
    amlStatus: 'clear',
    createdAt: new Date().toISOString(),
    lastUpdatedAt: new Date().toISOString(),
    auditTrail: [],
    fullLegalName: 'Demo Talent',
  };
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Talent Profile</h1>
      <ProfileBadges profile={demoProfile} />
    </main>
  );
}