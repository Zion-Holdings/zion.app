import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '@/services/apiClient';
import NotFound from '@/components/NotFound';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function TalentDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(['talent', id], async () => {
    const res = await api.get(`/talent/${id}`);
    return res.data.profile;
  }, { enabled: !!id });

  if (isLoading) {
    return (
      <div className="p-4 space-y-2" data-testid="talent-loading">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold" data-testid="talent-name">{data.full_name}</h1>
        {data.bio && <p>{data.bio}</p>}
        {data.skills && data.skills.length > 0 && (
          <ul className="list-disc ml-4">
            {data.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}
        {data.average_rating && <p>Rating: {data.average_rating}</p>}
        <Button className="bg-zion-purple text-white">Contact</Button>
      </div>
    </main>
  );
}
