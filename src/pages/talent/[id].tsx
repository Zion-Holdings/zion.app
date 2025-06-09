import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useParams
import { SEO } from '@/components/SEO';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
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

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError('Profile not found');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/talent/${id}`);
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (err) {
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
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-3xl font-bold" data-testid="profile-name">
            {profile.full_name}
          </h1>
          {profile.bio && <p>{profile.bio}</p>}
          {profile.hourly_rate && <p>Hourly Rate: ${profile.hourly_rate}/hr</p>}
          {profile.skills && (
            <div>
              <h2 className="font-semibold">Skills</h2>
              <ul className="list-disc ml-5">
                {profile.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {profile.social && (
            <div>
              <h2 className="font-semibold">Social Links</h2>
              <ul className="list-disc ml-5">
                {Object.entries(profile.social).map(([platform, url]) => (
                  <li key={platform}>
                    <a
                      href={url}
                      className="text-zion-cyan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
