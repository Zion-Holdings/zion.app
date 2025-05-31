import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
l3xoyh-codex/load-talent-profile-data
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import type { NextRouter } from 'next/router';
import { Loader2 } from 'lucide-react';
import { TALENT_PROFILES } from '@/data/talentData';
main
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';

l3xoyh-codex/load-talent-profile-data
const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState<(TalentProfile & { social?: Record<string, string> }) | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/talent/${id}`);
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 space-y-2" data-testid="talent-loading">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (error) {
interface TalentPageProps {
  talent: (TalentProfile & { social?: Record<string, string> }) | null;
}

const TalentPage: React.FC<TalentPageProps> = ({ talent }) => {
  const router = useRouter() as NextRouter & { isFallback?: boolean };

  if ('isFallback' in router && router.isFallback) {
main
    return (
      <div className="p-4">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!profile) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>{profile.full_name}</title>
        <meta property="og:title" content={profile.full_name} />
        {profile.profile_picture_url && (
          <meta property="og:image" content={profile.profile_picture_url} />
        )}
      </Head>
      <TalentDetails talent={profile} />
    </>
  );
};

export default TalentPage;
