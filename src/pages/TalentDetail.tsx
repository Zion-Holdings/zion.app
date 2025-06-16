import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTalentBySlug } from '@/api/talent';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import type { TalentProfile } from '@/types/talent';

export default function TalentDetail() {
  const router = useRouter();
  const { slug: rawSlug } = router.query;
  const slug = typeof rawSlug === 'string' ? rawSlug : undefined;
  const [talent, setTalent] = useState<TalentProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTalent = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const profile = await getTalentBySlug(slug);
        setTalent(profile);
      } catch (err) {
        setTalent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTalent();
  }, [slug]);

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
    return (
      <div className="p-4" data-testid="talent-not-found">
        <p>Talent not found</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={talent.full_name}
        description={talent.bio || 'Talent profile'}
        ogImage={talent.profile_picture_url}
      />
      <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-3xl font-bold" data-testid="talent-name">{talent.full_name}</h1>
          {talent.bio && <p>{talent.bio}</p>}
          {talent.skills && talent.skills.length > 0 && (
            <ul className="list-disc ml-4" data-testid="talent-skills">
              {talent.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          )}
          {talent.average_rating && <p>Rating: {talent.average_rating}</p>}
          <Button className="bg-zion-purple text-white">Contact</Button>
        </div>
      </main>
    </>
  );
}
