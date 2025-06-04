import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { useParams, useNavigate } from 'react-router-dom';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';
import useSWR from 'swr';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TalentProfileBasic {
  id: string;
  name: string;
  bio?: string;
  skills?: string[];
  portfolio?: string[];
}

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
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const { data, error, isLoading } = useSWR<TalentProfileBasic>(
    id ? `/api/talent/${id}` : null,
    (url: string) => fetch(url).then(handleApiResponse)
  );

  if (isLoading || !id) {
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
        title={data.name}
        description={data.bio ?? undefined} // Ensure description is string or undefined
        openGraph={{
          images: undefined,
          title: data.name,
          description: data.bio ?? undefined // Ensure description is string or undefined
        }}
      />
      <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold" data-testid="profile-name">
                {data.name}
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

          {data.portfolio && data.portfolio.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
              <ul className="list-disc ml-5 space-y-1">
                {data.portfolio.map((item) => (
                  <li key={item}>{item}</li>
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
