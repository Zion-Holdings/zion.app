import React from 'react';
import type { OrgData } from '../../types/org';
import PersonCard from './PersonCard';

export default function OrgGrid({ data, showPhotos }: { data: OrgData; showPhotos: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Section title="Founders">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.founders.map((p) => (
            <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
          ))}
        </div>
      </Section>

      <Section title="Core Team (Ops, Tech, Growth, Legal)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.coreTeam.map((p) => (
            <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
          ))}
        </div>
      </Section>

      {data.contributors.length > 0 && (
        <Section title="Contributors (bounties, academy mentors, devs)">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.contributors.map((p) => (
              <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
            ))}
          </div>
        </Section>
      )}

      <Section title="DAO Delegates">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.delegates.map((p) => (
            <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </section>
  );
}