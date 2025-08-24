import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import type { TalentProfile as TalentProfileType } from '@/types/talent';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';

interface TalentProfileWithSocial extends TalentProfileType {
  social?: Record<string, string>;
}

const TalentProfilePage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  if (error || !profile) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-4">Talent not found</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-zion-purple hover:bg-zion-purple-dark px-6 py-2 rounded-md"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zion-blue py-8 text-white">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold" data-testid="profile-name">
          {profile.full_name}
        </h1>
        {profile.skills && profile.skills.length > 0 && (
          <div>
            <h2 className="font-semibold">Skills</h2>
            <ul className="list-disc ml-5">
              {profile.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {profile.availability_type && (
          <p>Availability: {profile.availability_type}</p>
        )}
      </div>
    </main>
  );
};

export default TalentProfilePage;
