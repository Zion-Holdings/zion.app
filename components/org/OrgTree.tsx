import React from 'react';
import type { OrgData } from '../../types/org';
import PersonCard from './PersonCard';

export default function OrgTree({ data, showPhotos }: { data: OrgData; showPhotos: boolean }) {
  return (
    <div className="space-y-8">
      <Section title="Founders">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.founders.map((p) => (
            <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
          ))}
        </div>
      </Section>

      <Section title="Core Team">
        <div className="space-y-6">
          {['Ops', 'Tech', 'Growth', 'Legal'].map((dept) => {
            const members = data.coreTeam.filter((m) => m.department.toLowerCase() === dept.toLowerCase());
            if (members.length === 0) return null;
            return (
              <div key={dept}>
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{dept}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((p) => (
                    <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {data.contributors.length > 0 && (
        <Section title="Contributors">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.contributors.map((p) => (
              <PersonCard key={p.id} person={p} showPhoto={showPhotos} />
            ))}
          </div>
        </Section>
      )}

      <Section title="DAO Delegates">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.delegates.map((p) => (
            <div key={p.id}>
              <PersonCard person={p} showPhoto={showPhotos} />
              {p.votingPower !== undefined && (
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">Voting power: {p.votingPower}</div>
              )}
            </div>
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