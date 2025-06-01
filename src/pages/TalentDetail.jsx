import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '@/components/NotFound';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function TalentDetail() {
  const { id } = useParams();
  const [talent, setTalent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalent = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/talent/${id}`);
        if (!res.ok) throw new Error('Talent not found');
        const data = await res.json();
        setTalent(data.profile);
      } catch (err) {
        setTalent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTalent();
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

  if (!talent) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold" data-testid="talent-name">{talent.full_name}</h1>
        {talent.bio && <p>{talent.bio}</p>}
        {talent.skills && talent.skills.length > 0 && (
          <ul className="list-disc ml-4">
            {talent.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}
        {talent.average_rating && <p>Rating: {talent.average_rating}</p>}
        <Button className="bg-zion-purple text-white">Contact</Button>
      </div>
    </main>
  );
}
