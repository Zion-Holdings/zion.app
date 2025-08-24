import React from 'react';
import { Feature } from '../../types/roadmap';
import RoadmapCard from './RoadmapCard';

type Props = {
  features: Feature[];
  onUpvote: (feature: Feature) => void;
  onFollow: (feature: Feature) => void;
};

export default function RoadmapBoard({ features, onUpvote, onFollow }: Props) {
  const groups: Record<string, Feature[]> = {
    Planned: [],
    'In Progress': [],
    Completed: [],
  };
  for (const f of features) {
    if (f.status === 'Planned') groups.Planned.push(f);
    else if (f.status === 'In Progress') groups['In Progress'].push(f);
    else if (f.status === 'Completed') groups.Completed.push(f);
  }
  const Column: React.FC<{ title: string; items: Feature[] }> = ({ title, items }) => (
    <div className="flex-1 min-w-[280px]">
      <div className="sticky top-0 z-10 backdrop-blur bg-transparent/30 py-2">
        <h2 className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">{title}</h2>
        <div className="h-1 mt-2 rounded-full bg-zinc-800">
          <div className="h-1 rounded-full bg-indigo-500" style={{ width: `${Math.min(100, Math.round((items.length / Math.max(1, features.length)) * 100))}%` }} />
        </div>
      </div>
      <div className="mt-3 space-y-3">
        {items.map((f) => (
          <RoadmapCard key={f.id} feature={f} onUpvote={onUpvote} onFollow={onFollow} />)
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Column title="Planned" items={groups.Planned} />
      <Column title="In Progress" items={groups['In Progress']} />
      <Column title="Completed" items={groups.Completed} />
    </div>
  );
}