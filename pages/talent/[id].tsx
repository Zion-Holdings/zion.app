import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TalentProfile {
  full_name: string;
  skills?: string[];
  availability_type?: string;
}

interface TalentProfileWithSocial extends TalentProfile {
  social?: Record<string, string>;
}

// Simple error component to replace Next.js ErrorPage
const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => (
  <div className="min-h-screen bg-zion-blue py-8 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>
      <p className="text-xl">
        {statusCode === 404 ? 'Talent not found' : 'Something went wrong'}
      </p>
    </div>
  </div>
);

// Simple loading component
const ProfileLoadingState: React.FC = () => (
  <div className="min-h-screen bg-zion-blue py-8 text-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Loading profile...</p>
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
        // For now, we'll simulate a profile since we don't have the API
        // In a real app, this would be: const res = await fetch(`/api/talent/${id}`);
        setTimeout(() => {
          const mockProfile: TalentProfileWithSocial = {
            full_name: `Talent ${id}`,
            skills: ['React', 'TypeScript', 'Node.js'],
            availability_type: 'Full-time',
            social: {
              linkedin: 'https://linkedin.com/in/talent',
              github: 'https://github.com/talent'
            }
          };
          setProfile(mockProfile);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Talent not found');
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
        {profile.social && (
          <div>
            <h2 className="font-semibold">Social Links</h2>
            <div className="space-x-4">
              {Object.entries(profile.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 underline"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TalentProfilePage;
