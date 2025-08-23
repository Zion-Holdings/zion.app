import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useParams
import { SEO } from '@/components/SEO';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
import { ProfileCard } from '@/components/profile/ProfileCard';
import { PortfolioList } from '@/components/profile/PortfolioList';
import { ProfileContact } from '@/components/profile/ProfileContact';
import type { TalentProfile as TalentProfileType } from '@/types/talent';

interface TalentProfileWithSocial extends TalentProfileType {
  social?: Record<string, string>;
}

export default function TalentProfilePage() {
  const router = useRouter();
  const { id: rawId } = router.query;
  const id = typeof rawId === 'string' ? rawId : undefined;
  const [profile, setProfile] = useState<TalentProfileWithSocial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const env = (import.meta as any)?.env ?? process.env;
  const API_URL = env.VITE_API_URL || env.API_URL || '';

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError('Profile not found');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/talent/${id}`);
        if (res.status === 404) {
          setError('Profile not found');
          setLoading(false);
          return;
        }
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (_err) {
        setError('Profile not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading || (!profile && !error)) return <ProfileLoadingState />;
  if (error || !profile) return <ProfileErrorState error={error} />;

  return (
    <>
      <SEO title={profile.full_name} description={profile.bio || ''} />
      <main className="min-h-screen bg-zion-blue py-8 text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <ProfileCard profile={profile} />
          <PortfolioList projects={profile.key_projects || []} />
          <ProfileContact
            email={profile.user_id}
            profileName={profile.full_name}
            profileType="talent"
          />
        </div>
      </main>
    </>
  );
}
