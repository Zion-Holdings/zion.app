import React from 'react';
import { TalentProfile } from '@/types/talent';
import { Button } from '@/components/ui/button';

export interface TalentDetailsProps {
  talent: TalentProfile & { social?: Record<string, string> };
}
const TalentDetails: React.FC<TalentDetailsProps> = ({ talent }) => (
  <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
    <div className="container mx-auto px-4 space-y-6">
      <h1 className="text-3xl font-bold">{talent.full_name}</h1>
      {talent.professional_title && <p className="text-zion-slate-light">{talent.professional_title}</p>}

      {talent.bio && <p>{talent.bio}</p>}

      {talent.skills && talent.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {talent.skills.map((skill) => (
              <li key={skill} className="bg-zion-blue-light rounded px-2 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {talent.hourly_rate && <p>Hourly Rate: ${talent.hourly_rate}/hr</p>}

      {talent.social && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <ul className="space-y-1">
            {Object.entries(talent.social).map(([platform, url]) => (
              <li key={platform}>
                <a href={url} className="text-zion-cyan underline" target="_blank" rel="noopener noreferrer">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

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
