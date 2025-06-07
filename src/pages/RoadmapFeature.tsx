import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NextSeo } from '@/components/NextSeo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { ROADMAP_ITEMS, RoadmapItem } from '@/data/roadmap';

export default function RoadmapFeaturePage() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  if (!id) return null;
  const { user } = useAuth();
  const [items, setItems] = useState<RoadmapItem[]>(ROADMAP_ITEMS);
  const feature = items.find((f) => f.id === id);
  if (!feature) {
    return (
      <div className="p-8 text-center">Feature not found</div>
    );
  }

  const [followed, setFollowed] = useState(false);

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
      <Footer />
    </>
  );
}
