import React, { useState, useEffect } from 'react';
import { TalentProfile } from '@/components/profile/TalentProfile';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
import type { TalentProfile as TalentProfileType } from '@/types/talent';
import { TALENT_PROFILES } from '@/data/talentData';

interface TalentPageProps {
  talent: TalentProfileType | null;
  id: string;
}

export async function getServerSideProps({ params }: { params: { id?: string } }) {
  const rawId = params?.id ?? '';
  const normalized = normalizeId(rawId);
  const talent = TALENT_PROFILES.find(t => t.id === normalized) || null;
  return { props: { talent, id: rawId } };
}

function normalizeId(id: string): string {
  const match = id.match(/^talent-(\d+)/);
  if (match) {
    return `t-${match[1].padStart(3, '0')}`;
  }
  return id;
}

export const GET_TALENT_PROFILE = `query GetTalentProfile($id: ID!) {\n  talentProfile(id: $id) {\n    id\n    full_name\n  }\n}`;

export default function TalentProfileSSRPage({ talent, id }: TalentPageProps) {
  const [profile, setProfile] = useState<TalentProfileType | null>(talent);
  const [loading, setLoading] = useState(!talent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!talent) {
      setError('Profile not found');
      setLoading(false);
    }
  }, [talent]);

  if (loading) return <ProfileLoadingState />;
  if (error || !profile) return <ProfileErrorState error={error} />;

  return <TalentProfile profile={profile} onRequestHire={() => {}} />;
}
