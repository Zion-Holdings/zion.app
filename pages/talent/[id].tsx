import React, { useState, useEffect } from 'react';
import NextHead from '@/components/NextHead';
import { useRouter } from 'next/router';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentDetails from '@/components/talent/TalentDetails';
import type { TalentProfile } from '@/types/talent';
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';

// fetcher-like function for handling API responses
const handleApiResponse = async (res: Response) => {
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    try {
      (error as any).info = await res.json();
    } catch (e) {
      (error as any).info = { message: await res.text() };
    }
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
};

const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [talent, setTalent] = useState<TalentProfile | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.isReady && typeof id === 'string') {
      setIsLoading(true);
      setError(null);
      fetch(`/api/talent/${id}`)
        .then(handleApiResponse)
        .then(data => {
          if (data && data.profile) {
            setTalent(data.profile);
          } else {
            setTalent(null); // Explicitly set to null if profile is not in data
          }
        })
        .catch(err => {
          setError(err);
          setTalent(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (!router.isReady) {
      // Keep loading if router is not ready yet
      setIsLoading(true);
    } else {
      // Handle cases where id is not a string or router is ready but id is not set
      setIsLoading(false);
      setError(new Error("Invalid ID or router not ready."));
    }
  }, [router.isReady, id]);

  if (isLoading || !router.isReady) {
    return <TalentProfileSkeleton />;
  }

  // Specific 404 error from API
  if (error && error.status === 404) {
    return <NotFound />;
  }

  // Other errors (non-404)
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Error</h2>
        <p>Failed to load talent profile.</p>
        {error.status && <p>Status: {error.status}</p>}
        <p>Message: {error.info?.error || error.info?.message || error.message}</p>
      </div>
    );
  }

  // API call was successful (no error thrown) but no profile found
  // This also implies !isLoading at this point.
  if (!talent) {
    return <NotFound />;
  }

  // If we reach here, talent data is available
  return (
    <>
      <NextHead
        title={talent.full_name}
        description={talent.bio ?? undefined} // Ensure description is string or undefined
        openGraph={{
          image: talent.profile_picture_url ?? undefined, // Ensure image is string or undefined
          title: talent.full_name,
          description: talent.bio ?? undefined // Ensure description is string or undefined
        }}
      />
      <TalentDetails talent={talent} />
    </>
  );
};

export default TalentPage;
