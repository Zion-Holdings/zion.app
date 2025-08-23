import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';
import useSWR from 'swr';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { TalentProfile } from '@/types/talent';

// API returns `{ profile: TalentProfile }`; swr will store just the profile
type TalentProfileResponse = { profile: TalentProfile | null };

// fetcher-like function for handling API responses
const handleApiResponse = async (res: Response) => {
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Read response body once and attempt to parse JSON
    const raw = await res.text();
    try {
      (error as any).info = JSON.parse(raw);
    } catch {
      (error as any).info = { message: raw };
    }
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
};

const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };

  const { data, error, isLoading } = useSWR<TalentProfile | null>(
    id ? `/api/talent/${id}` : null,
    async (url: string) => {
      const result: TalentProfileResponse = await fetch(url).then(handleApiResponse);
      return result.profile;
    }
  );

  if (isLoading || !router.isReady || !id) {
    return <TalentProfileSkeleton />;
  }

  // Specific 404 error from API
  if (error && (error as any).status === 404) {
    return <NotFound />;
  }

  // Other errors (non-404)
  if (error) {
    const err: any = error;
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Error</h2>
        <p>Failed to load talent profile.</p>
        {err.status && <p>Status: {err.status}</p>}
        <p>Message: {err.info?.error || err.info?.message || err.message}</p>
      </div>
    );
  }

  // API call was successful (no error thrown) but no profile found
  // This also implies !isLoading at this point.
  if (!data) {
    return <NotFound />;
  }

  // If we reach here, talent data is available
  return (
    <>
      <NextSeo
        title={data?.full_name}
        description={data?.bio ?? undefined}
        openGraph={{
          images: undefined,
          title: data?.full_name,
          description: data?.bio ?? undefined
        }}
      />
      <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{data?.full_name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold" data-testid="profile-name">
                {data?.full_name}
              </h1>
              {data.bio && <p className="text-zion-slate-light">{data.bio}</p>}
            </div>
          </div>

          {data.skills && data.skills.length > 0 && (
            <div className="flex flex-wrap gap-2" data-testid="skills">
              {data.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {data.key_projects && data.key_projects.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Key Projects</h2>
              <ul className="space-y-2">
                {data.key_projects.map((project, index) => (
                  <li key={index} className="border-l-2 border-zion-purple pl-4">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-zion-slate-light text-sm">{project.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button className="bg-zion-purple text-white">Hire</Button>
        </div>
      </main>
    </>
  );
};

export default TalentPage;
