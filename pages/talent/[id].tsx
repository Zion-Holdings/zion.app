import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import { Skeleton } from '@/components/ui/skeleton';
import NotFound from '@/components/NotFound';
import apiClient from '@/services/apiClient';
import { toast } from '@/hooks/use-toast'; // Import toast

const TalentPage: React.FC = () => {
  const router = useRouter() as NextRouter;
  const { id } = router.query;

  const [talentData, setTalentData] = useState<(TalentProfile & { social?: Record<string, string> }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // We want to show skeleton if id is not yet available, so we don't set loading to false here.
    // setLoading(false) will be called in fetchTalent or if id remains undefined after router is ready.
    if (!id && router.isReady) { // check router.isReady to ensure query params are populated
      setLoading(false); // No ID, nothing to fetch, stop loading.
      return;
    }

    if (!id) return; // If id is still not available (e.g. router not ready), wait.

    const fetchTalent = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/api/talent/${id}`);
        setTalentData(response.data);
        setError(null);
      } catch (err: any) { // Use 'any' or a more specific error type if available for Axios
        if (err.response?.status === 404) {
          toast.error("Profile not found");
          router.push('/talent');
          // Set error to null or a specific marker to prevent generic error display if needed,
          // though redirection might make it unnecessary.
          setError(null); // Explicitly clear error state for 404
          setTalentData(null);
        } else {
          setError(err as Error);
          setTalentData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTalent();
  }, [id, router.isReady]);

  if (loading || !id) { // Show skeleton if loading or if id is not available yet
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Left Column: Profile Picture and Basic Info */}
              <div className="md:w-1/3 p-6 bg-gray-50 flex flex-col items-center">
                <Skeleton className="h-40 w-40 rounded-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="flex space-x-2">
                  <Skeleton className="h-8 w-8 rounded" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
              {/* Right Column: Detailed Info */}
              <div className="md:w-2/3 p-6">
                <Skeleton className="h-8 w-3/4 mb-6" /> {/* Bio title skeleton */}
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Skeleton className="h-6 w-1/2 mb-3" /> {/* Skills title skeleton */}
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-12 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-6 w-1/2 mb-3" /> {/* Rate title skeleton */}
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>

                <Skeleton className="h-6 w-1/3 mb-3" /> {/* Portfolio title skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error display: Only show if error exists AND it's not a 404 that's being redirected
  // However, if router.push is quick, this might not be seen often.
  // The `NotFound` component is rendered if `talentData` is null and no error has been set (or error was cleared for 404).
  if (error && error.message) { // Check error.message to avoid rendering for cleared 404s if setError(null) was used
    return <div>Error loading talent data: {error.message}</div>;
  }

  // If !talentData and no error (or error was cleared for 404), and not loading, show NotFound.
  // This handles the case where ID was invalid and redirected, then user hits "back" or if redirection fails.
  // Also handles the initial state where `id` is present, `loading` becomes false, but `fetchTalent` fails (e.g. network error before 404 check)
  // and `talentData` remains null.
  if (!talentData && !loading) {
    return <NotFound />;
  }

  // This part should only be reached if talentData is successfully fetched.
  if (!talentData) {
     // This case should ideally be covered by loading, error, or the NotFound above.
     // If we reach here, it means loading is false, no error, but no talentData.
     // This could happen if id was invalid, fetchTalent ran, set loading false, but didn't set error (e.g. 404 redirect logic)
     // and then the component re-renders before redirect completes.
     // The skeleton loader for !id also helps prevent premature NotFound.
    return <NotFound />; // Fallback, though the above conditions should catch most scenarios
  }

  return (
    <>
      <Head>
        <title>{talentData.full_name}</title>
      </Head>
      <TalentDetails talent={talentData} />
    </>
  );
};

export default TalentPage;
