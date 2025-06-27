import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { ROADMAP_ITEMS, RoadmapItem } from '@/data/roadmap';
import { safeStorage } from '@/utils/safeStorage';

const STATUSES: RoadmapItem['status'][] = ['Planned', 'In Progress', 'Completed'];

function voteWeight(role?: string) {
  if (!role) return 1;
  const r = role.toLowerCase();
  if (r === 'client') return 2;
  if (r === 'zion$ staker' || r === 'staker') return 3;
  return 1; // default for Talent and others
}

export default function RoadmapPage() {
  const { user } = useAuth();
  const [items, setItems] = useState<RoadmapItem[]>(() => {
    const raw = safeStorage.getItem('roadmap_items');
    if (!raw) return ROADMAP_ITEMS;
    try {
      return JSON.parse(raw) as RoadmapItem[];
    } catch {
      return ROADMAP_ITEMS;
    }
  });

  useEffect(() => {
    safeStorage.setItem('roadmap_items', JSON.stringify(items));
  }, [items]);

  const handleUpvote = (id: string) => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to vote' });
      return;
    }
    const weight = voteWeight(user.role);
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, upvotes: item.upvotes + weight } : item
      )
    );
  };

  return (
    <>
      <NextSeo title="Zion Roadmap" description="Vote on upcoming features" />
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto space-y-8">
          <h1 className="text-3xl font-bold mb-4">Product Roadmap</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {STATUSES.map((status) => (
              <div key={status} className="space-y-4">
                <h2 className="text-xl font-semibold">{status}</h2>
                {items
                  .filter((f) => f.status === status)
                  .map((f) => (
                    <Card key={f.id} className="bg-card/80">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{f.title}</span>
                          <span className="text-sm text-muted-foreground">{f.eta}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {f.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {f.tags.map((t) => (
                            <Badge key={t} variant="outline">
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUpvote(f.id)}
                          >
                            Upvote ({f.upvotes})
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/roadmap/${f.id}`}>Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ))}
          </div>
          <div className="pt-8">
            <Button asChild>
              <Link href="/roadmap/suggest">Suggest a Feature</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
