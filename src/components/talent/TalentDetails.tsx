import React from 'react';
import { TalentProfile } from '@/types/talent';
import { Button } from '@/components/ui/button';

interface TalentDetailsProps {
  talent: TalentProfile;
}

const TalentDetails: React.FC<TalentDetailsProps> = ({ talent }) => (
  <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
    <div className="container mx-auto px-4 space-y-6">
      <h1 className="text-3xl font-bold">{talent.full_name}</h1>

      {talent.bio && <p>{talent.bio}</p>}

      {talent.key_projects && talent.key_projects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <ul className="space-y-2">
            {talent.key_projects.map((proj, i) => (
              <li key={i} className="border-b border-zion-purple/20 pb-2">
                <h3 className="font-medium">{proj.title}</h3>
                <p className="text-sm text-zion-slate">{proj.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Button className="bg-zion-purple text-white">Hire</Button>
    </div>
  </main>
);

export default TalentDetails;
