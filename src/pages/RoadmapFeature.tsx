import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { ROADMAP_ITEMS, RoadmapItem } from '@/data/roadmap';
import { safeStorage } from '@/utils/safeStorage';

export default function RoadmapFeaturePage() {
  const router = useRouter(); // Hook
  const { id } = router.query as { id?: string };
  const { user } = useAuth(); // Moved Hook up
  const [items, setItems] = useState<RoadmapItem[]>(() => { // Moved Hook up
    const raw = safeStorage.getItem('roadmap_items');
    if (!raw) return ROADMAP_ITEMS;
    try {
      return JSON.parse(raw) as RoadmapItem[];
    } catch {
      return ROADMAP_ITEMS;
    }
  });
  const [followed, setFollowed] = useState(() => { // Moved Hook up
    // Initializing state based on `id` which might be undefined here.
    // The effect below will handle setting it correctly once `id` is available.
    if (!id) return false;
    return safeStorage.getItem(`feature_follow_${id}`) === 'true';
  });

  // Effect for items persistence
  useEffect(() => {
    safeStorage.setItem('roadmap_items', JSON.stringify(items));
  }, [items]);

  // Effect for followed state persistence
  useEffect(() => {
    if (id) { // This effect now correctly runs after id is definitely available or changes
      safeStorage.setItem(`feature_follow_${id}`, String(followed));
    }
  }, [id, followed]);

  // Early return if id is not yet available (after hooks)
  if (!id) return null;

  const feature = items.find((f) => f.id === id);
  if (!feature) {
    return (
      <div className="p-8 text-center">Feature not found</div>
    );
  }

  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow' });
      return;
    }
    setFollowed(true);
    setItems((prev) =>
      prev.map((f) =>
        f.id === feature.id ? { ...f, followers: f.followers + 1 } : f
      )
    );
  };

  return (
    <>
      <NextSeo title={feature.title} description={feature.description} />
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto space-y-6">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{feature.title}</span>
                <span className="text-sm text-muted-foreground">{feature.eta}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Button disabled={followed} onClick={handleFollow}>
                  {followed ? 'Following' : `Follow (${feature.followers})`}
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/roadmap">Back to Roadmap</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
