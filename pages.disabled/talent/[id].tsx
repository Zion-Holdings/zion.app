import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import type { TalentProfile as TalentProfileType } from '@/types/talent';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';

interface TalentProfileWithSocial extends TalentProfileType {
  social?: Record<string, string>;
}

const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>
      <p className="text-xl text-zion-slate-light">
        {statusCode === 404 ? 'Page Not Found' : 'Something went wrong'}
      </p>
    </div>
  </div>
);

const TalentProfilePage: React.FC = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<TalentProfileWithSocial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/talent/${id}`);
        if (res.status === 404) {
          setError('Talent not found');
          setProfile(null);
          return;
        }
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (err) {
        setError('Talent not found');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProfile();
    }
  }, [id]);

  if (loading) return <ProfileLoadingState />;
  if (error || !profile) return <ErrorPage statusCode={404} />;

  return (
    <main className="min-h-screen bg-zion-blue py-8 text-white">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold" data-testid="profile-name">
          {profile.full_name}
        </h1>
        {profile.skills && profile.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc ml-5 space-y-1">
              {profile.skills.map(skill => (
                <li key={skill} className="text-zion-slate-light">{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {profile.availability_type && (
          <div className="mt-4">
            <span className="text-zion-cyan font-medium">Availability:</span> {profile.availability_type}
          </div>
        )}
      </div>
    </main>
  );
};

export default TalentProfilePage;
