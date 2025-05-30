import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

const TalentPage: React.FC = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<TalentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const fetchTalentProfile = async () => {
      const idFromQuery = router.query?.id;
      const id = Array.isArray(idFromQuery) ? idFromQuery[0] : idFromQuery;

      if (!id) {
        setError("Talent ID not found in URL or is invalid.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/talent/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch talent profile: ${response.statusText}`);
        }
        const data = await response.json();
        setProfile(data.profile);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTalentProfile();
  }, [router.isReady, router.query]); // router.query is included to refetch if id changes.

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-4">
              <Skeleton className="w-full h-64 rounded-lg" />
            </div>
            <div className="md:w-2/3 p-8">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-6" />

              <div className="mb-6">
                <Skeleton className="h-6 w-1/4 mb-2" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-16" />
                </div>
              </div>

              <div className="mb-6">
                <Skeleton className="h-6 w-1/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>

              <div>
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
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
