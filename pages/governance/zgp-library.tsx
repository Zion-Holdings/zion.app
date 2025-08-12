import React from 'react';
import Link from 'next/link';
import { PROPOSAL_TEMPLATES } from '@/data/proposalTemplates';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const grouped = PROPOSAL_TEMPLATES.reduce<Record<string, typeof PROPOSAL_TEMPLATES>>( (acc, t) => {
  (acc[t.category] = acc[t.category] || []).push(t);
  return acc;
}, {} as any);

const ZgpLibraryPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Zion Governance Proposal Library</h1>
      {Object.entries(grouped).map(([category, templates]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Card key={t.id}>
                <CardHeader>
                  <CardTitle>{t.title} ({t.id})</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{t.summary}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/governance/create?template=${t.id}`} className="ml-auto">
                    <Button size="sm">Use Template</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZgpLibraryPage;
